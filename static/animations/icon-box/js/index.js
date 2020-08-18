// GSDevTools.create({minimal: true});

var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01", {align: "relative"});

TweenLite.set('.wrapper',{autoAlpha:1});


    var tl = new TimelineMax({repeat:-1,yoyo:true});

    tl
        .to('',.5,{})
        .from("#lightbulb", 1, {autoAlpha:0,scale:0,transformOrigin:'50% 65%',bezier: {values: bezier01, type: "cubic", ease: Sine.easeIn}})
        .staggerTo('#lightMarks > *',1,{autoAlpha:1},0.08,'-=0.3')


    ;







