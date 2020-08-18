(function () {
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    const select = function (s) {
        return document.querySelector(s);
    };

    const selectAll = function (s) {
        return document.querySelectorAll(s);
    };


    const wavesTop = selectAll('#waves__top > path');
    const wavesBottom = selectAll('#waves__bottom > path');

    const logoShapesGroup = select('#logoShapesGroup');


    const outerCircles = selectAll('#outerCircles > path');

    const outerCircle01 = select('#outerCircle01');
    const outerCircle02 = select('#outerCircle02');
    const outerCircle03 = select('#outerCircle03');
    const outerCircle04 = select('#outerCircle04');


    const innerCircles = selectAll('#innerCircles > path');

    const innerCircle01 = select('#innerCircle01');
    const innerCircle02 = select('#innerCircle02');
    const innerCircle03 = select('#innerCircle03');
    const innerCircle04 = select('#innerCircle04');
    const innerCircle05 = select('#innerCircle05');
    const innerCircle06 = select('#innerCircle06');


    const acrossPaths = selectAll('#acrossPaths > path');

    const acrossPath01 = select('#acrossPath01');
    const acrossPath02 = select('#acrossPath02');
    const acrossPath03 = select('#acrossPath03');
    const acrossPath04 = select('#acrossPath04');

    const arrow = select('#arrow');


    const shapesGroup01 = selectAll('#shapesGroup01 > path');
    const shapesGroup02 = selectAll('#shapesGroup02 > path');
    const shapesGroup03 = selectAll('#shapesGroup03 > path');
    const shapesGroup04 = selectAll('#shapesGroup04 > path');


    const logoShape = selectAll('#logoShape');

    const innerLogoShape = select('#innerLogoShape');
    const centerLogoShape = select('#centerLogoShape');
    const outerLogoShape = select('#outerLogoShape');


    TweenMax.from(innerLogoShape, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center center'});

    const
        headingSpan01Text = new SplitText(".headingSpan01", {type: "words,chars"}),
        headingSpan01Chars = headingSpan01Text.chars,
        headingSpan02Text = new SplitText(".headingSpan02", {type: "words,chars"}),
        headingSpan02Chars = headingSpan02Text.chars,
        headingSpan03Text = new SplitText(".headingSpan03", {type: "words,chars"}),
        headingSpan03Chars = headingSpan03Text.chars;

    const
        sliderSubtitle = new SplitText(".slider__subtitle", {type: "words,chars"}),
        sliderSubtitleChars = sliderSubtitle.chars,
        cta = new SplitText(".cta", {type: "words"}),
        ctaWords = cta.words

    ;


    let imageIndex = 2;

    TweenLite.set([headingSpan01Text, headingSpan02Text, headingSpan03Text], {perspective: 400});
    TweenLite.set('.waves__logo__wrapper', {autoAlpha:1});


    function morphingTl() {

        const tl = new TimelineMax();

        tl


            .to(innerLogoShape, 2, {repeat: 1, yoyo: true, morphSVG: centerLogoShape, ease: Power0.easeNone})
            .to(innerLogoShape, 2, {repeat: 1, yoyo: true, morphSVG: outerLogoShape, ease: Power0.easeNone})
            .to(innerLogoShape, 1, {autoAlpha: 0, scale: 0, transformOrigin: 'center center'})


        ;

        return tl.timeScale(2);

    }


    function soundWaveHeadingSliderTl() {

        const tl = new TimelineMax({
            repeatDelay: 10,
            repeat: -1,


            onStart: function () {

                TweenMax.fromTo('.slider__progress', 14, {width: '0'}, {width: '100vw', ease: Power0.easeNone});

            },

            onRepeat: function () {
                if (imageIndex > 4) {
                    imageIndex = 1;
                }
                TweenMax.fromTo('.slider__progress', 14, {width: '0'}, {width: '100vw', ease: Power0.easeNone});
                const tl = new TimelineMax();

                tl

                    .to('.animation__wrapper', 0.4, {autoAlpha: 0}, 0)
                    .set('.animation__wrapper', {
                        css: {
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            background: 'url(./img/photo' + imageIndex + '.jpg)'
                        }
                    })
                    .to('.animation__wrapper', 0.4, {autoAlpha: 1})

                ;


                imageIndex++;
            }
        });

        tl
            .add('playBothWaves')


            .staggerFrom(wavesTop, 1, {drawSVG: '100% 100%'}, -0.1, 'playBothWaves')
            .staggerFrom(wavesBottom, 1, {drawSVG: '0% 0%'}, -0.1, 'playBothWaves')

            .add('playBothWaves2', '-=8')
            .staggerTo(wavesTop, 1, {drawSVG: '100% 100%'}, -0.1, 'playBothWaves2')
            .staggerTo(wavesBottom, 1, {drawSVG: '0% 0%'}, -0.1, 'playBothWaves2')

            .add('playHeading', '-=4')
            .staggerFrom(headingSpan01Chars, 2.8, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: Back.easeOut
            }, 0.01, 'playHeading+=0.2')
            .staggerFrom(headingSpan02Chars, 2.2, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: Back.easeOut
            }, 0.01, 'playHeading+=0.8')
            .staggerFrom(headingSpan03Chars, 3.8, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: Back.easeOut
            }, 0.01, 'playHeading+=1.2')
            .staggerFrom(sliderSubtitleChars, 1, {
                opacity: 0,


                ease: Power0.easeNone
            }, 0.05, 'playHeading+=1.6')

            .staggerFrom('.cta > *', 1.8, {
                opacity: 0,
                scale: 0,
                xPercent: -10,
                transformOrigin: 'center center',


                ease: Power3.easeOut
            }, 0.5)

        ;

        const soundWaveDuration = tl.duration();

        console.log(soundWaveDuration);
        return tl.timeScale(2);
    }

    function earShapeShowTl() {

        const tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 4});

        tl

            .from(outerCircle01, 2, {drawSVG: 0, svgOrigin: "370 370", rotation: 360})

            .add('showCirclesShape01', '-=1')
            .from(outerCircle02, 2, {drawSVG: 0, svgOrigin: "370 370", rotation: 360}, 'showCirclesShape01')
            .staggerFrom(shapesGroup01, 2, {
                scaleY: 0,
                scaleX: 0,
                autoAlpha: 0,
                transformOrigin: 'center center'
            }, 0.02, 'showCirclesShape01')

            .add('showCirclesShape02', '-=1')
            .from(outerCircle03, 2, {drawSVG: 0, svgOrigin: "370 370", rotation: 360}, 'showCirclesShape02')
            .staggerFrom(shapesGroup02, 2, {
                scaleY: 0,
                scaleX: 0,
                autoAlpha: 0,
                rotation: -360,
                transformOrigin: 'center center'
            }, 0.02, 'showCirclesShape02')

            .add('showCirclesShape03', '-=1')
            .from(outerCircle04, 2, {drawSVG: 0, svgOrigin: "370 370", rotation: 360}, 'showCirclesShape03')
            .staggerFrom(shapesGroup03, 2, {
                scaleY: 0,
                scaleX: 0,
                autoAlpha: 0,
                rotation: -360,
                transformOrigin: 'center center'
            }, 0.02, 'showCirclesShape03')


            .staggerFrom(innerCircles, 1, {drawSVG: 0}, 0.1, '-=1')
            .staggerFrom(acrossPaths, 1, {drawSVG: 0}, 0.1, '-=1')
            .staggerFrom([shapesGroup04, arrow], 2, {
                scaleY: 0,
                scaleX: 0,
                transformOrigin: 'center center'
            }, 0.02, '-=1');


        return tl.timeScale(3);
    }

    function earShapeRotateTl() {
        const tl = new TimelineMax({repeat: -1, yoyo: true});

        tl

            .to(logoShapesGroup, 100, {rotation: 720, svgOrigin: "370 370"}, 0)
            .to('#shapesGroup02', 100, {rotation: 360, svgOrigin: "370 370"}, 0)
            .to([innerCircle06, acrossPaths], 100, {rotation: 720, svgOrigin: "370 370"}, 0)


        ;

        return tl.timeScale(2);
    }

    const master = new TimelineMax();


    master
    // .add(morphingTl())
        .add(soundWaveHeadingSliderTl())
        .add(earShapeShowTl(), '-=9')
        .add(earShapeRotateTl(), 0)


    ;


})();
