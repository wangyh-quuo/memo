var viewport = document.querySelector("meta[name=viewport]");
if (window.devicePixelRatio == 1) {
  viewport.setAttribute(
    "content",
    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
  );
}
if (window.devicePixelRatio == 2) {
  viewport.setAttribute(
    "content",
    "width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"
  );
}
if (window.devicePixelRatio == 3) {
  viewport.setAttribute(
    "content",
    "width=device-width, initial-scale=0.333333333, maximum-scale=0.333333333, minimum-scale=0.333333333, user-scalable=no"
  );
}
