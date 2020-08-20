var just = $('#textGroupJust > path'),
    justIn = $('#textGroupJustIn > path'),
    mind = $('#textGroupMind > path'),
    circles = $('#circleGroup * circle')
    ;

tl = new TimelineMax({yoyo:true,repeat:2});



tl

.staggerFrom(just,0.5,{y:-2,autoAlpha:0,ease: Power0.easeNone},-0.1)
.staggerFrom(justIn,0.5,{y:2,autoAlpha:0,ease: Power0.easeNone},0.1,'-=0.4')
.staggerFrom(mind,1,{y:-2,autoAlpha:0,ease: Sine.easeOut},-0.1,'-=0.4')
.staggerFrom(circles,0.2,{scale:0,transformOrigin:'50% 50%',autoAlpha:0,ease: Back.easeOut},0.1,'-=0.6')
;

$('g#justinmindLogo').mouseleave( function (){
  tl.play(0);
});
