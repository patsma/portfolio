(function () {
    // GSDevTools.create({minimal: true});
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    const select = function (x) {
        return document.querySelector(x);
    };
    const selectAll = function (x) {
        return document.querySelectorAll(x);
    };

    const animationWrapper = select('.animation__wrapper');
    const letterRshape = select('#letterRshape-2');
    const letterO = select('#letterO-2');
    const circle_blue = select('#circle_blue');
    const leftGreenTriangleMask = select('#left_green_triangle_mask > path');
    const rightGreenTriangleMask = select('#right_green_triangle_mask > path');
    const leftGreenBlueMask = select('#left_green-blue_mask > path');
    const rightGreenBlueMask = select('#right_green-blue_mask > path');
    const rectanglePurpleBlue = select('#rectangle_purple-blue');
    const rectangleBlueDarkBlue = select('#rectangle_blue-darkblue');
    const rectangleDarkblue = select('#rectangle_darkblue');
    const circlesGreen = selectAll('#circles_green > path');
    const xBoth = select('#x_both');
    const greenTriangles = select('#green_triangles');
    const blueTriangles = select('#blue_triangles');

    TweenLite.set(animationWrapper, {autoAlpha: 1});

    function tl01() {
        const tl = new TimelineMax();
        tl

            .fromTo(circle_blue, 1, {scale: 0, transformOrigin: 'center center'}, {scale: 6})


            .add('play_01', '-=0.7')
            .to(leftGreenTriangleMask, 1, {transformOrigin: '0 50%', rotation: -180, scale: 3}, 'play_01')
            .to(rightGreenTriangleMask, 1, {transformOrigin: '100% 50%', rotation: -180, scale: 3}, 'play_01')

            .add('play_01', '-=0.5')
            .to(leftGreenBlueMask, 1, {transformOrigin: '0 50%', rotation: -180, scale: 3}, 'play_01')
            .to(rightGreenBlueMask, 1, {transformOrigin: '100% 50%', rotation: -180, scale: 3}, 'play_01')

            .add('play_02')
            .to(leftGreenTriangleMask, 1, {transformOrigin: '0 50%', rotation: '-=180', scale: 3}, 'play_02')
            .to(rightGreenTriangleMask, 1, {transformOrigin: '100% 50%', rotation: '-=180', scale: 3}, 'play_02')

            .add('playRects', '-=1.3')
            .fromTo(rectanglePurpleBlue, 2, {scale: 0, transformOrigin: 'center center'}, {
                scale: 6,
                rotation: '+=20'
            }, 'playRects')
            .fromTo(rectangleBlueDarkBlue, 2, {scale: 0, transformOrigin: 'center center'}, {
                scale: 6,
                rotation: '+=10'
            }, 'playRects+=0.3')
            .fromTo(rectangleDarkblue, 2, {scale: 0, transformOrigin: 'center center'}, {
                scale: 6,
                rotation: '+=30'
            }, 'playRects+=0.6')

            .fromTo(circlesGreen, 0.5, {scale: 0, transformOrigin: 'center center', ease: Power0.easeNone}, {
                scale: 5,
                repeat: 1,
                yoyo: true
            }, '-=1.5')
            .set(xBoth, {autoAlpha: 1}, '-=1')
            .set([rectangleDarkblue, rectangleBlueDarkBlue, rectanglePurpleBlue, greenTriangles, blueTriangles, circle_blue], {autoAlpha: 0}, '-=1')
            .set(letterRshape, {fill: '#005597'}, '-=1')
            .set(letterO, {fill: '#005597'}, '-=1')


        ;
        return tl;
    }

    function showAndHideX() {
        const tl = new TimelineMax();

        const x_both = select('#x_both');
        const bla = select('#bla');
        const tla = select('#tla');
        const tra = select('#tra');
        const bra = select('#bra');
        const tlM = select('#tlM');
        const trM = select('#trM');
        const brM = select('#brM');
        const blM = select('#blM');

        const xPurple = select('#x_purple');
        const bla2 = select('#bla-2');
        const tla2 = select('#tla-2');
        const tra2 = select('#tra-2');
        const bra2 = select('#bra-2');
        const tlM2 = select('#tlM-2');
        const trM2 = select('#trM-2');
        const brM2 = select('#brM-2');
        const blM2 = select('#blM-2');
        tl
            .to(animationWrapper, 0.1, {autoAlpha: 1})
            .to(animationWrapper, 0.5, {autoAlpha: 1})
            .add('scale')

            .from(x_both, 2, {scale: 63.5, transformOrigin: 'center center', ease: Power0.easeNone}, 0)
            .fromTo(xPurple, 2, {scale: 0, transformOrigin: 'center center', ease: Power0.easeNone}, {scale: 15}, 0)


            .add('morphBlue', '-=2')
            .to(tla2, 0.5, {morphSVG: tlM2, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(tra2, 0.5, {morphSVG: trM2, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(bla2, 0.5, {morphSVG: blM2, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(bra2, 0.5, {morphSVG: brM2, ease: Linear.easeNone}, 'morphXblueAndPurple')


            .add('hideMorphBlue')
            .to(tlM2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(tla2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(trM2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(tra2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(blM2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(bla2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(brM2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')
            .to(bra2, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphBlue')


            .add('morphPurple', '-=1')
            .to(tla, 1, {morphSVG: tlM, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(tra, 1, {morphSVG: trM, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(bla, 1, {morphSVG: blM, ease: Linear.easeNone}, 'morphXblueAndPurple')
            .to(bra, 1, {morphSVG: brM, ease: Linear.easeNone}, 'morphXblueAndPurple')

            .add('hideMorphPurple')
            .to(tlM, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(tla, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(trM, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(tra, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(blM, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(bla, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(brM, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')
            .to(bra, 0.01, {transformOrigin: 'center center', autoAlpha: 0}, 'hideMorphPurple')


        ;
        return tl.timeScale(2.8);
    }


    const master = new TimelineMax();

    master
        .add(tl01())
        .add(showAndHideX(), '-=0.8')
        .add('showOandR', '-=0.1')
        .to(letterRshape, 0.6, {fill: '#4cb748'}, 'showOandR')
        .to(letterO, 0.6, {fill: '#4cb748'}, 'showOandR')
    ;



    animationWrapper.addEventListener('click', function () {
        master.play(0);
    })
}());
