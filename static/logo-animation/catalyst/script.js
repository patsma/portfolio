GSDevTools.create({minimal: true});


CustomBounce.create("showLogoCircles", {strength: 0.6, squash: 2})

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
var tl = new TimelineMax({repeat: -1, yoyo: true});
tl.set('#catalyst-consortium', {autoAlpha: 1})
tl.add("animate-circles");
tl.staggerFrom("#circles-group > path", 1, {
  autoAlpha: 0,
  transformOrigin: "50% 50%", ease: 'showLogoCircles'
}, 0.02, "animate-circles");
tl.staggerFrom("#catalyst > path", 1, {
  transformOrigin: '50% 50%',
  autoAlpha: 0,
  xPercent: 10
}, 0.1, "animate-circles+=0.3");
tl.staggerFrom("#consortium > path", 1, {
  transformOrigin: '50% 50%',
  autoAlpha: 0,
  xPercent: -2
}, 0.1, "animate-circles+=0.8");
