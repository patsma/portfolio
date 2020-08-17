(function () {
    // GSDevTools.create({minimal: true});
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    TweenLite.set('body', {visibility: 'visible'});

    var select = function (x) {

        return document.querySelector(x);

    };

    var selectAll = function (x) {

        return document.querySelectorAll(x);

    };


    const frntier = selectAll('#frntier >path');
    const companies = selectAll('#companies >path');
    const moon__left = select('#moon__left');
    const moon__right = select('#moon__right-2');
    GSDevTools.create({minimal: true});

    const animateLogo = new TimelineMax();

    animateLogo
        .add('draw-both')
        .from('#mask > path', 0.5, {drawSVG: 0}, 'draw-both')
        .from('#frontier-companies-layer-group > g:nth-child(1)', 0.5, {
            rotation: '-=60',
            yPercent: '+=50'
        }, 'draw-both')
        .from('#moon__right-2', 0.5, {drawSVG: 0}, 'draw-both')
        .from('#frontier-companies-layer-group > g:nth-child(2)', 0.5, {
            rotation: '-=60',
            yPercent: '+=50'
        }, 'draw-both')
        .staggerFrom(frntier, 1, {autoAlpha: 0, scaleX: 0, transformOrigin: 'bottom'}, 0.1)
        .staggerFrom(companies, 1, {autoAlpha: 0}, 0.1, '-=0.5')
        .add('redraw', '-=1')
        .to('#mask > path', 1, {drawSVG: 0, repeat: 1, yoyo: true, ease: Back.easeInOut}, 'redraw')
        .to('#moon__right-2', 1, {drawSVG: 0, repeat: 1, yoyo: true, ease: Back.easeInOut}, 'redraw')
        .staggerTo(frntier, 0.5, {
            cycle: {autoAlpha: [0, 1]},
            repeat: 1,
            yoyo: true,
            transformOrigin: 'top'
        }, 0.1, 'redraw')
        .staggerTo(companies, 0.5, {
            cycle: {autoAlpha: [0, 1]},
            repeat: 1,
            yoyo: true,
            transformOrigin: 'top'
        }, 0.1, 'redraw')


    ;
}());
