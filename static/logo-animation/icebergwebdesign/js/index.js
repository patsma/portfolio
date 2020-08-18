GSDevTools.create({minimal: true});
TweenLite.set(["#penguin","body"],{autoAlpha:1});
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
CustomBounce.create("myBounce", {strength:0.2, squash:0, squashID:"myBounce-squash"});


var bezier01 = MorphSVGPlugin.pathDataToBezier("#bezier01",{align:"relative"});
var bezier02 = MorphSVGPlugin.pathDataToBezier("#bezier02",{align:"relative"});



var tl = new TimelineMax();
tl

    .add('triggerAll')
    .staggerFrom("#iceberg > path",1,{autoAlpha:0,ease:Power2.easeOut},0,'triggerAll')
    .staggerFrom("#webDesign > path",1,{autoAlpha:0,ease:Power2.easeOut},0,'triggerAll')
    .add('triggerPenguin')
    .fromTo("#penguin", 2, {x:-250, ease:Linear.easeNone},{x:-10},'triggerPenguin')
    .to("#penguin", 0.2, {rotation:10, ease:"myBounce-squash",yoyo:true,repeat:7,transformOrigin:'center bottom'},'triggerPenguin')
    .to("#penguin > path:nth-child(1)", 0.6, {yPercent:20, ease:"myBounce-squash",yoyo:true,repeat:2},'triggerPenguin+=0.2')
    .to("#penguin > path:nth-child(5)", 0.2, {xPercent:30,yPercent:30, ease:"myBounce-squash",yoyo:true,repeat:8},'triggerPenguin')
    .to("#penguin > path:nth-child(6)", 0.2, {xPercent:30,yPercent:30, ease:"myBounce-squash",yoyo:true,repeat:8},'triggerPenguin+=0.1')





;
tl.timeScale(0.7);

//
//
// function tl01(){
//     var tl = new TimelineMax();
//     tl
//
//         .add('triggerAll')
//         .staggerFrom("#iceberg > path",1,{xPercent:10,yPercent:-20,scaleX:0,transformOrigin:'left center',ease:Power2.easeOut},0.1,'triggerAll')
//         .staggerFrom("#webDesign > path",1,{yPercent:-10,scaleY:0,rotate:-45,transformOrigin:'left center',ease:Power2.easeOut},0.1,'triggerAll+=1')
//         .add('triggerPenguin')
//
//         .fromTo("#penguin", 2, {x:-300, ease:Linear.easeNone},{x:-110},'triggerPenguin')
//         .to("#penguin", 0.2, {rotation:10, ease:"myBounce-squash",yoyo:true,repeat:10,transformOrigin:'center bottom'},'triggerPenguin')
//         .to("#penguin > path:nth-child(5)", 0.2, {xPercent:15,yPercent:15, ease:"myBounce-squash",yoyo:true,repeat:10},'triggerPenguin')
//         .to("#penguin > path:nth-child(6)", 0.2, {xPercent:15,yPercent:15, ease:"myBounce-squash",yoyo:true,repeat:10},'triggerPenguin+=0.1')
//         .add('penguinFlip',1.3)
//         .to("#penguin", 2, {rotation:360,x:-5,y:-10, ease:Power2.easeInOut,transformOrigin:'center center'},'penguinFlip')
//         .to("#penguin", .5, {y:0, ease:Power2.easeInOut,transformOrigin:'center center'},'penguinFlip+=1.5')
//
//
//
//     ;
//     return tl
// }
//
// function tl02(){
//     var tl = new TimelineMax();
//     tl
//
//
// ;
//     return tl
// }
//
//
// master = new TimelineMax({repeat:-1});
//
// master
//     .add(tl01())
//     .add(tl02())
//
// ;
