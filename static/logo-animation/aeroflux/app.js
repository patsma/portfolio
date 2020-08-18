function startAnimation() {
    gsap.set('.wrapper', {visibility: 'visible'});
    // gsap.set('#circle', {rotation: 219, transformOrigin: "50% 50%"});
    // gsap.set('#circle-bottom', {rotation: 170, transformOrigin: "50% 50%"});


    // GSDevTools.create({
    //     minimal: true
    // });


    const initialTl = gsap.timeline({defaults: {ease: 'sine.out', duration: 2}, repeat: -1});

    initialTl


        .from('#x-path', {drawSVG: 0})
        .from('#x-path', {fill: 'transparent'})

        .from('#circle', {drawSVG: 0, rotation: -180, transformOrigin: "50% 50%"}, '<')
        .from('#circle', {fill: 'transparent'}, '<0.2')
        .from('#parts > *', {drawSVG: 0}, '<')
        .from('#parts > *', {fill: 'transparent'})
        .from('#wings > *', {duration: 3, rotation: 720, autoAlpha: 0, transformOrigin: "50% 50%"}, '-=1.5')
        .from('#aeroflux > *', {drawSVG: 0, stagger: 0.1, duration: 6, ease: 'slow(0.6,0.8,true)'}, '-=2')
        .from('#aeroflux > *', {fill: 'transparent', stagger: 0.1}, '<0.5')
        .from('#tagline-en > *', {autoAlpha: 0, stagger: 0.4, y: '-=10', ease: 'sine.out'}, '-=4')
        .from('#tagline-jp > *', {autoAlpha: 0, stagger: 0.2, y: '-=10', ease: 'sine.out'}, '<')

        .to('#tagline-en > *', {drawSVG: 0}, '<+=2')
        .to('#tagline-jp > *', {drawSVG: 0}, '<+=2')

        .to('#Layer_1-2', {y: '-=20', repeat: 10, duration: 4, yoyo: true})


    ;


    const master = gsap.timeline();


    master
        .add(initialTl)

    ;

    master.timeScale(1);


    return master;

}

startAnimation();

