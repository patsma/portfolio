tl = new TimelineMax();

tl

.add('showAll')
.staggerTo(['#white_wall','#purple_wall'],1,{autoAlpha:1},0.1,'showAll')
.to('#table',1,{autoAlpha:1},'showAll')
.from('#red_armchair',1,{autoAlpha:0,yPercent:20},'showAll')
.staggerFrom('#interviewer',1,{autoAlpha:0,yPercent:-2},0.1,'showAll')
.from(['#dark','#black_armchair_highlight','#suit','#ginger_head'],1,{autoAlpha:0,xPercent:50},'showAll')
.to('#eyebrows',0.5,{yPercent:40,yoyo:true,repeat:3})
.to('#fly',1,{xPercent:100,yPercent:100,autoAlpha:1})
.to('#phone > polygon',1,{fill:'#3d8ba7',yoyo:true,repeat:-1})

;

tl2 = new TimelineMax({repeat:-1,yoyo:true});

tl2
.add('smokeMove')
.to('#smoke1',1,{yPercent:20},'smokeMove')
.to('#smoke2',1,{yPercent:-20},'smokeMove')
.to('#paper_bottom',1,{morphSVG:'#paper_top'})
// .add('hideToChair')
// .to('#base',1,{morphSVG:'#dark'},'hideToChair')
// .to('#collar',1,{morphSVG:'#dark'},'hideToChair')
// .to('#hand',1,{morphSVG:'#dark'},'hideToChair')
// .to('#white_shirt',1,{morphSVG:'#dark'},'hideToChair')
// .to('#suit_arm',1,{morphSVG:'#dark'},'hideToChair')
// .to('#buttons > circle:nth-child(1)',0,{autoAlpha:0},'hideToChair')
// .to('#buttons > circle:nth-child(2)',0,{autoAlpha:0},'hideToChair')
// .to('#arm_shadow',0,{autoAlpha:0},'hideToChair')
// .to('#back_shadow',0,{autoAlpha:0},'hideToChair')
// .to('#leg',1,{morphSVG:'#dark'},'hideToChair')
// .to('#ginger_hair > path.st43',1,{morphSVG:'#dark'},'hideToChair')
// .to('#ginger_head_base',1,{morphSVG:'#dark'},'hideToChair')
// .to('#ginger_hair_highlight',1,{morphSVG:'#dark'},'hideToChair')
// .to('#white_collar',1,{morphSVG:'#dark'},'hideToChair')

// .to('#ginger_eyebrow',1,{morphSVG:'#dark'},'hideToChair')
// .to('#eye',1,{morphSVG:'#dark'},'hideToChair')      
.from('#shoe_2',1,{yPercent:-5,rotation:5,transformOrigin:'50% 0%'})
.add('blink')
.to('#eyebrows > path:nth-child(1)',0.2,{yPercent:50},'blink')
.to('#eyes > path:nth-child(1)',0.1,{autoAlpha:0},'blink')


;

tl3 = new TimelineMax({repeat:-1,yoyo:true});

tl3
.from('#fly',2,{bezier:{type:"soft", values:[{x:100, y:250}, {x:500, y:200}, {x:800, y:-400}], autoRotate:true}, ease:Power1.easeInOut})

;


tl4 = new TimelineMax({yoyo:true,repeat:-1});


tl4
.to('#clock',1,{autoAlpha:1})
.from(['#shadow_clock','#clock_base'],1,{drawSVG:'0%'})
.from(['#clock_hands'],1,{drawSVG:'0%'})
  .from('#ginger_dude',1,{yPercent:-1,rotation:2,transformOrigin:'50% 50%'})

;