GSDevTools.create({minimal: true});

var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01",{align:"relative"});



function tl01() {
    var tl = new TimelineMax({repeat:-1,yoyo:true});

    tl
        .staggerFrom('#keyword > path',0.0001,{autoAlpha:0},1,0)
        .to("#separator", 9, {bezier: {values:bezier01, type:"cubic"}, ease: SteppedEase.config(8)},-1)
        .staggerTo(['#letterK','#letterE','#letterY','#letterW','#letterO','#letterR','#letterD','#letterS'],1,{fill:'#fff'},1,0)
        .staggerTo(['#letterK','#letterE','#letterY','#letterW','#letterO','#letterR','#letterD','#letterS'],1,{fill:'none'},1,0.1)


    ;
    return tl
}






master = new TimelineMax({repeat: -1, yoyo: true});

master

    .add(tl01().timeScale(4))

;



