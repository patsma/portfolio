// GSDevTools.create({minimal: true});

TweenLite.set('.wrapper',{autoAlpha:1});




    var tl = new TimelineMax({repeat:-1,yoyo:true,repeatDelay:1});

    tl
        .staggerFrom(['#platform01','#platform02','#platform03'],1,{yPercent:10,autoAlpha:0,ease: Power4.easeIn},0.4)
        .from('#platform04',1,{yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center bottom'})


    ;







