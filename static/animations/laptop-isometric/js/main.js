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
    const graphGraphLine = select('#graphGraphLine');


    const awsCloud = selectAll('#awsCloud > path');
    const graphCircles = selectAll('#graphCircles > path');
    const stairs = selectAll('#stairs > path');
    const graphBottomBar = selectAll('#graphBottomBar > path');
    const graphMiddleBar = selectAll('#graphMiddleBar > path');
    const graphTopBar = selectAll('#graphTopBar > path');
    const monitorGroup = selectAll('#monitorGroup > *');
    const keyboardGroup = selectAll('#keyboardGroup > *');

    TweenLite.set(animationWrapper, {autoAlpha: 1});

    function tl01() {
        const tl = new TimelineMax();
        tl
            .staggerFrom(stairs, 1, {autoAlpha: 0}, 0.1)
            .staggerFrom(awsCloud, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'}, -0.1, '-=0.5')


        ;
        return tl;
    }

    function tl02() {
        const tl = new TimelineMax();
        tl
            .from(graphGraphLine, 1, {drawSVG: 0}, 0.1)
            .staggerFrom(graphCircles, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'}, 0.2, 0)
            .staggerFrom(graphBottomBar, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'}, 0.2, 0)
            .staggerFrom(graphMiddleBar, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'}, 0.2, 0.2)
            .staggerFrom(graphTopBar, 0.2, {autoAlpha: 0, scale: 0, transformOrigin: 'center bottom'}, 0.2, 0.4)


        ;
        return tl;
    }

    function tl03() {
        const tl = new TimelineMax();
        tl

            .staggerFrom(monitorGroup, 1, {autoAlpha: 0, transformOrigin: 'center bottom'}, 0.2, 0)
            .staggerFrom(keyboardGroup, 1, {autoAlpha: 0, transformOrigin: 'center bottom'}, 0.2, 0)


        ;
        return tl;
    }


    const master = new TimelineMax({repeat: -1, yoyo: true});

    master
        .add(tl01(), 0)
        .add(tl02(), 1)
        .add(tl03(), 2)

    ;
    master.timeScale(1);

    // animationWrapper.addEventListener('mouseenter', function () {
    //     master.progress(0);
    // })
}());
