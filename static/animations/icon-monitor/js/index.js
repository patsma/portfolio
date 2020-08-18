GSDevTools.create({minimal: true});


var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01",{align:"relative"});


function tl01(){
    var tl = new TimelineMax({repeat:-1,yoyo:true});
    tl
        .staggerTo("#mountains > g > g > polygon", 1, {cycle:{yPercent:[4,3,5],xPercent:[1,2,3]},scale:2.8,transformOrigin:'50% 10%'},0.2,0)
        .staggerTo("#mountains > g > g > polygon", 1, {cycle:{yPercent:[1,2,3],xPercent:[1,2,3]},scale:1,transformOrigin:'50% 10%'},0.2)
    ;
    return tl
}

function tl02(){
    var tl = new TimelineMax({repeat:-1,yoyo:true});
    tl
        .to("#magnifier", 18, {bezier: {values:bezier01, type:"cubic"}, ease:Linear.easeNone,yoyo:true,repeat:-1})
    ;
    return tl
}


master = new TimelineMax({repeat:-1,yoyo:true});

master
    .add(tl01(),0)
    .add(tl02(),0)
;
