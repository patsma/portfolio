function runEverything() {
gsap.set('.wrapper',{visibility:'visible'});
    // GSDevTools.create({minimal: true});
    tl = gsap.timeline({defaults: {duration: 1.5},repeat:-1,repeatDelay:2});
    tl

        .from('#inner', {fill:'transparent', transformOrigin: '50% 50%'})
        .from('#outer', {delay: 0.5, drawSVG: 0, stagger: 0.1, rotation: 180, transformOrigin: '50% 50%'},'<')
        .from('#logo-mask > *', {drawSVG: 0, stagger: 0.1})
        .from('#michael > *', {x:'+=5',autoAlpha: 0, scaleX: 0, stagger: 0.1, transformOrigin: '50% 50%', ease: 'sine.out'},'<')
        .from('#arthur > *', {x:'+=5',autoAlpha: 0, scaleX: 0, stagger: 0.1, transformOrigin: '50% 50%', ease: 'sine.out'},'-=1.5')

}

runEverything();


