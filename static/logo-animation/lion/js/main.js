(function () {
    // GSDevTools.create({minimal:true});
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    const select = function (x) {
        return document.querySelector(x);
    };
    const selectAll = function (x) {
        return document.querySelectorAll(x);
    };

    const animationWrapper = select('.animation__wrapper');
    const outline = select('#outline');
    const lionPaths = selectAll('#lion > path');
    TweenLite.set(animationWrapper, {autoAlpha: 1});

    function tl01() {
        const tl = new TimelineMax();
        tl

            .staggerFrom(lionPaths, 1, {
                autoAlpha: 0,
                scale: 0,
                transformOrigin: 'center top',
                cycle: {rotation: [-5, -10, 0, 20, 10], y: [-5, -10, 0, 5, 10], x: [-5, -10, 0, 5, 10]}
            }, 0.004)

            .from(outline, 2, {autoAlpha: 0}, '-=1')
        ;
        return tl;
    }


    const master = new TimelineMax({repeat: -1, yoyo: true});

    master
        .add(tl01())

    ;
    master.timeScale(1.5);

    // animationWrapper.addEventListener('mouseenter', function () {
    //     master.progress(0);
    // })
}());
