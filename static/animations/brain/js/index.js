window.addEventListener('load', function () {
    GSDevTools.create({
        minimal: true
    });
    const tl = new TimelineMax({repeat: -1});

    tl
        .staggerFrom('#face > *', 1, {autoAlpha: 0, ease: Power0.easeNone}, -0.1)
        .staggerFrom(['#l-brain', '#r-brain'], 1, {autoAlpha: 0}, 0.1, '-=0.5')
        .staggerFrom('#circles > *', 1, {
            scale: 0,
            transformOrigin: 'center center',
            repeat: 4,
            yoyo: true,
            ease: Back.easeInOut
        }, 0.1, '-=0.5')


});