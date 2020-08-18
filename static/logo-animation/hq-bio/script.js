MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

var tl = new TimelineMax({yoyo:true,repeat:-1,repeatDelay:2});
tl
.add('morph-strokes')



.to('#InnerPattern',.5,{autoAlpha:0},'morph-strokes')
.from('#stroke01 > path',1,{drawSVG:0},'morph-strokes')
.from('#stroke02 > path',1,{drawSVG:0},'morph-strokes')
.from('#stroke03 > path',1,{drawSVG:0},'morph-strokes')
.from('#stroke04 > path',1,{drawSVG:0},'morph-strokes')
.from('#stroke05 > path',1,{drawSVG:0},'morph-strokes')


.to('#SpecialCoating01',1,{fill:'#e0f3ea',morphSVG:'#fill02 > path'},'morph-strokes')
.to('#SpecialCoating02',1,{fill:'#a3dabf',morphSVG:'#fill01 > path'},'morph-strokes')
.to('#SpecialCoating03',1,{fill:'#a3dabf',morphSVG:'#fill04 > path'},'morph-strokes')
.to('#InnerBackground01',1,{morphSVG:'#fill03 > path'},'morph-strokes')


;