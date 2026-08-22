(function () {
  var canvas = document.querySelector("canvas.flow-bg");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  var blobs = [
    { x: 0.18, y: 0.22, r: 0.42, color: [180, 210, 255], ax: 0.16, ay: 0.12, sx: 0.55, sy: 0.7 },
    { x: 0.82, y: 0.18, r: 0.38, color: [160, 198, 255], ax: 0.14, ay: 0.14, sx: 0.4, sy: 0.55 },
    { x: 0.45, y: 0.85, r: 0.48, color: [200, 222, 255], ax: 0.18, ay: 0.1, sx: 0.7, sy: 0.45 },
    { x: 0.62, y: 0.42, r: 0.3, color: [230, 238, 250], ax: 0.12, ay: 0.16, sx: 0.9, sy: 0.6 },
  ];
  var start = performance.now();

  function dpr() {
    return Math.min(window.devicePixelRatio || 1, 2);
  }

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var scale = dpr();
    canvas.width = Math.max(1, Math.floor(w * scale));
    canvas.height = Math.max(1, Math.floor(h * scale));
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function draw(now) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var t = (now - start) / 1000;
    ctx.fillStyle = "#f1f5f8";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "multiply";
    for (var i = 0; i < blobs.length; i++) {
      var blob = blobs[i];
      var x = (blob.x + Math.sin(t * blob.sx) * blob.ax) * w;
      var y = (blob.y + Math.cos(t * blob.sy) * blob.ay) * h;
      var radius = blob.r * Math.max(w, h);
      var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, "rgba(" + blob.color.join(",") + ",0.95)");
      gradient.addColorStop(0.45, "rgba(" + blob.color.join(",") + ",0.55)");
      gradient.addColorStop(1, "rgba(" + blob.color.join(",") + ",0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
})();
