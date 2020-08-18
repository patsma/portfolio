var  select = function(s) {
    return document.querySelector(s);
  },
  container = select('.container'),
  mainSVG = select('#morph')




var faceTl = new TimelineMax({repeat:-1,yoyo:true});
faceTl.to('#Leaf', 1, {
  morphSVG:{shape:'#hearth'}, fill:"#D52730",
  ease:Elastic.easeInOut
},'-=1')

faceTl.to('#Rights', 1, {
  morphSVG:{shape:'#MilkRights'}, fill:"#010101",
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#Elogo', 1, {
  morphSVG:{shape:'#MilkI'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroD2', 1, {
  morphSVG:{shape:'#EdD'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroA2', 1, {
  morphSVG:{shape:'#EdA'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroI2', 1, {
  morphSVG:{shape:'#EdI'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroE', 1, {
  morphSVG:{shape:'#EdE'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroU', 1, {
  morphSVG:{shape:'#EdU'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroR_1_', 1, {
  morphSVG:{shape:'#EdR'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroO', 1, {
  morphSVG:{shape:'#EdO'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroP', 1, {
  morphSVG:{shape:'#EdP'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroE2', 1, {
  morphSVG:{shape:'#EdE2'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroD', 1, {
  morphSVG:{shape:'#MilkM'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroA', 1, {
  morphSVG:{shape:'#MilkI2'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroI', 1, {
  morphSVG:{shape:'#MilkL'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroR2', 1, {
  morphSVG:{shape:'#MilkK'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroY', 1, {
  morphSVG:{shape:'#EdY'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#EuroR_2_', 1, {
  morphSVG:{shape:'#EdR2'},
  ease:Elastic.easeInOut
},'-=1')
faceTl.to('#Rights2', 1, {
  morphSVG:{shape:'#CircleStroke'}, fill:"#010101",
  ease:Elastic.easeInOut
},'-=1');

