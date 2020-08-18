// GSDevTools.create({minimal: true});




function bigTl1(){
    var tl = new TimelineMax();

    tl


        .from('#bigChat',1,{scale:0,transformOrigin:'50% 100%',ease:Back.easeOut});


    return tl;
}

function bigTl2(){
    var tl = new TimelineMax();

    tl
        .add('bigDotsFrom')
        .staggerFrom('#bigDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'bigDotsFrom')
        .staggerFrom('#bigDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'bigDotsFrom')

        .add('bigDotsTo')
        .staggerTo('#bigDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'bigDotsTo')
        .staggerTo('#bigDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'bigDotsTo');


    return tl;
}

function bigTl3(){
    var tl = new TimelineMax();

    tl
        .add('bigDotsTo')
        .staggerTo('#bigDotsTopColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'bigDotsTo')
        .staggerTo('#bigDotsBottomColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'bigDotsTo')
        .fromTo('#bigMsg',.6,{autoAlpha:0,y:40},{autoAlpha:1,y:0, ease: Back.easeOut},'-=0.3')
        .to('#big',.4,{scale:0,transformOrigin:'50% 100%',ease: Linear.easeNone},'-=0.1')
    ;



    return tl;
}


function mediumTl1(){
    var tl = new TimelineMax();

    tl


        .from('#mediumChat',1,{scale:0,transformOrigin:'50% 100%',ease:Back.easeOut});


    return tl;
}

function mediumTl2(){
    var tl = new TimelineMax();

    tl
        .add('mediumDotsFrom')
        .staggerFrom('#mediumDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'mediumDotsFrom')
        .staggerFrom('#mediumDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'mediumDotsFrom')

        .add('mediumDotsTo')
        .staggerTo('#mediumDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'mediumDotsTo')
        .staggerTo('#mediumDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'mediumDotsTo');


    return tl;
}

function mediumTl3(){
    var tl = new TimelineMax();

    tl
        .add('mediumDotsTo')
        .staggerTo('#mediumDotsTopColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'mediumDotsTo')
        .staggerTo('#mediumDotsBottomColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'mediumDotsTo')
        .fromTo('#mediumMsg',.6,{autoAlpha:0,y:40},{autoAlpha:1,y:0, ease: Back.easeOut},'-=0.3')
        .to('#medium',.4,{scale:0,transformOrigin:'50% 100%',ease: Linear.easeNone},'-=0.1')
    ;



    return tl;
}


function smallTl1(){
    var tl = new TimelineMax();

    tl


        .from('#smallChat',1,{scale:0,transformOrigin:'50% 100%',ease:Back.easeOut});


    return tl;
}

function smallTl2(){
    var tl = new TimelineMax();

    tl
        .add('smallDotsFrom')
        .staggerFrom('#smallDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'smallDotsFrom')
        .staggerFrom('#smallDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-10,-20,-30]},ease:Linear.easeNone},0.1,'smallDotsFrom')

        .add('smallDotsTo')
        .staggerTo('#smallDotsTopColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'smallDotsTo')
        .staggerTo('#smallDotsBottomColor > path',.3,{autoAlpha:0,cycle:{y:[-30,-20,-10]},ease:Linear.easeNone},0.1,'smallDotsTo');


    return tl;
}

function smallTl3(){
    var tl = new TimelineMax();

    tl
        .add('smallDotsTo')
        .staggerTo('#smallDotsTopColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'smallDotsTo')
        .staggerTo('#smallDotsBottomColor > path',.3,{autoAlpha:1,y:0,ease:Linear.easeNone},0.1,'smallDotsTo')
        .fromTo('#smallMsg',.6,{autoAlpha:0,y:40},{autoAlpha:1,y:0, ease: Back.easeOut},'-=0.3')
        .to('#small',.4,{scale:0,transformOrigin:'50% 100%',ease: Linear.easeNone},'-=0.1')
    ;



    return tl;
}








var masterTimelineBig = new TimelineMax();

masterTimelineBig
    .add(bigTl1())
    .add(bigTl2(),'-=0.8')
    .add(bigTl3())
;

var masterTimelineMedium = new TimelineMax();

masterTimelineMedium
    .add(mediumTl1())
    .add(mediumTl2(),'-=0.8')
    .add(mediumTl3())
;


var masterTimelineSmall = new TimelineMax();

masterTimelineSmall
    .add(smallTl1())
    .add(smallTl2(),'-=0.8')
    .add(smallTl3())
;


var globalMasterTimeline = new TimelineMax({repeat:-1});

globalMasterTimeline
    .add(masterTimelineSmall,-3)
    .add(masterTimelineBig,-2)
    .add(masterTimelineMedium,0.4)
    .add(masterTimelineSmall,0.8)
;


// #07a7f7

globalMasterTimeline.timeScale(0.55);
