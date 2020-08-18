GSDevTools.create({minimal: true});

var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01", {align: "relative"});
var bezier02 = MorphSVGPlugin.pathDataToBezier("#bezier02", {align: "relative"});
var bezier03 = MorphSVGPlugin.pathDataToBezier("#bezier03", {align: "relative"});
var bezier04 = MorphSVGPlugin.pathDataToBezier("#bezier04", {align: "relative"});


function tl01() {
    var tl = new TimelineMax({repeat:-1,yoyo:true});

    tl

        .to("#ladderGuy", 2, {bezier: {values: bezier01, type: "cubic", ease: Power4.easeOut}})
        .to('',.2,{})
        .to("#ladderGuy", 2, {bezier: {values: bezier02, type: "cubic", ease: Power4.easeOut}})
        .to('',.2,{})
        .to("#ladderGuy", 2, {bezier: {values: bezier03, type: "cubic", ease: Power4.easeOut}})
        .to('',.2,{})
        .to("#ladderGuy", 2, {bezier: {values: bezier04, type: "cubic", ease: Power4.easeOut}})
        .to('',.2,{})

    ;
    return tl
}


master = new TimelineMax();

master

    .add(tl01())

;



