import type { Look } from "./looks";

type RGB = [number, number, number];
type Blob = { angle: number; pace: number; ox: number; oy: number; vx: number; vy: number; rgb: RGB };

const BLOBS = 8;
/** Blobs give up on a mouse that hasn't moved for this long and follow a slow path instead. */
const IDLE_MS = 5000;

const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as RGB;

const VERTEX = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAGMENT = `precision highp float;
uniform vec2 uRes;uniform float uT,uScale;uniform vec4 uBlob[${BLOBS}];uniform vec3 uColor[${BLOBS}],uBase;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f*=f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec2 px=vec2(gl_FragCoord.x,uRes.y*uScale-gl_FragCoord.y),p=px/uScale;
  /* Grain: each pixel looks up its color from slightly the wrong place. */
  p+=(vec2(hash(px),hash(px+31.))-.5)*16.;
  /* Bending the space the circles are measured in is what changes their shape. */
  vec2 q=p/uRes.y*1.5;float t=uT*.06;
  vec2 w=vec2(noise(q+t),noise(q+vec2(7.3,-t)))-.5;
  w+=.5*(vec2(noise(q*2.1-t),noise(q*2.1+vec2(3.1,t*1.3)))-.5);
  p+=w*uRes.y*.34;
  vec3 c=uBase*uBase;
  for(int i=0;i<${BLOBS};i++){vec2 d=(p-uBlob[i].xy)/uBlob[i].z;c=mix(c,uColor[i]*uColor[i],uBlob[i].w*exp(-dot(d,d)*2.3));}
  c=sqrt(c);c=mix(vec3(dot(c,vec3(.3,.6,.1))),c,1.22);
  gl_FragColor=vec4(clamp(c,0.,1.)+(hash(px+3.)-.5)*.035,1.);
}`;

/** Eight very large, see-through circles that drift, change shape and color, and lean towards the mouse. */
export class GradientPainter {
  private w = 0;
  private h = 0;
  private scale = 1;
  private raf = 0;
  private last = 0;
  private drawn = 0;
  private t = 3;
  private look: Look | null = null;
  private base: RGB | null = null;
  private paused = false;
  private ghost = 0;
  private mouse = { x: 0, y: 0, inside: false, at: -Infinity };
  /** Where the blobs lean: the mouse, smoothed. */
  private lean = { x: 0, y: 0 };
  private pushes: { x: number; y: number; at: number }[] = [];
  private blobs: Blob[] = Array.from({ length: BLOBS }, (_, i) => ({ angle: i * 0.785 + 0.4, pace: 0.5 + ((i * 37) % 10) / 14, ox: 0, oy: 0, vx: 0, vy: 0, rgb: [0, 0, 0] }));
  private still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  private phone = matchMedia("(max-width: 819px)");
  private stop = new AbortController();
  private observers: { disconnect(): void }[] = [];
  private stage: HTMLElement;
  private program!: WebGLProgram;
  private u: Record<string, WebGLUniformLocation | null> = {};

  /** Null when WebGL isn't available; the canvas is then hidden and the CSS gradient under it shows. */
  static start(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
    const painter = gl && new GradientPainter(canvas, gl);
    if (painter?.compile()) {
      painter.listen();
      return painter;
    }
    canvas.hidden = true;
    return null;
  }

  private constructor(private canvas: HTMLCanvasElement, private gl: WebGLRenderingContext) {
    this.stage = canvas.closest<HTMLElement>(".stage")!;
  }

  destroy() {
    this.stop.abort();
    this.observers.forEach((o) => o.disconnect());
    cancelAnimationFrame(this.raf);
  }

  setLook(look: Look) {
    this.look = look;
    this.wake();
  }
  setPaused(on: boolean) {
    this.paused = on;
    this.wake();
  }

  private compile() {
    const { gl } = this;
    const program = gl.createProgram();
    if (!program) return false;
    for (const [type, source] of [[gl.VERTEX_SHADER, VERTEX], [gl.FRAGMENT_SHADER, FRAGMENT]] as const) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      gl.attachShader(program, shader);
    }
    gl.bindAttribLocation(program, 0, "p");
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;
    this.program = program;
    gl.useProgram(program);
    for (const name of ["uRes", "uT", "uScale", "uBlob", "uColor", "uBase"]) this.u[name] = gl.getUniformLocation(program, name);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    return true;
  }

  private listen() {
    const { stage, canvas, mouse } = this;
    const { signal } = this.stop;
    const at = (x: number, y: number) => {
      const r = stage.getBoundingClientRect();
      return { x: x - r.left, y: y - r.top };
    };
    stage.addEventListener("pointermove", (e) => e.pointerType === "mouse" && Object.assign(mouse, at(e.clientX, e.clientY), { inside: true, at: performance.now() }), { signal });
    stage.addEventListener("pointerleave", () => (mouse.inside = false), { signal });
    stage.addEventListener("pointerdown", (e) => {
      if ((e.target as Element).closest("button,a")) return;
      const p = at(e.clientX, e.clientY);
      this.push(p.x, p.y);
    }, { signal });
    canvas.addEventListener("webglcontextlost", () => {
      canvas.hidden = true;
      this.destroy();
    }, { signal });

    // A click made by the Demo's own cursor pushes the blobs too.
    const clicks = new MutationObserver((records) => {
      for (const { target, oldValue } of records) {
        const el = target as Element;
        if (!el.classList.contains("cur") || !el.classList.contains("dn") || /\bdn\b/.test(oldValue ?? "")) continue;
        const r = el.getBoundingClientRect();
        const p = at(r.left, r.top);
        this.push(p.x, p.y);
      }
    });
    clicks.observe(stage, { subtree: true, attributes: true, attributeFilter: ["class"], attributeOldValue: true });
    const size = new ResizeObserver(() => {
      this.w = stage.clientWidth;
      this.h = stage.clientHeight;
      this.scale = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(this.w * this.scale);
      canvas.height = Math.round(this.h * this.scale);
      this.gl.viewport(0, 0, canvas.width, canvas.height);
      // Resizing empties the canvas, so fill it before it is shown.
      if (this.look) this.draw(0);
      this.wake();
    });
    size.observe(stage);
    this.observers = [clicks, size];
  }

  private push(x: number, y: number) {
    this.pushes = [{ x, y, at: performance.now() }, ...this.pushes.slice(0, 2)];
  }

  private wake() {
    cancelAnimationFrame(this.raf);
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  private frame = (now: number) => {
    const resting = this.paused || this.still;
    // Phones get 30 frames a second: it moves too slowly to tell, and it saves battery.
    if (!this.phone.matches || now - this.drawn > 30) {
      const dt = Math.max(0, Math.min(0.05, (now - this.last) / 1000));
      this.last = this.drawn = now;
      if (this.look && this.w) this.draw(resting ? 0 : dt, this.still ? 1 : Math.max(dt, 1 / 120));
    }
    // Nothing moves while resting, but a change of Feature still has to finish changing color.
    if (!resting || !this.settled()) this.raf = requestAnimationFrame(this.frame);
  };

  private settled() {
    const to = this.look && rgb(this.look.base);
    return !!to && !!this.base && this.base.every((v, i) => Math.abs(v - to[i]) < 0.004);
  }

  private draw(dt: number, fade = 0) {
    const { gl, u, w, h, mouse, lean, look } = this;
    const { base, colors } = look!;
    this.t += dt;
    const t = this.t;
    const now = performance.now();
    const first = !this.base;
    const ease = first || this.still ? 1 : 1 - Math.exp(-fade * 1.6);
    const toward = (v: RGB, to: number[]) => v.forEach((x, i) => (v[i] += (to[i] - x) * ease));
    this.base ??= rgb(base);
    toward(this.base, rgb(base));

    this.ghost += dt * 0.32;
    const follow = mouse.inside && now - mouse.at < IDLE_MS;
    const goal = follow ? mouse : { x: w / 2 + Math.cos(this.ghost) * w * 0.44, y: h * 0.45 + Math.sin(this.ghost * 1.6) * h * 0.4 };
    lean.x += (goal.x - lean.x) * Math.min(1, dt * 7);
    lean.y += (goal.y - lean.y) * Math.min(1, dt * 7);

    const size = Math.max(w, h);
    const pos: number[] = [];
    const col: number[] = [];
    this.blobs.forEach((b, i) => {
      const x = w * (0.5 + 0.47 * Math.cos(b.angle + t * 0.055 * b.pace));
      const y = h * (0.55 + 0.5 * Math.sin(b.angle * 1.7 + t * 0.07 * b.pace));
      const r = size * (0.25 + 0.13 * b.pace) * (1 + 0.2 * Math.sin(t * 0.17 * b.pace + i * 2.1));
      if (dt) {
        let fx = -b.ox * 1.6;
        let fy = -b.oy * 1.6;
        const dx = lean.x - x - b.ox;
        const dy = lean.y - y - b.oy;
        const pull = 3.4 * Math.exp(-(dx * dx + dy * dy) / (2 * (size * 0.34) ** 2));
        fx += dx * pull;
        fy += dy * pull;
        for (const p of this.pushes) {
          if (now - p.at > 350) continue;
          const px = x + b.ox - p.x;
          const py = y + b.oy - p.y;
          const d = Math.hypot(px, py) + 60;
          const shove = (2600 * Math.exp((-d * d) / (2 * (size * 0.4) ** 2))) / d;
          fx += px * shove;
          fy += py * shove;
        }
        const drag = Math.exp(-dt * 1.5);
        b.vx = (b.vx + fx * dt) * drag;
        b.vy = (b.vy + fy * dt) * drag;
        b.ox += b.vx * dt;
        b.oy += b.vy * dt;
      }
      // Each blob walks slowly round the six colors.
      const step = i + t * 0.05;
      const f = step % 1;
      const mix = f * f * (3 - 2 * f);
      const from = rgb(colors[Math.floor(step) % 6]);
      const to = rgb(colors[(Math.floor(step) + 1) % 6]);
      toward(b.rgb, from.map((v, k) => v + (to[k] - v) * mix));
      pos.push(x + b.ox, y + b.oy, r, 0.78 + 0.16 * Math.sin(t * 0.11 + i));
      col.push(...b.rgb);
    });

    gl.useProgram(this.program);
    gl.uniform2f(u.uRes, w, h);
    gl.uniform1f(u.uScale, this.scale);
    gl.uniform1f(u.uT, t);
    gl.uniform4fv(u.uBlob, pos);
    gl.uniform3fv(u.uColor, col);
    gl.uniform3fv(u.uBase, this.base);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
