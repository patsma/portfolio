GSDevTools.create({minimal: true});

var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01",{align:"relative"});
var bezier02 = MorphSVGPlugin.pathDataToBezier("#bezier02",{align:"relative"});
var bezier03 = MorphSVGPlugin.pathDataToBezier("#bezier03",{align:"relative"});
TweenLite.set(['#social01','#social02','#social03'],{autoAlpha:1});

function tl01() {
    var tl = new TimelineMax({repeat:-1});

    tl
        .to("#car01", 1, {autoAlpha:1,bezier: {values:bezier01, type:"cubic"}})
        .add('show01')
        .to('#car01',.5,{yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show01')
        .from("#social01", .5, {yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show01')

        .to("#car02", 1, {autoAlpha:1,bezier: {values:bezier02, type:"cubic"}})
        .add('show02')
        .to('#car02',.5,{yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show02')
        .from("#social02", .5, {yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show02')

        .to("#car03", 1, {autoAlpha:1,bezier: {values:bezier03, type:"cubic"}})
        .add('show03')
        .to('#car03',.5,{yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show03')
        .from("#social03", .5, {yPercent:-10,autoAlpha:0,scale:0,transformOrigin:'center center',ease: Elastic.easeInOut},'show03')
    ;
    return tl
}






master = new TimelineMax({repeat: -1, yoyo: true});

master

    .add(tl01())

;
master.timeScale(0.5);


