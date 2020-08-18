// GSDevTools.create({minimal: true});




    var tl = new TimelineMax({repeat: -1, yoyo: true});

    tl
        .staggerTo(['#smallChat','#mediumChat','#bigChat'],1,{yPercent:-10, ease: Back.easeInOut},-0.2)
        .staggerTo(['#smallMsg','#mediumMsg','#bigMsg'],1,{autoAlpha:1,yPercent:-10, ease: Back.easeInOut},-0.2)
    ;









