var main = new TimelineMax({repeat:-1,repeatDelay:1});
TweenLite.set("#logoContainer", {autoAlpha:1});
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

main
.add('show-farm-table')


.staggerFrom('#logoBottom > path',0.6,{autoAlpha:1,cycle:{xPercent:[500,-500,-500],yPercent:[500,500,0]},transformOrigin:'bottom'},0.3)
.staggerFrom('#logoMiddle > path',0.6,{autoAlpha:1,cycle:{xPercent:[500,500,500],yPercent:[500,-500,500]},transformOrigin:'50% 50%'},0.3,'-=0.5')
.staggerFrom('#logoTop > path',0.6,{autoAlpha:1,cycle:{xPercent:[-500,-500,500],yPercent:[-500,-500,-500]},transformOrigin:'top'},0.2,'-=0.5')


.staggerFrom('#farm > path',1,{autoAlpha:0,cycle:{yPercent:[-10,-10,-10]},scaleY:0,transformOrigin:'top'},0.48,'show-farm-table')
.staggerFrom('#table > path',1,{autoAlpha:0,cycle:{yPercent:[-10,-10,-10]},scaleY:0,transformOrigin:'bottom'},0.48,'show-farm-table')

;
