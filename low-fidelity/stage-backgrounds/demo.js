"use strict";
var KC = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // low-fidelity/stage-backgrounds/entry.ts
  var entry_exports = {};
  __export(entry_exports, {
    DemoPlayer: () => DemoPlayer,
    FEATURES: () => FEATURES,
    FEATURE_ICON: () => FEATURE_ICON,
    SURVEY_URL: () => SURVEY_URL,
    TAGLINE: () => TAGLINE
  });

  // lib/demo/phosphor.ts
  var PHOSPHOR = {
    "arrow-left": "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z",
    "camera-slash": "M53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76Zm51.66,80.61,37,40.69A27.71,27.71,0,0,1,128,160a28,28,0,0,1-22.42-44.77ZM48,200a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H66.28l28.41,31.26A44,44,0,0,0,128,176a44.21,44.21,0,0,0,25.44-8.12L182.64,200ZM232,80V186a8,8,0,0,1-16,0V80a8,8,0,0,0-8-8H176a8,8,0,0,1-6.65-3.56L155.71,48H100.24a8,8,0,0,1-12.91-9.42l2-3A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80Z",
    "camera": "M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z",
    "chat-circle": "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88.11,88.11,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
    "facebook-logo": "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
    "folder-open": "M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Zm112,136H43.1l26.67-80H232Z",
    "gear": "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z",
    "gif": "M144,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm88-8H176a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V136h40a8,8,0,0,0,0-16H184V80h48a8,8,0,0,0,0-16ZM96,120H72a8,8,0,0,0,0,16H88v16a24,24,0,0,1-48,0V104A24,24,0,0,1,64,80c11.19,0,21.61,7.74,24.25,18a8,8,0,0,0,15.5-4C99.27,76.62,82.56,64,64,64a40,40,0,0,0-40,40v48a40,40,0,0,0,80,0V128A8,8,0,0,0,96,120Z",
    "image-square": "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z",
    "images-square": "M208,32H80A16,16,0,0,0,64,48V64H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V192h16a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,48H208v69.38l-16.7-16.7a16,16,0,0,0-22.62,0L93.37,176H80Zm96,160H48V80H64v96a16,16,0,0,0,16,16h96Zm32-32H116l64-64,28,28v36Zm-88-64A24,24,0,1,0,96,88,24,24,0,0,0,120,112Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,120,80Z",
    "instagram-logo": "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
    "linkedin-logo": "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
    "microphone-slash": "M213.92,218.62l-160-176A8,8,0,0,0,42.08,53.38L80,95.09V128a48,48,0,0,0,69.11,43.12l11.1,12.2A63.41,63.41,0,0,1,128,192a64.07,64.07,0,0,1-64-64,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.59a78.83,78.83,0,0,0,35.16-12.22l30.92,34a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V112.69l41.66,45.82A32,32,0,0,1,128,160Zm57.52-3.91A63.32,63.32,0,0,0,192,128a8,8,0,0,1,16,0,79.16,79.16,0,0,1-8.11,35.12,8,8,0,0,1-7.19,4.49,7.88,7.88,0,0,1-3.51-.82A8,8,0,0,1,185.52,156.09ZM84,44.87A48,48,0,0,1,176,64v64a49.19,49.19,0,0,1-.26,5,8,8,0,0,1-8,7.17,8.13,8.13,0,0,1-.84,0,8,8,0,0,1-7.12-8.79c.11-1.1.17-2.24.17-3.36V64A32,32,0,0,0,98.64,51.25,8,8,0,1,1,84,44.87Z",
    "microphone": "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z",
    "monitor": "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z",
    "selection-background": "M160,80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16V96A16,16,0,0,0,160,80Zm0,128H48V96H160ZM136,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,40Zm88,8v8a8,8,0,0,1-16,0V48h-8a8,8,0,0,1,0-16h8A16,16,0,0,1,224,48Zm0,48v16a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm0,56v8a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0ZM80,56V48A16,16,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Z",
    "timer": "M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z",
    "video-camera": "M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z",
    "x-logo": "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
    "youtube-logo": "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"
  };

  // lib/demo/icons.ts
  var ph = (name, size = 18) => `<svg class="ph" width="${size}" height="${size}" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="${PHOSPHOR[name]}"/></svg>`;
  var LINE = {
    trash: '<path d="M3.5 5.500h13M7.500 5.500V4a1.300 1.300 0 0 1 1.300-1.300h2.400A1.300 1.300 0 0 1 12.500 4v1.500M5 5.500l.7 10.300a1.700 1.700 0 0 0 1.700 1.500h5.200a1.700 1.700 0 0 0 1.700-1.500L15 5.500M8.200 8.500l.2 6M11.800 8.500l-.2 6"/>',
    redo: '<path d="M4.600 6.800A6.600 6.600 0 1 1 3.400 10.700M4.300 2.900l.2 4 4-.2"/>',
    uturn: '<path d="M4 7.500h8.200a4.200 4.200 0 0 1 0 8.400H9.500M7.500 4L4 7.500 7.500 11"/>',
    bubble: '<path d="M5 3.500h10A2.500 2.500 0 0 1 17.500 6v6a2.500 2.500 0 0 1-2.500 2.500H9.500L6 17.500v-3H5A2.500 2.500 0 0 1 2.500 12V6A2.500 2.500 0 0 1 5 3.500ZM6 8h2.500M10.500 8H14M6 11h4.500M12.500 11H14"/>',
    photos: '<path d="M6.500 6.800h10A1.500 1.500 0 0 1 18 8.300v6.900a1.500 1.500 0 0 1-1.500 1.500h-10A1.500 1.500 0 0 1 5 15.200V8.300a1.500 1.500 0 0 1 1.500-1.500ZM5.200 14.300l3.400-3.200 2.800 2.800 2-1.700 4.300 3.600M3.500 13.200l-1.300-6a1.500 1.500 0 0 1 1.200-1.800l9-1.700a1.500 1.500 0 0 1 1.700 1.100"/><circle cx="14" cy="9.800" r=".9" fill="currentColor"/>',
    photo: '<rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2.300 14l4-3.800 3.300 3 2.200-1.800 5.800 4.200"/><circle cx="13.500" cy="7.600" r="1" fill="currentColor"/>',
    close: '<path d="M4.500 4.500l11 11M15.500 4.500l-11 11"/>',
    sliders: '<path d="M2.500 5.500h8.500M15 5.500h2.500M2.500 10h3M9.500 10h8M2.500 14.500h8.500M15 14.500h2.500"/><circle cx="13" cy="5.500" r="1.800"/><circle cx="7.500" cy="10" r="1.800"/><circle cx="13" cy="14.500" r="1.800"/>',
    check: '<path d="M3.500 11l4.300 5L16.500 4"/>',
    share: '<path d="M10 12V2.500M6.800 5.300L10 2.200l3.200 3.100M6.500 8H5.200A1.700 1.700 0 0 0 3.500 9.700v6.100a1.700 1.700 0 0 0 1.700 1.700h9.600a1.700 1.700 0 0 0 1.700-1.700V9.700A1.700 1.700 0 0 0 14.800 8h-1.300"/>',
    docs: '<path d="M8.300 2.500h4.200l3.500 3.600v6.200a1.500 1.500 0 0 1-1.500 1.500H8.300a1.500 1.500 0 0 1-1.500-1.500V4a1.500 1.500 0 0 1 1.500-1.500ZM12.300 2.700v3.600h3.500M6.500 6.300h-.8A1.500 1.500 0 0 0 4.200 7.800V16a1.500 1.500 0 0 0 1.500 1.500h6A1.500 1.500 0 0 0 13.200 16v-2"/>',
    downline: '<path d="M10 3v10.500M5.800 9.500L10 13.700l4.200-4.200M3.800 17h12.400"/>',
    grip: '<path d="M2.500 6h15M2.500 10h15M2.500 14h15"/>',
    plus: '<path d="M10 3.500v13M3.500 10h13"/>',
    minus: '<path d="M3.500 10h13"/>',
    updown: '<path d="M6.500 8L10 4.500 13.500 8M6.500 12l3.500 3.500 3.500-3.500"/>',
    down: '<path d="M4.500 7.500L10 13l5.500-5.500"/>',
    right: '<path d="M7 3.500l6 6.500-6 6.500"/>',
    left: '<path d="M13 3.500L7 10l6 6.500"/>',
    canvas: '<rect x="2.500" y="3.500" width="15" height="13" rx="2"/><path d="M2.500 8h15M11 8v8.500"/>',
    devices: '<path d="M4 13.500V6a1.200 1.200 0 0 1 1.200-1.200h9.600M1.500 15.500h10"/><rect x="13.500" y="7.500" width="5" height="9" rx="1.200"/>',
    search: '<circle cx="8.800" cy="8.800" r="5.300"/><path d="M12.800 12.800l4 4"/>',
    folder: '<path d="M2.500 6A1.500 1.500 0 0 1 4 4.500h3.500l1.800 1.800H16A1.500 1.500 0 0 1 17.500 7.800V14a1.500 1.500 0 0 1-1.500 1.500H4A1.500 1.500 0 0 1 2.500 14Z"/>',
    film: '<rect x="2.500" y="4" width="15" height="12" rx="2"/><path d="M6 4v12M14 4v12M2.500 8H6M2.500 12H6M14 8h3.500M14 12h3.500"/>',
    desktop: '<rect x="2.500" y="3.500" width="15" height="10" rx="1.500"/><path d="M7 17h6M10 13.500V17"/>'
  };
  var line = (name, size = 16, weight = 1.7) => `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LINE[name]}</svg>`;
  var solid = {
    play: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2.200 1.100v9.800a.6.6 0 0 0 .9.500l8-4.900a.6.6 0 0 0 0-1l-8-4.900a.6.6 0 0 0-.9.500Z"/></svg>`,
    pause: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1.800" y="1" width="3" height="10" rx=".8"/><rect x="7.200" y="1" width="3" height="10" rx=".8"/></svg>`,
    rewind: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1" y="1.500" width="1.800" height="9" rx=".6"/><path d="M11 2v8a.5.5 0 0 1-.8.4L4 6.400a.5.5 0 0 1 0-.8l6.200-4a.5.5 0 0 1 .8.400Z"/></svg>`,
    mic: (s = 11) => `<svg width="${s}" height="${s}" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true"><rect x="3.700" y=".5" width="4.600" height="7.600" rx="2.300"/><path d="M1.800 6.300v.5a4.200 4.200 0 0 0 8.400 0v-.5M6 11v2M4 13.200h4" fill="none" stroke="currentColor" stroke-width="1.100" stroke-linecap="round"/></svg>`,
    downcircle: (s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="currentColor"/><path d="M10 5.500v8M6.800 10.500l3.200 3.200 3.200-3.200" fill="none" stroke="var(--kc-yellow)" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    checkcircle: (s, fg, mark) => `<svg width="${s}" height="${s}" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="${fg}"/><path d="M5.900 10.600l2.900 3.200 5.300-7" fill="none" stroke="${mark}" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  };
  var FEATURE_ICON = {
    record: ph("video-camera", 22),
    transcribe: '<svg width="22" height="22" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="24" y="48" width="208" height="160" rx="14"/><path d="M116 108a26 26 0 1 0 0 40M188 108a26 26 0 1 0 0 40"/></svg>',
    gif: ph("gif", 22),
    thumbnails: ph("image-square", 22),
    "images-to-gif": ph("images-square", 22),
    mockup: '<svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192Z"/></svg>'
  };

  // lib/demo/person.ts
  var CUTOUT = null;
  var CAMERA = null;
  var drawn = `<svg class="person" viewBox="0 0 200 200" preserveAspectRatio="xMidYMax meet"><path d="M22 200c2-46 34-66 78-66s76 20 78 66z" fill="#FFD000"/><rect x="84" y="104" width="32" height="42" rx="14" fill="#B97F5C"/><ellipse cx="100" cy="78" rx="37" ry="43" fill="#CF966F"/><path d="M60 80c-6-44 18-60 42-60s46 14 39 60c-4-20-10-28-20-32-18 8-38 6-48 2-8 6-11 16-13 30z" fill="#2A201B"/><circle cx="87" cy="80" r="3.4" fill="#2A201B"/><circle cx="114" cy="80" r="3.4" fill="#2A201B"/><path d="M88 99c7 7 18 7 25 0" fill="none" stroke="#7d4630" stroke-width="3.4" stroke-linecap="round"/></svg>`;
  var person = CUTOUT ? `<img class="person" src="${CUTOUT}" alt="">` : drawn;
  var room = CAMERA ? `<div class="room" style="background-image:url(${CAMERA})"></div>` : `<div class="room drawn"></div>`;

  // lib/demo/screens.ts
  var art = (n) => `../../public/art/${n}.webp`;
  var thumb = (n) => `../../public/art/thumb/${n}.webp`;
  var IMAGES = ["retro-cherry", "retro-kungfuchina", "retro-northernlights", "retro-southwest", "softwaves-blackwhite", "softwaves-bluepurple", "softwaves-greenenergy", "softwaves-peach"];
  var COLORS = ["#000", "#3d3d3d", "#949494", "#0f5c1e", "#5c1a1a", "#17375e", "#401f5c", "#5e3a1a"];
  var STITCH = ["retro-cherry", "softwaves-peach", "retro-northernlights", "retro-southwest"];
  var lights = `<div class="lights"><i class="close"></i><i></i><i></i></div>`;
  var back = (label = "Home") => `<span class="back">${ph("arrow-left", 12)}${label}</span>`;
  var seg = (id, opts, sel = 0, kind = "") => `<div class="seg ${kind}" data-seg="${id}" style="--n:${opts.length};--i:${sel}">${opts.map((o, i) => `<span class="${i === sel ? "on" : ""}" data-o="${i}">${o}</span>`).join("")}</div>`;
  var toast = (title, file) => `<div class="toast">${solid.checkcircle(20, "#000", "var(--kc-yellow)")}<div><b>${title}</b>${file ? `<small>${file}</small>` : ""}</div><span>Show in Finder</span></div>`;
  var BARS = [38, 52, 46, 63, 58, 74, 70, 96];
  var desktop = `<div class="desk" style="background-image:url(${art("softwaves-bluepurple")})"><div class="br"><div class="br-top"><i></i><i></i><i></i><span>app.sunnyside.co</span></div><div class="br-body"><aside><b>Sunnyside</b><u class="on">Overview</u><u>Campaigns</u><u>People</u><u>Settings</u></aside><section><small>Signups</small><h4>12,480<em>+18% this week</em></h4><div class="bars">${BARS.map((h, i) => `<s style="--h:${h}%" class="${i === BARS.length - 1 ? "hi" : ""}"></s>`).join("")}</div></section></div></div></div>`;
  var bubble = `<div class="face">${person}</div>`;
  var recording = `${desktop}${bubble}`;
  var ROWS = [
    ["video", "video-camera", "#FFD000", "Record Video", "Screen &amp;/or camera. Unlimited Length"],
    ["camera", "camera", "#54D68A", "Record Yourself", "Control your camera and record yourself, no screen."],
    ["gif", "gif", "#FF9724", "Record a GIF", "Short, looping clip for chat &amp; docs", "20S MAX"],
    ["thumb", "image-square", "#FFD000", "Create a Thumbnail", "Thumbnail creation tool for all social apps"],
    ["open", "folder-open", "#FFFFFF", "Open a Video", "Open a pre-recorded video for transcription or GIF creation"],
    ["stitch", "images-square", "#FF9724", "Create a GIF from Images or Videos", "Stitch clips and stills into one loop"]
  ];
  var panel = (o) => `<div class="op ${o.kind}"><aside><small>Favorites</small>${[["desktop", "Desktop"], ["folder", "Documents"], ["downline", "Downloads"], ["film", "Movies"], ["photo", "Pictures"]].map(([i, l]) => `<u class="${l === o.folder ? "on" : ""}">${line(i, 15, 1.4)}${l}</u>`).join("")}</aside><div class="op-main"><div class="op-msg">${o.message}</div><div class="op-bar"><span class="nav">${line("left", 14)}${line("right", 14)}</span><span class="pop">${line("folder", 14, 1.4)}${o.folder}${line("updown", 12)}</span><span class="find">${line("search", 13)}Search</span></div><div class="op-grid">${o.files.map((f, i) => `<div class="file" data-f="${i}"><span class="ft" style="background-image:url(${f.img})">${f.meta ? `<em>${f.meta}</em>` : ""}</span><b>${f.name}</b></div>`).join("")}</div><div class="op-foot"><span class="mac">Cancel</span><span class="mac go b-open">Open</span></div></div></div>`;
  var imageWells = IMAGES.map((n) => `<i data-bg="${n}" style="background-image:url(${thumb(n)})"></i>`).join("");
  var slider = (pct, cls = "") => `<span class="sl ${cls}"><i style="width:${pct}%"></i><u style="left:${pct}%"></u></span>`;
  var stepper = (v, on = true) => `<span class="step ${on ? "" : "off"}"><i>${line("minus", 12, 2.4)}</i><b>${v}</b><em>ms</em><i>${line("plus", 12, 2.4)}</i></span>`;
  var picker = (v, cls = "") => `<span class="pick ${cls}"><b>${v}</b>${line("updown", 13, 1.8)}</span>`;
  var LINES = ["quick tour of the new dashboard.", "Signups are up for the sixth week running.", "Let me show you where that comes from.", "Every bar here is one campaign."];
  var review = `${lights}<div class="rv"><div class="rv-main">
<div class="rv-mode">${seg("mode", ["Recording", "Frame"], 0, "frame")}</div>
<div class="rv-mid"><div class="player"><div class="vid"><div class="canvas"><div class="device"><div class="dscreen">${recording}</div><span class="notch"></span></div></div><div class="cap"></div></div></div><div class="shift"><small>Shift<br>up</small><span><u></u></span><small>\u2013</small></div></div>
<div class="scrub"><span class="pp">${solid.pause()}</span><code class="now">0:00</code>${slider(0, "track")}<code class="dur">0:18</code></div>
<div class="frametools"><div class="cards">
<div class="fc"><h6>${line("canvas", 14, 1.4)}Canvas</h6><div class="fr"><label>Size</label>${seg("canvas", ["Fit", "1:1", "4:5", "16:9<sup>\u2605</sup>", "9:16"], 3, "frame fill")}</div><div class="fr"><label>Show top</label>${seg("top", ["Half", "\u2154", "\xBE"], 2, "frame fill")}</div><div class="fr pad"><label>Padding</label>${slider(59)}<span>Normal \xB7 96px</span></div><div class="stops"><span>Tight</span><span class="on">Normal</span><span>Roomy</span></div></div>
<div class="fc"><h6>${line("devices", 15, 1.4)}Device</h6><div class="fr"><label>Type</label>${seg("dev", ["Auto \xB7 Laptop", "Laptop", "Phone"], 0, "frame fill")}</div><div class="fr sm"><label>Border</label>${slider(38)}<span>24px</span></div><div class="fr"><label>Color</label><div class="wells sq">${["#232425", "#c4c8ce", "#d8b98a", "#e8a8c0", "#62489b", "#24588f", "#128277", "#c01f3a"].map((c, i) => `<i data-dc="${c}" class="${i ? "" : "on"}" style="background:${c}"></i>`).join("")}<i class="well" style="--w:#232425"></i></div></div></div>
<div class="fc"><h6>${line("photo", 14, 1.4)}Background</h6><div class="fr"><label>Images</label><div class="wells imgs">${imageWells}</div></div><div class="fr"><label>Colors</label><div class="wells imgs tight">${COLORS.map((c) => `<i style="background:${c}"></i>`).join("")}<i class="well" style="--w:var(--kc-yellow)"></i></div></div><div class="fr"><label>Custom</label><span class="kb sec up">${line("share", 14)}Upload Custom BG</span></div></div>
</div><p>Output 1920\xD71080 &nbsp;\xB7&nbsp; Showing 99% of device so top padding matches sides &nbsp;\xB7&nbsp; No captions or mic audio</p></div>
<div class="actions"><span class="kb ghost">${line("trash", 17, 1.5)}Trash</span><span class="kb ghost">${line("redo", 15)}Delete &amp; Rerecord</span><u></u><span class="kb sec b-tr"><span class="i">${line("bubble", 18, 1.4)}</span><span class="t">Transcribe</span></span><span class="kb sec b-gif">${line("photos", 19, 1.4)}Convert to GIF</span><span class="kb pri b-save">${solid.downcircle(16)}<span class="t">Save Video\u2026</span></span></div>
<div class="saving"><i></i></div>
</div><aside class="drawer"><header><h5>Transcript</h5><span class="y">${line("sliders", 15, 1.6)}</span><span>${line("close", 13)}</span></header><div class="wait"><span class="spin"></span>Transcribing on-device\u2026</div><ol>${LINES.map((s, i) => `<li><div><code>0:0${i * 3}</code><small>98%</small></div><p>${i ? "" : "<mark>Okay</mark>, "}${s}</p></li>`).join("")}</ol></aside></div>
<div class="sheet"><header><div><b>Export as GIF</b><small>launch-demo</small></div><span class="x">${line("close", 11, 2.2)}</span></header>
<div class="sh-set"><div class="sr"><label>Frame rate</label>${seg("fps", ["10 fps", "15 fps", "24 fps"], 1, "sys")}</div><div class="sr"><label>Scale</label>${seg("scale", ["\xBC size", "\xBD size", "Full size"], 1, "sys")}</div><div class="dim">960 \xD7 540</div><div class="sr loop"><label>Loop</label><i class="toggle"></i></div><div class="sr est"><label>Estimated size</label><b>~3.1 MB</b></div><div class="sf"><span class="kb ghost">Cancel</span><u></u><span class="kb pri b-conv">Convert to GIF</span></div></div>
<div class="sh-run"><div class="pbar"><i></i></div><p>Converting\u2026 0%</p></div>
<div class="sh-done">${solid.checkcircle(36, "var(--kc-yellow)", "#1f2120")}<b>GIF ready</b><small>2.9 MB</small><div class="sf"><span class="kb ghost">Done</span><u></u><span class="kb sec b-copy">${line("docs", 15, 1.5)}Copy</span><span class="kb pri b-savegif">${solid.downcircle(16)}Save GIF\u2026</span></div></div></div>
<div class="toast-slot">${toast("Video Saved", "launch-demo.mov")}</div>`;
  var SIZES = [
    ["youtube-logo", "YouTube", [["Thumbnail", 1280, 720]]],
    ["instagram-logo", "Instagram", [["Post (portrait)", 1080, 1350], ["Square", 1080, 1080], ["Story / Reel cover", 1080, 1920]]],
    ["x-logo", "X", [["Post", 1600, 900]]],
    ["facebook-logo", "Facebook", [["Post (portrait)", 1080, 1350], ["Square", 1080, 1080]]],
    ["linkedin-logo", "LinkedIn", [["Post", 1200, 627], ["Square", 1080, 1080]]]
  ];
  var sizeLabel = (icon, text) => `${ph(icon, 16)}<span>${text}</span>${line("down", 11, 2.4)}`;
  var thumbScreen = `${lights}<div class="th">${back()}<div class="size">${sizeLabel("youtube-logo", "YouTube Thumbnail \xB7 1,280\xD7720")}</div>
<div class="sizemenu">${SIZES.map(([icon, name, sizes]) => `<h6>${ph(icon, 13)}${name.toUpperCase()}</h6>${sizes.map(([l, w, h]) => `<div class="opt ${name === "YouTube" ? "on" : ""}" data-size="${name}-${l.split(" ")[0]}"><span>${l}</span><em>${w}\xD7${h}</em>${line("check", 11, 2.6)}</div>`).join("")}`).join("")}</div>
<div class="stagebox"><div class="shot">${room}<div class="bgi"></div>${person}<div class="num"></div><div class="flash"></div></div></div>
<div class="tc"><div><h6>${ph("selection-background", 14)}Background</h6>${seg("bg", ["Keep", "Blur", "Remove"], 0, "yel")}</div><div class="timerwrap"><h6>${ph("timer", 14)}Timer</h6>${seg("tm", ["3s", "5s", "10s"], 0, "yel")}</div></div>
<div class="opts"><div class="cols"><span>Transparent</span>${COLORS.map((c) => `<i style="background:${c}"></i>`).join("")}</div><div class="wells wide">${imageWells}</div></div>
<div class="thfoot"><span class="kb ghost b-re">Delete &amp; retake</span><u></u><span class="snap"><i></i><b>Snap</b></span><span class="kb pri b-dl">${line("downline", 15, 1.9)}Download</span></div></div>
<div class="toast-slot">${toast("Thumbnail saved", "")}</div>`;
  var transitionRow = `<div class="tr">${picker("Dissolve")}<div class="ms"><label>Hold</label>${stepper(800)}<label>Transition</label>${stepper(400)}</div></div>`;
  var itemRow = (n) => `<div class="it">${line("grip", 13, 1.4)}<span class="itt" style="background-image:url(${thumb(n)})"></span><div><b>${n}.png</b><small>Image \xB7 1440\xD7810</small></div><u></u><span class="dots">\u2022\u2022\u2022</span>${line("close", 11, 1.6)}</div>`;
  var stitchScreen = `${lights}<div class="st"><div class="sthead">${back("Back")}<h3>GIF Creator</h3><small class="count">0 images \xB7 0 videos</small></div>
<div class="stview"><div class="stscroll"><div class="gprev">${STITCH.map((n, i) => `<i style="background-image:url(${art(n)})" class="${i ? "" : "on"}"></i>`).join("")}<i class="black"></i><div class="gempty">${line("photos", 36, 1.3)}Preview appears once you add images or videos</div></div>
<div class="transport"><span>${solid.rewind(13)}</span><span>${solid.pause(12)}</span><u></u><code>0.0s / 4.4s</code></div>
<div class="cv"><h6>CANVAS \u2014 fills the gaps around items that don\u2019t share an aspect ratio</h6><div class="fr"><label>Background</label><div class="cols">${["#000", "#fff", "#1f1f1f", "#ffcc00", "#ff8a1f"].map((c, i) => `<i class="${i === 2 ? "on" : ""}" style="background:${c}"></i>`).join("")}</div></div><div class="fr"><label>Border</label>${slider(4)}</div><span class="zero">0px</span><span class="tick"><span>0px</span><span>4px</span><span>8px</span><span>16px</span></span></div>
<div class="apply"><div class="fr"><label>APPLY TO ALL</label>${picker("Dissolve", "all")}<u></u><span class="kb pri b-apply">Apply</span></div><div class="ms"><label>Hold</label>${stepper(800)}<label>Transition</label>${stepper(400)}</div></div>
${STITCH.map((n, i) => itemRow(n) + (i < 3 ? transitionRow : "")).join("")}</div></div>
<div class="menu"><div>Cut</div><div class="on">${line("check", 11, 2.4)}Dissolve</div><div data-m="black">Fade to Black</div><div>Fade to White</div></div>
<div class="gfoot"><div class="f-edit">${seg("gfps", ["10 fps", "15 fps", "24 fps"], 2, "sys")}${seg("gsc", ["\xBC", "\xBD", "Full"], 2, "sys")}<small>1,440 \xD7 810</small><u></u><b class="mb">\u2248 1.7 MB</b><span class="kb pri b-exp">${line("share", 14, 1.7)}Export GIF</span></div><div class="f-run"><div class="pbar"><i></i></div><p>Rendering GIF\u2026 0%</p></div><div class="f-done"><span class="kb ghost">Done</span><small>1.6 MB</small><u></u><span class="kb sec">${line("docs", 15, 1.5)}Copy</span><span class="kb pri b-savegif">${solid.downcircle(16)}Save GIF\u2026</span></div></div>
<div class="picksheet">${panel({ message: "Choose images or videos to turn into a GIF", folder: "Pictures", kind: "sheetp", files: [...STITCH, "softwaves-greenenergy", "retro-kungfuchina"].map((n) => ({ name: `${n}.png`, img: thumb(n), meta: "" })) })}</div>
<div class="toast-slot up">${toast("GIF Saved", "trip-loop.gif")}</div></div>`;
  var SCREENS = {
    home: {
      w: 520,
      h: 590,
      html: `${lights}<div class="home"><h1>KeyClip</h1><p>What do you want to do?</p>${ROWS.map(([id, icon, color, title, sub, chip]) => `<div class="row" data-row="${id}"><span class="ic" style="color:${color};background:${color}29">${ph(icon, 20)}</span><div><b>${title}${chip ? `<em>${chip}</em>` : ""}</b><small>${sub}</small></div>${line("right", 13, 1.9)}</div>`).join("")}</div>`
    },
    record: {
      w: 520,
      h: 626,
      html: `${lights}<div class="rec">${back()}<header><h2>Record Video</h2><span class="kb ghost">${ph("chat-circle", 14)}Feedback</span><span class="kb ghost">${ph("gear", 14)}Settings</span></header><p>Display, Camera &amp; Microphone</p><div class="pane"><div>${recording}</div></div>${[["camera", "FaceTime HD Camera"], ["microphone", "MacBook Pro Microphone"], ["monitor", "Display 1"]].map(([i, l]) => `<div class="src">${ph(i, 18)}<span>${l}</span>${line("down", 12, 1.9)}</div>`).join("")}<div class="recbtn"></div></div>`
    },
    recording: {
      w: 520,
      h: 245,
      max: 1.15,
      below: 190,
      html: `${lights}<div class="live"><code class="timer">00:00</code><span class="mic">${solid.mic(11)}<i><u></u></i></span><div class="act l">${line("uturn", 30, 1.7)}<small>Restart</small></div><div class="pausebtn">${solid.pause(22)}</div><div class="act r">${line("trash", 30, 1.5)}<small>Trash</small></div><div class="finish">${line("check", 14, 2.2)}Finish Recording</div></div>`
    },
    open: {
      w: 760,
      h: 440,
      html: panel({ message: "Choose a video to open in KeyClip", folder: "Movies", kind: "", files: [{ name: "launch-demo.mov", img: thumb("softwaves-bluepurple"), meta: "0:18" }, { name: "team-update.mp4", img: thumb("retro-southwest"), meta: "4:32" }, { name: "onboarding.mov", img: thumb("softwaves-peach"), meta: "12:06" }, { name: "standup.mov", img: thumb("retro-kungfuchina"), meta: "1:40" }] })
    },
    review: { w: 1010, h: 620, html: review },
    thumb: { w: 720, h: 680, html: thumbScreen },
    stitch: { w: 760, h: 680, html: stitchScreen }
  };

  // lib/demo/demos.ts
  var clamp01 = (x) => Math.max(0, Math.min(1, x));
  var span = (t, a, b) => clamp01((t - a) / (b - a));
  var clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;
  var fromHome = (row, next) => [
    [0.35, (c) => c.move(`[data-row=${row}]`, 0.5, 0.5, 750)],
    [1.15, (c) => c.click(`[data-row=${row}]`)],
    [1.35, (c) => c.go(next)]
  ];
  var openVideo = [
    ...fromHome("open", "open"),
    [1.9, (c) => c.move('[data-f="0"]', 0.5, 0.4)],
    [2.45, (c) => {
      c.click('[data-f="0"]');
      c.cls('[data-f="0"]', "on");
      c.cls(".op", "ready");
    }],
    [2.65, (c) => c.move(".b-open")],
    [3.2, (c) => c.click(".b-open")],
    [3.4, (c) => c.go("review")]
  ];
  var scrubber = (c, v, total = 18) => {
    const pct = clamp01(v / total) * 100;
    c.css(".track i", "width", `${pct}%`);
    c.css(".track u", "left", `${pct}%`);
    c.text(".now", clock(Math.max(0, v)));
  };
  var CAPTIONS = [["Okay,", "quick", "tour", "of", "the"], ["new", "dashboard."], ["Signups", "are", "up", "for", "the"], ["sixth", "week", "running."]];
  var DEMOS = [
    {
      id: "record",
      dur: 10.8,
      screens: ["home", "record", "recording", "review"],
      cues: [
        ...fromHome("video", "record"),
        [2, (c) => c.move(".recbtn", 0.5, 0.5, 800)],
        [2.9, (c) => c.click(".recbtn")],
        [3.1, (c) => c.go("recording")],
        [4.9, (c) => c.callout(".timer", "Still going. Still free.", "left")],
        [6.6, (c) => c.move(".finish", 0.5, 0.5, 800)],
        [7.5, (c) => c.click(".finish")],
        [7.75, (c) => {
          c.go("review");
          c.text(".dur", "134:07");
        }],
        [8.4, (c) => c.look(".rv")],
        [8.6, (c) => c.move(".b-save", 0.5, 0.5, 900)]
      ],
      tick(t, c) {
        const s = Math.floor(8047 * Math.pow(span(t, 3.3, 7.5), 3));
        const mm = String(Math.floor(s / 60) % 60).padStart(2, "0"), ss = String(s % 60).padStart(2, "0"), h = Math.floor(s / 3600);
        if (t > 3 && t < 7.7) c.text(".timer", h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`);
        if (t > 7.8) scrubber(c, t - 7.8, 8047);
      }
    },
    {
      id: "transcribe",
      dur: 11.4,
      screens: ["home", "open", "review"],
      cues: [
        ...openVideo,
        [4.1, (c) => c.move(".b-tr", 0.5, 0.5, 800)],
        [4.95, (c) => {
          c.click(".b-tr");
          c.cls(".rv", "drawer-on");
          c.html(".b-tr .i", '<span class="spin"></span>');
          c.text(".b-tr .t", "Transcribing\u2026");
        }],
        [5.4, (c) => c.look(".drawer")],
        [5.9, (c) => {
          c.cls(".drawer", "ready");
          c.html(".b-tr .i", line("bubble", 18, 1.4));
          c.text(".b-tr .t", "Transcribe");
        }],
        [6.5, (c) => c.move(".drawer li:nth-child(2)", 0.55, 0.5, 700)],
        [7.3, (c) => {
          c.click(".drawer li:nth-child(2)");
        }],
        [7.9, (c) => {
          c.look(".rv");
          c.callout(".drawer ol", "No upload needed", "below");
        }]
      ],
      tick(t, c) {
        const seeked = t > 7.35;
        const v = seeked ? 3 + (t - 7.35) : Math.max(0, t - 5.9);
        if (t > 3.5) scrubber(c, t < 5.9 ? Math.max(0, t - 3.6) : v);
        if (t < 5.9) return;
        const base = seeked ? 2 : 0, e = seeked ? t - 7.35 : t - 5.9, k = Math.min(1, Math.floor(e / 1.1)), words = CAPTIONS[base + k];
        const w = Math.min(words.length - 1, Math.floor((e - k * 1.1) / (k ? 1.9 : 1.1) * words.length));
        c.html(".cap", words.map((x, i) => `<span class="${i === w ? "on" : ""}">${x}</span>`).join(""));
        c.each(".drawer li", (el, i) => el.classList.toggle("on", i === Math.min(3, Math.floor(v / 3))));
      }
    },
    {
      id: "gif",
      dur: 11.2,
      screens: ["home", "open", "review"],
      cues: [
        ...openVideo,
        [4, (c) => c.move(".b-gif", 0.5, 0.5, 700)],
        [4.75, (c) => {
          c.click(".b-gif");
          c.cls(".sheet", "show");
        }],
        [4.95, (c) => c.look(".sheet")],
        [5.2, (c) => c.move('[data-seg=fps] [data-o="2"]')],
        [5.8, (c) => {
          c.click('[data-seg=fps] [data-o="2"]');
          c.seg("fps", 2);
          c.text(".est b", "~4.8 MB");
        }],
        [6.2, (c) => c.move(".b-conv")],
        [6.8, (c) => {
          c.click(".b-conv");
          c.cls(".sheet", "run");
        }],
        [8.4, (c) => {
          c.cls(".sheet", "done");
          c.text(".sh-done small", "4.6 MB");
        }],
        [8.7, (c) => c.move(".sheet .b-savegif", 0.5, 0.5, 600)],
        [9.4, (c) => {
          c.click(".sheet .b-savegif");
          c.cls(".sheet", "show", false);
        }],
        [9.6, (c) => {
          c.look(".rv");
          c.text(".toast b", "GIF Saved");
          c.text(".toast small", "launch-demo.gif");
          c.cls(".toast-slot", "show");
        }]
      ],
      tick(t, c) {
        if (t > 3.5) scrubber(c, Math.max(0, Math.min(t, 4.75) - 3.6));
        const p = span(t, 6.9, 8.3);
        c.css(".sh-run .pbar i", "width", `${p * 100}%`);
        c.text(".sh-run p", `Converting\u2026 ${Math.round(p * 100)}%`);
      }
    },
    {
      id: "thumbnails",
      dur: 12.2,
      screens: ["home", "thumb"],
      cues: [
        ...fromHome("thumb", "thumb"),
        [1.9, (c) => c.move('[data-seg=bg] [data-o="2"]', 0.5, 0.5, 750)],
        [2.7, (c) => {
          c.click('[data-seg=bg] [data-o="2"]');
          c.seg("bg", 2);
          c.cls(".th", "removed");
        }],
        [3.15, (c) => c.move(".th [data-bg=retro-northernlights]", 0.5, 0.5, 600)],
        [3.8, (c) => {
          c.click(".th [data-bg=retro-northernlights]");
          c.bg(".bgi", "retro-northernlights");
        }],
        [4.2, (c) => c.move(".snap", 0.5, 0.5, 600)],
        [4.85, (c) => {
          c.click(".snap");
          c.cls(".th", "counting");
          c.text(".snap b", "Cancel");
        }],
        [5.1, (c) => c.look(".shot")],
        [7.2, (c) => {
          c.cls(".th", "counting", false);
          c.cls(".th", "snapped");
        }],
        [7.6, (c) => {
          c.look(null);
          c.move(".size", 0.45, 0.5, 600);
        }],
        [8.25, (c) => {
          c.click(".size");
          c.cls(".th", "menu-on");
        }],
        [8.6, (c) => c.move("[data-size=Instagram-Story]", 0.4, 0.5, 500)],
        [9.2, (c) => {
          c.click("[data-size=Instagram-Story]");
          c.each(".opt", (e) => e.classList.toggle("on", e.dataset.size === "Instagram-Story"));
          c.html(".size", sizeLabel("instagram-logo", "Instagram Story / Reel cover \xB7 1,080\xD71,920"));
          c.css(".shot", "--ar", ".5625");
          c.cls(".th", "menu-on", false);
        }],
        [9.6, (c) => c.move(".b-dl", 0.5, 0.5, 650)],
        [10.35, (c) => {
          c.click(".b-dl");
          c.cls(".toast-slot", "show");
        }],
        [10.6, (c) => c.look(".th")]
      ],
      tick(t, c) {
        const n = t > 4.95 && t < 7.2 ? 3 - Math.floor((t - 4.95) / 0.75) : 0;
        c.text(".num", n > 0 ? String(n) : "");
      }
    },
    {
      id: "images-to-gif",
      dur: 13,
      screens: ["home", "stitch"],
      cues: [
        ...fromHome("stitch", "stitch"),
        [1.65, (c) => c.cls(".picksheet", "show")],
        [1.8, (c) => c.look(".picksheet")],
        [1.95, (c) => c.move('.picksheet [data-f="0"]', 0.5, 0.4, 450)],
        ...[0, 1, 2, 3].flatMap((i) => [
          [2.45 + i * 0.4, (c) => {
            c.click(`.picksheet [data-f="${i}"]`);
            c.cls(`.picksheet [data-f="${i}"]`, "on");
            c.cls(".picksheet .op", "ready");
          }],
          ...i < 3 ? [[2.55 + i * 0.4, (c) => c.move(`.picksheet [data-f="${i + 1}"]`, 0.5, 0.4, 210)]] : []
        ]),
        [3.8, (c) => c.move(".picksheet .b-open", 0.5, 0.5, 420)],
        [4.3, (c) => {
          c.click(".picksheet .b-open");
          c.cls(".picksheet", "show", false);
          c.cls(".st", "filled");
          c.text(".count", "4 images \xB7 0 videos");
        }],
        [4.6, (c) => c.look(".gprev")],
        [5.9, (c) => {
          c.move(".gprev", 0.45, 0.75, 350);
        }],
        [6.3, (c) => {
          c.look(null);
          c.css(".stscroll", "--y", "-400px");
        }],
        [7.1, (c) => c.move(".apply .pick", 0.5, 0.5, 400)],
        [7.6, (c) => {
          c.click(".apply .pick");
          c.cls(".menu", "show");
        }],
        [7.8, (c) => c.move(".menu [data-m=black]", 0.4, 0.5, 250)],
        [8.2, (c) => {
          c.click(".menu [data-m=black]");
          c.cls(".menu", "show", false);
          c.text(".apply .pick b", "Fade to Black");
        }],
        [8.4, (c) => c.move(".b-apply", 0.5, 0.5, 450)],
        [8.95, (c) => {
          c.click(".b-apply");
          c.each(".tr .pick b", (e) => e.textContent = "Fade to Black");
        }],
        [9.3, (c) => {
          c.css(".stscroll", "--y", "0px");
          c.move(".b-exp", 0.5, 0.5, 600);
        }],
        [10, (c) => {
          c.click(".b-exp");
          c.cls(".st", "run");
          c.look(".st");
        }],
        [11.2, (c) => {
          c.cls(".st", "run", false);
          c.cls(".st", "done");
        }],
        [11.3, (c) => c.move(".f-done .b-savegif", 0.5, 0.5, 300)],
        [11.7, (c) => {
          c.click(".f-done .b-savegif");
          c.cls(".toast-slot", "show");
        }]
      ],
      tick(t, c) {
        const p = span(t, 10.05, 11.1);
        c.css(".gfoot .pbar i", "width", `${p * 100}%`);
        c.text(".f-run p", p < 1 ? `Rendering GIF\u2026 ${Math.round(p * 100)}%` : "Finalizing\u2026");
        if (t < 4.3) return;
        const loop = (t - 4.3) % 4.4, n = STITCH.length, i = Math.min(n - 1, Math.floor(loop / 1.2)), x = i === n - 1 ? 0 : span(loop - i * 1.2, 0.8, 1.2), black = t > 9;
        c.each(".gprev i:not(.black)", (el, j) => {
          const on = j === i ? black ? x < 0.5 ? 1 : 0 : 1 : j === i + 1 ? black ? x >= 0.5 ? 1 : 0 : x : 0;
          el.style.opacity = String(on);
        });
        c.css(".gprev .black", "opacity", String(black ? 1 - Math.abs(x - 0.5) * 2 : 0));
        c.text(".transport code", `${loop.toFixed(1)}s / 4.4s`);
      }
    },
    {
      id: "mockup",
      dur: 12.2,
      screens: ["home", "open", "review"],
      cues: [
        ...openVideo,
        [4, (c) => c.move('[data-seg=mode] [data-o="1"]', 0.5, 0.5, 700)],
        [4.75, (c) => {
          c.click('[data-seg=mode] [data-o="1"]');
          c.seg("mode", 1);
          c.cls(".rv", "framed");
          c.bg(".canvas", "retro-cherry");
          c.resize(1280, 960);
        }],
        [4.9, (c) => c.look(".rv")],
        [5.8, (c) => c.move(".frametools [data-bg=softwaves-peach]", 0.5, 0.5, 600)],
        [6.5, (c) => {
          c.click(".frametools [data-bg=softwaves-peach]");
          c.bg(".canvas", "softwaves-peach");
        }],
        [6.95, (c) => c.move(".frametools [data-bg=retro-northernlights]")],
        [7.5, (c) => {
          c.click(".frametools [data-bg=retro-northernlights]");
          c.bg(".canvas", "retro-northernlights");
        }],
        [7.9, (c) => c.move('[data-dc="#c4c8ce"]', 0.5, 0.5, 600)],
        [8.6, (c) => {
          c.click('[data-dc="#c4c8ce"]');
          c.each("[data-dc]", (e) => e.classList.toggle("on", e.dataset.dc === "#c4c8ce"));
          c.css(".device", "--dc1", "#cdd1d6");
          c.css(".device", "--dc2", "#b4b8be");
        }],
        [9, (c) => c.move(".b-save", 0.5, 0.5, 650)],
        [9.75, (c) => {
          c.click(".b-save");
          c.text(".b-save .t", "Saving\u2026");
          c.cls(".rv", "saving-on");
        }],
        [10.75, (c) => {
          c.cls(".rv", "saving-on", false);
          c.text(".b-save .t", "Save Video\u2026");
          c.text(".toast small", "launch-demo-framed.mov");
          c.cls(".toast-slot", "show");
        }]
      ],
      tick(t, c) {
        if (t > 3.5) scrubber(c, Math.max(0, t - 3.6));
        const p = span(t, 9.8, 10.7);
        c.css(".saving i", "width", `${p * 100}%`);
        if (t > 9.8 && t < 10.75) c.text(".b-save .t", `Saving\u2026 ${Math.round(p * 100)}%`);
      }
    }
  ];

  // lib/demo/player.ts
  var PACE = 0.75;
  var ROOM = 0.8;
  var clamp012 = (x) => Math.max(0, Math.min(1, x));
  var CURSOR = `<div class="cur"><div><span class="rip"></span><svg width="22" height="28" viewBox="0 0 22 28"><path d="M2 2v20l5-4.600 3.400 7.800 3.900-1.700-3.400-7.600 6.900-.5z" fill="#000" stroke="#fff" stroke-width="1.800" stroke-linejoin="round"/></svg></div></div>`;
  var DemoPlayer = class {
    constructor(view, o) {
      this.view = view;
      this.o = o;
      this.raf = requestAnimationFrame(this.frame);
    }
    view;
    o;
    win;
    cur;
    screens;
    screen;
    index = -1;
    t = 0;
    fired = 0;
    last = 0;
    raf = 0;
    ended = false;
    holds = /* @__PURE__ */ new Set();
    timers = /* @__PURE__ */ new Set();
    /** Phone camera: where the cursor is, and what a cue asked it to hold on. */
    focus = null;
    shot = null;
    destroy() {
      cancelAnimationFrame(this.raf);
      this.timers.forEach((id) => clearTimeout(id));
      this.view.replaceChildren();
    }
    hold(reason, on) {
      if (on) this.holds.add(reason);
      else this.holds.delete(reason);
      this.view.classList.toggle("held", this.holds.size > 0);
    }
    play(index) {
      const prev = this.index >= 0 ? this.win : null;
      this.index = index;
      this.t = prev ? -0.25 : 0;
      this.fired = 0;
      this.ended = false;
      this.o.onProgress(0);
      this.build();
      if (this.o.reducedMotion) {
        this.view.querySelectorAll(".win").forEach((w) => w !== this.win && w.remove());
        this.still();
        return;
      }
      const win = this.win;
      if (!prev) {
        requestAnimationFrame(() => win.classList.remove("instant"));
        return;
      }
      win.classList.add("in-swap");
      void win.offsetWidth;
      win.classList.remove("instant");
      prev.classList.add("out-swap");
      requestAnimationFrame(() => requestAnimationFrame(() => win.classList.remove("in-swap")));
      this.later(() => prev.remove(), 240);
    }
    refit() {
      if (this.index >= 0) this.fit();
    }
    /* ---- cue API ---- */
    q(sel) {
      return this.screen.querySelector(sel) ?? this.win.querySelector(sel);
    }
    text(sel, value) {
      const e = this.q(sel);
      if (e && e.textContent !== value) e.textContent = value;
    }
    html(sel, value) {
      const e = this.q(sel);
      if (e && e.dataset.h !== value) e.innerHTML = e.dataset.h = value;
    }
    css(sel, prop, value) {
      this.q(sel)?.style.setProperty(prop, value);
    }
    each(sel, f) {
      this.screen.querySelectorAll(sel).forEach(f);
    }
    cls(sel, name, on = true) {
      this.q(sel)?.classList.toggle(name, on);
    }
    seg(id, i) {
      const e = this.q(`[data-seg=${id}]`);
      e?.style.setProperty("--i", String(i));
      [...e?.children ?? []].forEach((x, j) => x.classList.toggle("on", j === i));
    }
    /** Picks a background image: paints it and rings its swatch. */
    bg(target, name) {
      this.css(target, "background-image", `url(${art(name)})`);
      this.each("[data-bg]", (e) => e.classList.toggle("on", e.dataset.bg === name));
    }
    go(name) {
      const from = this.win.dataset.s ? this.dims() : null;
      const k0 = this.scale();
      const p = this.cur._p;
      this.screens.querySelectorAll(".scr").forEach((e) => e.classList.toggle("on", e.dataset.s === name));
      this.screen = this.screens.querySelector(`[data-s=${name}]`);
      this.win.dataset.s = name;
      this.focus = this.shot = null;
      this.win.querySelectorAll(".call").forEach((e) => e.remove());
      this.fit();
      if (from && p) this.carry(from, k0, p);
    }
    resize(w, h) {
      const from = this.dims();
      const k0 = this.scale();
      const p = this.cur._p;
      Object.assign(this.screen.dataset, { w: String(w), h: String(h) });
      this.screen.style.width = `${w}px`;
      this.screen.style.height = `${h}px`;
      this.fit();
      if (p) this.carry(from, k0, p);
    }
    move(sel, fx = 0.5, fy = 0.5, ms = 520) {
      const p = this.at(sel, fx, fy);
      if (!p) return;
      ms /= PACE;
      this.cur.style.setProperty("--d", `${ms}ms`);
      this.place(p);
      this.focus = p;
      this.fit();
      const el = this.q(sel);
      this.win.querySelectorAll(".hov").forEach((e) => e.classList.remove("hov"));
      if (this.applyingStill) el?.classList.add("hov");
      else this.later(() => el?.classList.add("hov"), ms * 0.85);
    }
    click(sel) {
      if (this.applyingStill) return;
      const el = this.q(sel);
      this.cur.classList.remove("dn");
      void this.cur.offsetWidth;
      this.cur.classList.add("dn");
      el?.classList.add("press");
      this.later(() => {
        this.cur.classList.remove("dn");
        el?.classList.remove("press");
      }, 180);
    }
    /** Phone only: hold the camera on this element instead of following the cursor. */
    look(sel) {
      if (!this.o.isPhone()) return;
      this.shot = sel ? this.q(sel) : null;
      this.fit();
    }
    callout(sel, label, side) {
      const p = this.at(sel, side === "left" ? 0 : side === "below" ? 0.5 : 1, side === "below" ? 1 : 0.5);
      if (!p) return;
      const e = document.createElement("div");
      e.className = "call";
      e.textContent = label;
      this.win.append(e);
      e.style.fontSize = `${14 * Math.max(1, 0.62 / this.scale())}px`;
      const x = side === "left" ? p[0] - e.offsetWidth - 18 : side === "below" ? p[0] - e.offsetWidth / 2 : p[0] + 18;
      e.style.left = `${Math.max(8, Math.min(this.dims().w - e.offsetWidth - 8, x))}px`;
      e.style.top = `${Math.max(20, side === "below" ? p[1] + 28 : p[1] - e.offsetHeight / 2)}px`;
    }
    /* ---- internals ---- */
    applyingStill = false;
    later(f, ms) {
      const id = window.setTimeout(() => {
        this.timers.delete(id);
        f();
      }, ms);
      this.timers.add(id);
    }
    build() {
      const win = this.win = document.createElement("div");
      win.className = "win instant";
      win.innerHTML = `<div class="body"><div class="screens"></div></div><div class="floatcam">${person}</div>${CURSOR}`;
      this.view.append(win);
      this.cur = win.querySelector(".cur");
      this.screens = win.querySelector(".screens");
      this.screens.innerHTML = DEMOS[this.index].screens.map((n) => `<div class="scr" data-s="${n}" data-w="${SCREENS[n].w}" data-h="${SCREENS[n].h}" style="width:${SCREENS[n].w}px;height:${SCREENS[n].h}px">${SCREENS[n].html}</div>`).join("");
      this.go("home");
      this.place([430, 552]);
    }
    /** Reduced motion: every cue applied at once, nothing moving. */
    still() {
      this.applyingStill = true;
      const demo = DEMOS[this.index];
      demo.cues.forEach(([, f]) => f(this));
      demo.tick?.(demo.dur - 0.6, this);
      this.o.onProgress(1);
      this.cur.style.display = "none";
      this.applyingStill = false;
    }
    dims() {
      return { w: Number(this.screen.dataset.w), h: Number(this.screen.dataset.h) };
    }
    scale() {
      return Number(this.win.style.getPropertyValue("--s")) || 1;
    }
    place(p) {
      this.cur.style.transform = `translateX(${p[0]}px)`;
      this.cur.firstElementChild.style.transform = `translateY(${p[1]}px)`;
      this.cur._p = p;
    }
    /** Keeps the cursor where it was on screen when the window changes size. */
    carry(from, k0, p) {
      const to = this.dims();
      const k = k0 / this.scale();
      const keep = (v, a, b) => Math.max(24, Math.min(b - 28, (v - a / 2) * k + b / 2));
      this.cur.style.setProperty("--d", "500ms");
      this.place([keep(p[0], from.w, to.w), keep(p[1], from.h, to.h)]);
    }
    box(el) {
      const r = el.getBoundingClientRect();
      const s = this.screen.getBoundingClientRect();
      const k = s.width / this.screen.offsetWidth || 1;
      return { x: (r.left - s.left) / k, y: (r.top - s.top) / k, w: r.width / k, h: r.height / k };
    }
    at(sel, fx, fy) {
      const el = this.q(sel);
      if (!el) {
        if (false) console.warn("Demo cue found nothing:", sel);
        return null;
      }
      const b = this.box(el);
      return [b.x + b.w * fx, b.y + b.h * fy];
    }
    fit() {
      const S = SCREENS[this.win.dataset.s];
      const { w, h } = this.dims();
      const tall = h + (S.below ?? 0);
      const vw = this.view.clientWidth;
      const vh = this.view.clientHeight;
      const full = Math.min(vw * 0.92 / w, vh * (this.o.isPhone() ? 0.88 : 0.95) / tall, S.max ?? 1.4);
      let s = this.o.isPhone() ? full : Math.min(full, Math.max(full * ROOM, 0.6));
      let tx = 0;
      let ty = -(S.below ?? 0) / 2 * s;
      if (this.o.isPhone() && !S.below) {
        s = Math.max(full, Math.min(0.62, vh * 1.25 / h));
        let f = this.focus ?? [w / 2, h / 2];
        if (this.shot) {
          const b = this.box(this.shot);
          s = Math.max(full, Math.min(0.82, vw * 0.94 / b.w, vh * 0.92 / b.h));
          f = [b.x + b.w / 2, b.y + b.h / 2];
        }
        const mx = Math.max(0, (w * s - vw * 0.92) / 2);
        const my = Math.max(0, (h * s - vh * 0.92) / 2);
        tx = Math.max(-mx, Math.min(mx, -(f[0] - w / 2) * s));
        ty = Math.max(-my, Math.min(my, -(f[1] - h / 2) * s));
      }
      Object.assign(this.win.style, { width: `${w}px`, height: `${h}px` });
      this.win.style.setProperty("--s", String(s));
      this.win.style.setProperty("--tx", `${tx}px`);
      this.win.style.setProperty("--ty", `${ty}px`);
    }
    frame = (now) => {
      const dt = Math.min(0.05, (now - this.last) / 1e3 || 0);
      this.last = now;
      if (this.index >= 0 && !this.ended && !this.o.reducedMotion && this.holds.size === 0) {
        const demo = DEMOS[this.index];
        this.t += dt * PACE;
        while (this.fired < demo.cues.length && demo.cues[this.fired][0] <= this.t) demo.cues[this.fired++][1](this);
        demo.tick?.(this.t, this);
        this.o.onProgress(clamp012(this.t / demo.dur));
        if (this.t >= demo.dur) {
          this.ended = true;
          this.o.onEnd();
        }
      }
      this.raf = requestAnimationFrame(this.frame);
    };
  };

  // lib/features.ts
  var FEATURES = [
    { id: "record", title: "Record without a time limit", description: "Capture your screen in up to 4K, with or without your camera.", short: "Record", art: "retro-cherry" },
    { id: "transcribe", title: "Transcribe any video", description: "Turn speech into a transcript and captions right on your Mac.", short: "Transcribe", art: "retro-northernlights" },
    { id: "gif", title: "Convert video to GIF", description: "Save clips of up to 20 seconds as loops for chats and docs.", short: "GIF", art: "retro-southwest" },
    { id: "thumbnails", title: "Thumbnails for days", description: "Snap a photo, swap the background and size it for social.", short: "Thumbnail", art: "retro-cherry" },
    { id: "images-to-gif", title: "Convert static images into a GIF", description: "Arrange your photos and clips, then stitch them into one loop.", short: "Stitch", art: "retro-kungfuchina" },
    { id: "mockup", title: "Put your video in a mockup", description: "Show your recording on a laptop or phone, as a video or GIF.", short: "Mockup", art: "retro-southwest" }
  ];

  // lib/site.ts
  var SURVEY_URL = "https://tally.so/r/pbv1dZ";
  var TAGLINE = "Record it. Caption it. Publish it.";
  return __toCommonJS(entry_exports);
})();
