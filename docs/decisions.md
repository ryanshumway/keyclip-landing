# Landing site: decisions

**2026-11-24**

- **Desktop: Variant A.** The selected row fills as the Demo plays, windows fade from one to the next. Variants B (side rail, sliding windows) and C (ring, one continuous take) are dropped. "What else should I add?" is dark gray so Download stands out. The page around the Stage is dark (`#111`).
- **Phone: Stories.** One Feature at a time, full screen. Tap a side, swipe, or use the named Back and Next buttons. No Download button, no "Send to my Mac", no "What else should I add?". One small banner: "KeyClip is 100% free. Download on a Mac."
- **Background, desktop and phone:** a moving gradient of large blended blobs, with its own colors for each Feature (`look` in `lib/features.ts`, colors in `lib/looks.ts`). Chosen over photos with water, frost, reeded glass and squares of glass; those prototypes are in `low-fidelity/stage-backgrounds/`. Pause freezes it.
- **Tap Hint:** shown on every visit. May get annoying; revisit later.
- **Who is in the Demos:** Ryan. A drawn stand-in until there are photos; swap them in `lib/demo/person.ts`.
- **The app in the Demos:** rebuilt as HTML from the SwiftUI views (v1.1.0), checked against renders of the real views. It has no license or trial UI. When the app's design changes, update `lib/demo/screens.ts` and `app/demo.css` by hand.
- **Download:** `/download` reads the Sparkle feed and redirects to the newest DMG, so releases need no site edit.
- **Desktop Stage background:** a big change is planned. It lives in `components/StageBackground.tsx` and `.backgrounds` in `app/globals.css`.
- **Phone edges:** rely on the insets the phone reports, with a 16px minimum. The fixed 64px is dropped because Safari's bars already keep the page clear.
- **Both:** Demos loop from the last Feature back to the first, and run at three-quarter speed.
- **No tracking of phone navigation.** The user will judge by gut.

## Phone fallback: the List

The Demo on top with all six Feature titles listed below it. The selected row shows its description and fills as the Demo plays; tapping a row switches to it. Use it if people are confused by Stories.

It is not in the Next.js site. A working copy is in the prototype: open `low-fidelity/landing-revamp/site.html?mobile=list`. The code to port is `.m-rows` in `site.html` and `site.js`, and the `data-mobile=list` rules in `site.css`.
