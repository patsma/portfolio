function runEverything() {
    fetch("booking.svg")
        .then(response => response.text())
        .then(svg => document.querySelector('.wrapper').insertAdjacentHTML("afterbegin", svg))
        .then(runAnimation)
    ;

    function runAnimation() {


        gsap.set('.wrapper', {visibility: 'visible'});
        GSDevTools.create({minimal: true});
        let tl = gsap.timeline({

            defaults: {transformOrigin: '50% 100%', ease: "sine.inOut"}
        });
        document.querySelector('.wrapper').addEventListener('click', () => {
            tl.reverse() ? tl.play() : tl.play
        });
        // let controller = new ScrollMagic.Controller();
        //
        // let scene = new ScrollMagic.Scene({
        //         triggerElement: 'body',
        //         triggerHook: 0,
        //         offset: 100
        //
        //
        //     })
        //         .addIndicators()
        //         .on('add', () => {
        //             console.log('add')
        //             if (tl.progress() === 1) {
        //                 tl.reverse();
        //             } else {
        //                 tl.play();
        //
        //             }
        //         })
        //         .on('enter', () => {
        //             console.log('enter')
        //             if (tl.progress() === 1) {
        //                 tl.reverse();
        //             } else {
        //                 tl.play();
        //
        //             }
        //         })
        //         .on('leave', () => {
        //             console.log('leave')
        //             if (tl.progress() === 1) {
        //                 tl.reverse();
        //             } else {
        //                 tl.play();
        //
        //             }
        //
        //
        //         })
        //         .addTo(controller)
        // ;


        tl
            .from('svg', {autoAlpha: 0})
            .to('#p1', {duration: 1, drawSVG: 0})
            .to('#box1', {yPercent: 100}, '-=0.5')
            .from('#text-1 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')
            .to('#p2', {duration: 1, drawSVG: 0})
            .to('#box2', {yPercent: 100}, '-=0.7')
            .from('#text-2 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')

            .to('#p3', {duration: 1, drawSVG: 0})
            .to('#box3', {yPercent: 100}, '-=0.7')
            .from('#text-3 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')

            .to('#p4', {duration: 1, drawSVG: 0})
            .to('#box4', {yPercent: 100}, '-=0.7')
            .from('#text-4 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')

            .to('#p5', {duration: 1, drawSVG: 0})
            .to('#box5', {yPercent: 100}, '-=0.7')
            .from('#text-5 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')

            .to('#p6', {duration: 1, drawSVG: 0})
            .to('#box6', {yPercent: 100}, '-=1')
            .from('#text-6 > *', {y: '+=10', autoAlpha: 0, stagger: 0.05}, '<')


    }


}

runEverything();


