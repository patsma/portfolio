'use strict';

window.addEventListener('load', function () {
    TweenLite.set(".logo-animation", {visibility: "visible"});
    const animation = '.logo-animation';
    const logoBcgBlue = '#logo-background-blue';
    const logoInnerBcgBlue = '#logo-inner-background-blue';
    const logoBcgWhite = '#logo-background-white';
    const bcg01 = '#background01';
    const bcg02 = '#background02';
    const textCity = '#text-city';
    const charOutline = '#char-outline';
    const char = '#char';
    const charFill = '#char-fill';
    const charFillLegL = '#char-fill-leg-l';
    const ball = '#ball';
    const stripeBlue = '#stripe-blue';
    const stripeRed = '#stripe-red';
    const stripeWhite = '#stripe-white';
    const zaksa = '#text-zaksa';

    const legL = '#leg-l';
    const legR = '#leg-r';
    const handL = '#hand-l';
    const handR = '#hand-r';
    const torso = '#torso';
    const head = '#head';
    const shine = '#shine rect';

    CustomBounce.create("myBounce", {strength: 0.7, squash: 6});
    CustomEase.getSVGData("myBounce");
    CustomEase.getSVGData("myBounce-squash", {path: "#squash"});

    GSDevTools.create({minimal: true});

    const setterTl = new TimelineMax();
    setterTl
        .set([
            // logoBcgBlue,
            // logoBcgWhite,
            // logoInnerBcgBlue,
            // bcg01,
            // bcg02,
            // textCity,
            // ball,
            // char,
            // charFill,
            // stripeBlue,
            // stripeRed,
            // stripeWhite,
            // zaksa
        ], {autoAlpha: 0})
        .set(animation, {autoAlpha: 1})
    ;


    const ballTl = new TimelineMax();
    ballTl


        .to(ball, 10, {y: 250, ease: "myBounce"})
        .to(ball, 10, {scaleY: 0.5, scaleX: 1.3, ease: "myBounce-squash", transformOrigin: "bottom"}, 0)
    ;

    const charTl = new TimelineMax();
    charTl

        .add('playAll')
        .from(charOutline, 4, {autoAlpha: 0, x: '+=50', y: '+=50', rotation: '-=8'}, 'playAll')
        .to(handR, 4, {rotation: '+=12', repeat: 1, yoyo: true, transformOrigin: '0% 90%'}, 'playAll')
        .to(handL, 4, {rotation: '-=12', repeat: 1, yoyo: true, transformOrigin: '100% 10%'}, 'playAll')

    ;

    const ballAndCharTl = new TimelineMax();

    ballAndCharTl

        .add(ballTl.reverse())
        .from(ball, 1, {autoAlpha: 0}, 0)
        .add(charTl, '-=1.5')
        .from([charFill, charFillLegL], 3, {autoAlpha: 0}, '-=0.6')

        .add('charMove')
        .to(ball, 4, {
            rotation: '+=360',
            svgOrigin: '206.98294067382812 107.2524528503418',
            repeat: 1,
            ease: Power0.easeNone
        }, 'charMove-=10.9')
        .to(char, 4, {y: '+=10', repeat: 1, yoyo: true, ease: Power0.easeNone}, 'charMove-=3.8')
        .from(bcg02, 3, {scaleX: 0, transformOrigin: '50% 50%'})


        .staggerFrom([stripeBlue, stripeWhite, stripeRed], 1, {
            autoAlpha: 0,
            transformOrigin: 'center center'
        }, 0.5, 'charMove-=0.9')

    ;


    const finalSceneTl = new TimelineMax();

    finalSceneTl

        .add('showFinal')

        .from([logoBcgWhite, logoInnerBcgBlue], 1, {
            autoAlpha: 0,
            y: '+=20',
            transformOrigin: 'center center'
        }, 'showFinal')
        .to([legL, charFillLegL], 1, {autoAlpha: 0}, 'showFinal-=0.1')
        .from([bcg01, logoBcgBlue], 3, {scale: 0, transformOrigin: '50% 50%'}, 'showFinal')

        .staggerFrom('#letters > *', 4, {autoAlpha: 0, y: '-=5', ease: SlowMo.easeInOut}, 0.4, '-=1')
        .from(textCity, 1, {autoAlpha: 0}, '-=2')
    ;

    const masterTl = new TimelineMax({repeat:-1});
    masterTl

      .add(ballAndCharTl)

        .add(finalSceneTl, '-=5')
        .fromTo(shine, 6, {autoAlpha: 0, transformOrigin: 'center center', yPercent: -50, xPercent: -50}, {
            autoAlpha: 1,
            transformOrigin: 'center center',
            yPercent: 50,
            xPercent: 50
        })

    ;

    masterTl.timeScale(6.5);

});
