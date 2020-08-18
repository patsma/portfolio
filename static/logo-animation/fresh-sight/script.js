var select = function (s){
  return document.querySelector(s);
}

var selectAll = function (s){
  return document.querySelectorAll(s);
}

freshsight = select('#freshshightGroup');
freshsightAll = selectAll('#freshshightGroup path');
eyeGroup = selectAll('#eyeGroup');
iris = select('#iris');
irisWhite = select('#irisWhite');
eyelids = selectAll('#eyelids path');
yearsRibbon = select('#yearsRibbon');
yearsTextGroup = selectAll('#yearsTextGroup path');
yearsRibbonAll = selectAll('#yearsRibbon path');
one = selectAll('#freshshightGroup > path:nth-child(4)');
zero = select('#freshshightGroup > path:nth-child(3)');
// zero = select ('')



var tl = new TimelineMax({repeat:-1,repeatDelay:1});

tl
.set([yearsRibbon,yearsTextGroup,iris],{scale:0,transformOrigin:'50% 50%',autoAlpha:0})
.staggerFromTo(freshsightAll,.5,{autoAlpha:0,yPercent:50,xPercent:-50},{yPercent:0,xPercent:0,autoAlpha:1},-0.05)
.fromTo(eyelids,.5,{drawSVG:'10% 10%'},{drawSVG:'100% 0%'})
.to(iris,.5,{scale:1,autoAlpha:1,rotation:360},'-=.5')
.to(irisWhite,.5,{scale:0,autoAlpha:1,rotation:-360,transformOrigin:'50% 50%'},'-=.5')


.add('show-years')
.to(one,.5,{drawSVG:0},'show-years')
.to(zero,.5,{drawSVG:0},'show-years')
.to([yearsRibbon,yearsTextGroup],.5,{autoAlpha:1,scale:1},'show-years')
.add('after-years')
.to(one,.5,{drawSVG:'100% 0%', stroke:'red'},'after-years')
.to(zero,.5,{drawSVG:'100% 0%', stroke:'red'},'after-years')
.to(yearsRibbon,.5,{rotation:2},'after-years')
.to(yearsRibbon,.5,{rotation:0})
.to([one,zero],.5,{stroke:'#000',transformOrigin:'50% 50%'})

;
