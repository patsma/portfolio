function blueberryLoader() {
    TweenLite.set('.loader', {autoAlpha: 1});

    const tl = new TimelineMax({repeat: -1});

    tl.to('body', .2, {autoAlpha: 1});
    tl.fromTo("#circle1", .9, {scale: 0, transformOrigin: 'center center', ease: Elastic.easeOut},{scale:1,yPercent:-6});
    tl.to('body',.3,{autoAlpha:1});
    tl.from("#mask1", 2.5, {drawSVG: 0, ease: CustomEase.create("custom", "M0,0 C0.309,-0.044 0.674,0.828 0.674,0.828 0.674,0.828 1,1 1,1")},'-=0.4');
    tl.to('body',.3,{autoAlpha:1});
    tl.to(".loader", .3, {autoAlpha: 0, ease: Sine.easeIn});

    tl.timeScale(0.9);

    return tl;
}

blueberryLoader();


