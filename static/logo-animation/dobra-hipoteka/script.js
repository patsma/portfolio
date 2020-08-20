// const controller = new ScrollMagic.Controller();
const tl = gsap.timeline({repeat: -1, yoyo: true});

tl
  .from('#house > *', {drawSVG: 0})
  .from('#key > *', {drawSVG: 0})
  .from('#ring > *', {drawSVG: 0})
  .from('#title > *', {autoAlpha: 0, stagger: 0.1, ease: 'none'})
  .from('#tagline > *', {autoAlpha: 0, stagger: 0.1})


;

tl.timeScale(0.5);
