
$(document).foundation();

$(function () {
    console.log("ready!");
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    //initial Timeline
    const initialTl = new TimelineMax();

    initialTl
        .to('.animation-container', 0.5, {autoAlpha: 1})
        .add('showHeadingAndLines')
        .staggerFrom('.main-title-grid p', 1, {autoAlpha: 0, xPercent: -5}, 0.1, 'showHeadingAndLines')
        .from('.main-title-separator', 0.5, {width: 0}, 'showHeadingAndLines+=0.3')
        .staggerFrom('.scene01-text__heading p', 1, {autoAlpha: 0, yPercent: -5}, 0.1, 'showHeadingAndLines+=0.4')
        .from('.scene01-text__number', 0.5, {scale: 0, autoAlpha: 0, transformOrigin: 'center center'},'showHeadingAndLines+=0.5')
        .from('.animation', 0.5, {autoAlpha:0},'showHeadingAndLines+=0.6')

    ;
    //Timelines scenes
    const scene01Tl = new TimelineMax();
    scene01Tl
        .to('#scene01-morph-to-rectangle', 1, {autoAlpha:1,fill:'#96D8EF',stroke:'transparent'})


        .add('scene01morphToRectangle')
        .to(['#scene01-outer-border','#scene01-dashed-area','#scene01-containers'], 1.2, {yPercent:-100},'scene01morphToRectangle')
        .to('#scene01-morph-to-rectangle', 1, {morphSVG:'#scene02-rectangle-to-be-morphed'},'scene01morphToRectangle')

        .add('scene02showContentWithLine')
        .from('#scene01-reveal-content-mask', 1, {scaleX:0},'scene02showContentWithLine')
        .fromTo('#scene02-show-mask-line', 1, {xPercent:-10},{xPercent:104},'scene02showContentWithLine')

    ;

    const scene02Tl = new TimelineMax();
    scene02Tl
        .staggerTo(['.scene01-text__number','.scene01-text__heading p'], 0.3, {autoAlpha: 0, xPercent: -25}, 0.1)
        .staggerFrom(['.scene02-text__number','.scene02-text__heading p'], 0.3, {autoAlpha: 0, xPercent: 25}, 0.1)

    ;

    const scene03Tl = new TimelineMax();
    scene03Tl
        .to('#scene01-reveal-content-mask', 1, {autoAlpha:0})
        .to('#scene01-morph-to-rectangle', 1, {morphSVG:'#scene03-morph-to-message'})

        .from('#scene03-message-tail', 1, {autoAlpha:0,yPercent:-10})
        .staggerFrom('#scene-03-text-placeholders > *', 0.3, {autoAlpha: 0, cycle:{xPercent:[-10,10,-10]}}, 0.1)
        .staggerFrom('#scene03-headphones > *', 0.3, {drawSVG:0}, 0.1)
    ;

    const scene04Tl = new TimelineMax();
    scene04Tl
        .staggerTo(['.scene02-text__number','.scene02-text__heading p'], 0.3, {autoAlpha: 0, xPercent: -25}, 0.1)
        .staggerFrom(['.scene03-text__number','.scene03-text__heading p'], 0.3, {autoAlpha: 0, xPercent: 25}, 0.1)

    ;


    var controller = new ScrollMagic.Controller();
    // build scene
    var scene01Pin = new ScrollMagic.Scene({
        triggerElement: "body",
        duration: '800%'
    })
        .setPin('.animation-container')
        // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene01 = new ScrollMagic.Scene({
        triggerElement: "body",
        duration: '200%',
        offset:'1000%'

    })
        .setTween(scene01Tl)
        // .addIndicators({name: "2 (duration: 100)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene02 = new ScrollMagic.Scene({
        triggerElement: "body",
        offset:'3200%'

    })
        .setTween(scene02Tl)
        // .addIndicators({name: "3 (duration: 100)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene03 = new ScrollMagic.Scene({
        triggerElement: "body",
        duration: '200%',
        offset:'3600%'

    })
        .setTween(scene03Tl)
        // .addIndicators({name: "4 (duration: 100)"}) // add indicators (requires plugin)
        .addTo(controller);

    var scene04 = new ScrollMagic.Scene({
        triggerElement: "body",
        offset:'5600%'

    })
        .setTween(scene04Tl)
        // .addIndicators({name: "5 (duration: 100)"}) // add indicators (requires plugin)
        .addTo(controller);
});