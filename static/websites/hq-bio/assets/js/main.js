"use strict";
// //region LOADER
$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function () {
    setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
});

function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv").remove(); //makes page more lightweight
    });
}

// // endregion
$(document).ready(function () {


    $(this).scrollTop(0);


    if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }


    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    TweenLite.set('body', {autoAlpha: 1});
    TweenLite.set('#scene0201pin', {zIndex: 2});
    TweenLite.set('#scene0401pin', {zIndex: 3});
    //BEZIERS
    var BubblesMorphPath = MorphSVGPlugin.pathDataToBezier("#bubbles-bezier", {align: "relative"});
    var scene05MoleculesMovement01 = MorphSVGPlugin.pathDataToBezier("#bezier-sugar1", {align: "relative"});
    var scene05MoleculesMovement02 = MorphSVGPlugin.pathDataToBezier("#bezier-sugar2", {align: "relative"});
    var scene05MoleculesMovement03 = MorphSVGPlugin.pathDataToBezier("#bezier-sugar3", {align: "relative"});
    var scene05MoleculesMovement04 = MorphSVGPlugin.pathDataToBezier("#bezier-sugar4", {align: "relative"});
    var scene05MoleculesMovement05 = MorphSVGPlugin.pathDataToBezier("#bezier-sugar5", {align: "relative"});

    var scene07LeafBezier01 = MorphSVGPlugin.pathDataToBezier("#leaves-bezier", {
        offsetX: -25,
        offsetY: 20,
        align: "relative"
    });

    //EASING
    CustomWiggle.create("wiggle", { //name
        wiggles: 1, //number of wiggles/oscilations
        timingEase: Bounce.easeInOut, //affects how things are mapped along the x-axis (time).
        amplitudeEase: Power4.easeInOut //affects the shape of the amplitude curve
        //type:"easeOut" //can be "easeOut" (default), "easeInOut", "anticipate", "uniform" or "random" (but these are overridden by timingEase/amplitudeEase)
    });


    var controller = new ScrollMagic.Controller();

    // var master = new TimelineMax();
    //
    //     master.add(sceneOneShowMicrobesAndYeasts(), 'scene00');
    //     master.add(sceneTwoVanishBackground(), 'scene01');

    fluidBackground();
    sceneZeroShowLeafCopyAndScroll();
    sceneFourShowBubbles();
    sceneEightVatShake();
    sceneEightVatRotate();
    sceneNineWaves();
    sceneFiveMoveMolecules();

    function fluidBackground() {
        var TlMoveFluids = new TimelineMax({repeat: -1, yoyo: true});
        TlMoveFluids
            .to('#liquid01-background', 30, {xPercent: '-=30', ease: Power0.easeNone}, 'move-and-morph')
            .to('#liquid02-background', 30, {xPercent: '+=30', ease: Power0.easeNone}, 'move-and-morph');
    }

    function sceneZeroShowLeafCopyAndScroll() {
        var TlsceneZeroShowLeafCopyAndScroll = new TimelineMax();

        TlsceneZeroShowLeafCopyAndScroll
            .to('', .8, {})
            .from('#leaf > path', 1, {drawSVG: 0})
            .staggerFrom(['#heading-pure-intro', '#heading-predictable-intro'], .5, {autoAlpha: 0, yPercent: -20}, 0.5)
            .from('#heading-planet-friendly-intro', .5, {autoAlpha: 0, yPercent: -20})
            .from('#heading-nobel-prize', .5, {autoAlpha: 0, yPercent: -20}, '-=0.1')
            .from('#scroll-to', .5, {autoAlpha: 0, yPercent: 20}, '-=0.1')
            .from('#scroll-arrow', .5, {autoAlpha: 0, yPercent: -20, onComplete: loopArrow}, '-=0.2')
        ;

        function loopArrow() {
            TweenMax.to('#scroll-arrow', 1, {yPercent: 30, yoyo: true, repeat: -1});

        }
    }

    function sceneOneShowMicrobesAndYeasts() {
        var tl = new TimelineMax();

        tl.add('show-microbes-and-yeast');
        tl.staggerFrom('#yeasts-group > g', .2, {
            transformOrigin: '50% 50%',
            scale: 0,
            autoAlpha: 0
        }, -0.01, 'show-microbes-and-yeast');
        tl.staggerFrom('#microbes > g', .2, {
            transformOrigin: '50% 50%',
            scale: 0,
            autoAlpha: 0
        }, -0.01, 'show-microbes-and-yeast');
        tl.staggerFrom('#main-yeast', .2, {
            transformOrigin: '50% 50%',
            scale: 0,
            autoAlpha: 0
        }, -0.01, 'show-microbes-and-yeast+=0.5');
        tl.staggerFrom(['#yeasts-group > g', '#microbes > g'], 20, {
            transformOrigin: '50% 50%',
            cycle: {xPercent: [20, -20, 30, -30], yPercent: [20, -20, 30, -30], rotation: [20, 30, 40, 50]}
        }, 0.1);

        return tl;


    }

    function sceneTwoVanishBackground() {
        var tl = new TimelineMax();

        tl.add('start');
        tl.staggerTo('#yeasts-group > g', .6, {autoAlpha: 0, scale: 0}, 0.05, 'start');
        tl.staggerTo('#microbes > g', .1, {autoAlpha: 0, scale: 0}, 0.01, 'start');
        tl.staggerTo(['#liquid01-background', '#liquid02-background'], .6, {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: '50% 50%'
        }, 0.05, 'start');
        tl.to('#heading-first-we', .6, {autoAlpha: 0}, 'start');
        tl.from('#white-circle', .6, {autoAlpha: 0, scale: 0, transformOrigin: '50% 50%'}, 'start');
        tl.from('#scene03 > #background', .2, {fill: 'none'}, 'start');
        tl.from('#heading-next', .6, {autoAlpha: 0}, 'start+=0.5');

        return tl;
    }

    function sceneFourShowNonGmo() {

        var tl = new TimelineMax();
        tl.add('start');

        tl.staggerTo('#microbes > g', .1, {autoAlpha: 0, scale: 0}, 0.01, 'start');
        tl.staggerFrom('#non-gmo > path', .5, {autoAlpha: 0, yPercent: -100, xPercent: -50}, 0.1, 'start');


        return tl;
    }

    function sceneFourShowBubbles() {
        var tl = new TimelineMax({repeat: -1});

        tl.add('bubbles');
        tl.staggerFromTo('#bubbles-left > path', 8, {
            transformOrigin: '50% 50%',
            autoAlpha: 1,
            yPercent: -120
        }, {
            fill: '#65C294',
            stroke: '#65C294',
            autoAlpha: 0,
            scaleY: 1,
            scaleX: 1,
            ease: Power1.easeOut,
            bezier: {values: BubblesMorphPath, type: 'soft'}
        }, -0.5, 'bubbles');
        tl.staggerFromTo('#bubbles-middle > path', 8, {
            transformOrigin: '50% 50%',
            autoAlpha: 1,
            yPercent: -150,
            xPercent: 60
        }, {
            fill: '#65C294',
            stroke: '#65C294',
            autoAlpha: 0,
            scaleY: 1,
            scaleX: 1,
            ease: Power1.easeOut,
            bezier: {values: BubblesMorphPath, type: 'soft'}
        }, -0.5, 'bubbles');
        tl.staggerFromTo('#bubbles-right > path', 8, {
            transformOrigin: '50% 50%',
            autoAlpha: 1,
            yPercent: -150,
            xPercent: 10
        }, {
            fill: '#65C294',
            stroke: '#65C294',
            autoAlpha: 0,
            scaleY: 1,
            scaleX: 1,
            ease: Power1.easeOut,
            bezier: {values: BubblesMorphPath, type: 'soft'}
        }, -0.5, 'bubbles');
    }

    function sceneFiveShowHungryText() {
        var tl = new TimelineMax();
        tl.from('#hungry-group', .5, {yPercent: 10, autoAlpha: 0});
        return tl;
    }

    function sceneFiveHideHungryText() {
        var tl = new TimelineMax();
        tl.to('#hungry-group', .5, {yPercent: 10, autoAlpha: 0});
        return tl;
    }

    function sceneFiveMoveMolecules() {

        var tl = new TimelineMax({repeat: -1, yoyo: true});
        tl

            .add('move-molecules')
            .to('#sugar-molecule-1', 10, {
                xPercent: 10,
                rotation: 10,
                transformOrigin: '50% 50%',
                bezier: {values: scene05MoleculesMovement01, type: 'cubic', autoRotate: 37},
                ease: Linear.easeNone
            }, 'move-molecules')
            .to('#sugar-molecule-2', 10, {
                xPercent: 10,
                rotation: 10,
                transformOrigin: '50% 50%',
                bezier: {values: scene05MoleculesMovement02, type: 'cubic', autoRotate: 20},
                ease: Linear.easeNone
            }, 'move-molecules')
            .to('#sugar-molecule-3', 10, {
                xPercent: 10,
                rotation: 10,
                transformOrigin: '50% 50%',
                bezier: {values: scene05MoleculesMovement03, type: 'cubic', autoRotate: 30},
                ease: Linear.easeNone
            }, 'move-molecules')
            .to('#sugar-molecule-4', 10, {
                xPercent: 10,
                rotation: 10,
                transformOrigin: '50% 50%',
                bezier: {values: scene05MoleculesMovement04, type: 'cubic', autoRotate: 42},
                ease: Linear.easeNone
            }, 'move-molecules')
            .to('#sugar-molecule-5', 10, {
                xPercent: 10,
                rotation: 10,
                transformOrigin: '50% 50%',
                bezier: {values: scene05MoleculesMovement05, type: 'cubic', autoRotate: -38},
                ease: Linear.easeNone
            }, 'move-molecules')

        ;
        tl.timeScale(0.6);

        return tl;

    }

    function sceneSixAnimateGraph() {
        var tl = new TimelineMax();

        tl

            .from('#heading01', .6, {autoAlpha: 0, yPercent: -50})
            .add('green-and-brown-path-animation')
            .from('#green-chart-line > path', 1, {drawSVG: 0, ease: Linear.easeNone}, 'green-and-brown-path-animation')
            .from('#brown-chart-line > path', 1, {drawSVG: 0, ease: Linear.easeNone}, 'green-and-brown-path-animation')
            .add('green-and-brown-path-animation-arrow')
            .from('#green-arrow-head', .6, {
                autoAlpha: 0,
                ease: Linear.easeNone
            }, 'green-and-brown-path-animation-arrow')
            .from('#brown-arrow-head', .6, {
                autoAlpha: 0,
                ease: Linear.easeNone
            }, 'green-and-brown-path-animation-arrow')
            .from('#dollar-sign', .6, {
                drawSVG: '50% 70%',
                autoAlpha: 0,
                yPercent: -50
            }, 'green-and-brown-path-animation-arrow')
            .from('#heading02', .6, {autoAlpha: 0, yPercent: -50})
            .to('', 1, {});


        return tl;
    }


    function sceneSevenAnimateLeaves() {


        var target = $("#leaves > g");
        var tl = new TimelineMax({repeat: -1}).timeScale(1);

        tl.staggerTo(target, 8, {
            cycle: {yPercent: [1600, 1150, 1200, 500, 500]},
            bezier: {values: scene07LeafBezier01, type: 'cubic', autoRotate: 40},
            ease: Power0.easeNone
        }, -0.01);
        tl.from(target, 2, {autoAlpha: 0}, 0);
        tl.to(target, 2, {autoAlpha: 0}, 4);

        return tl;
    }

    function sceneSevenShowAnnotation() {

        var tl = new TimelineMax();

        tl.to('', 2, {});
        tl.from('#subheading-bonus', 1, {yPercent: 20, autoAlpha: 0});

        return tl;
    }


    function sceneEightVatShake() {
        var tl = new TimelineMax({repeat: -1});

        tl

            .fromTo('#vat-middle', 1, {transformOrigin: 'bottom center', rotation: -0.05, y: '-=.5'}, {
                rotation: 0.05,
                y: '+=.5',
                ease: 'wiggle'
            })


        ;

        return tl;

    }

    function sceneEightVatRotate() {
        var tl = new TimelineMax({repeat: -1});

        tl
            .to('#vat-rotated-part', 4, {rotation: 360, svgOrigin: '1364.23 280.8', ease: Linear.easeNone})

        ;

        return tl;
    }

    function sceneEightShrinkBeforeVat() {
        var tl = new TimelineMax();

        tl.add('shrink-before-vat');
        tl.to('#main-yeast', 1, {scale: 0, transformOrigin: '50% 50%'}, 'shrink-before-vat');
        tl.to('#yeast-finished', 1, {autoAlpha: 0, scale: 0, transformOrigin: '50% 50%'}, 'shrink-before-vat');

        return tl;
    }

    function sceneNineShowAfterVat() {

        var tl = new TimelineMax();
        tl
            .to('#yeast-finished', 1, {autoAlpha: 1, scale: 1, transformOrigin: '50% 50%'});

        return tl;
    }

    function sceneNineWaves() {
        var tl = new TimelineMax({repeat: -1, yoyo: true});
        tl
            .add('wave-animation')
            .fromTo('#waves-top > path:nth-child(2)', 14, {xPercent: -5, ease: Linear.easeNone}, {
                xPercent: 5,
                ease: Linear.easeNone
            }, 'wave-animation')
            .fromTo('#waves-top > path:nth-child(1)', 14, {xPercent: -5, ease: Linear.easeNone}, {
                xPercent: 5,
                ease: Linear.easeNone
            }, 'wave-animation')
            .fromTo('#waves-top > path:nth-child(3)', 14, {xPercent: -5, ease: Linear.easeNone}, {
                xPercent: 5,
                ease: Linear.easeNone
            }, 'wave-animation')
            .fromTo('#scene0901pin > svg:nth-child(1) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1)', 14, {
                xPercent: -5,
                ease: Linear.easeNone
            }, {xPercent: 5, ease: Linear.easeNone}, 'wave-animation')
        ;

        return tl;
    }

    function sceneTenShowCoating() {

        var tl = new TimelineMax();
        tl
            .to('#SpecialCoating01', 1, {autoAlpha: 1, transformOrigin: '50% 50%'});

        return tl;


    }

    function sceneTenShowProducts() {

        var tl = new TimelineMax();

        tl
            .from('#line-left', 10, {drawSVG: 0})
            .from('#icon-animal-nutrition', 1, {autoAlpha: 0, yPercent: 5})
            .staggerFrom('#text-animal-nutrition > path', 1, {autoAlpha: 0, yPercent: 10}, 0.1)
            .from('#line-center', 1, {drawSVG: 0})
            .from('#icon-human-health', 1, {autoAlpha: 0, yPercent: 5})
            .staggerFrom('#text-human-health > path', 1, {autoAlpha: 0, yPercent: 10}, 0.1)
            //
            //
            .from('#line-right', 1, {drawSVG: 0})
            .from('#cosmetics-icon', 1, {autoAlpha: 0, yPercent: 5})
            .staggerFrom('#text-cosmetics > path', 1, {autoAlpha: 0, yPercent: 10}, 0.1)

            .to('', 2, {})
            .to('#scene1000pin', 10, {autoAlpha: 0})


        ;
        return tl;
    }

    function scene11MoveAndMorph() {

        var TlScene11MoveAndMorphIntoEarth = new TimelineMax();

        TlScene11MoveAndMorphIntoEarth
            .to('#scene0202pin', 5, {yPercent: 20})
            // .from('#background-conclusion',5,{yPercent:100})
            .add('morph-strokes')


            .add('morph-strokes-=0.5')
            .to(['#SpecialCoating02', '#SpecialCoating03'], .5, {autoAlpha: 1}, 'morph-strokes')


            .to('#InnerPattern', 10, {autoAlpha: 0, scale: 0, transformOrigin: '50% 50%'}, 'morph-strokes')
            .from('#stroke01 > path', 10, {drawSVG: 0}, 'morph-strokes')
            .from('#stroke02 > path', 10, {drawSVG: 0}, 'morph-strokes')
            .from('#stroke03 > path', 10, {drawSVG: 0}, 'morph-strokes')
            .from('#stroke04 > path', 10, {drawSVG: 0}, 'morph-strokes')
            .from('#stroke05 > path', 10, {drawSVG: 0}, 'morph-strokes')
            .to('#strokes', 10, {autoAlpha: 1}, 'morph-strokes')


            .to('#SpecialCoating01', 10, {fill: '#e0f3ea', morphSVG: '#fill02 > path'}, 'morph-strokes')
            .to('#SpecialCoating02', 10, {fill: '#a3dabf', morphSVG: '#fill01 > path'}, 'morph-strokes')
            .to('#SpecialCoating03', 10, {fill: '#a3dabf', morphSVG: '#fill04 > path'}, 'morph-strokes')
            .to('#InnerBackground01', 10, {morphSVG: '#fill03 > path'}, 'morph-strokes')


            .to('#heading-thanks-to', 10, {autoAlpha: 1})
            .to('#heading-pure', 10, {autoAlpha: 1})
            .to('#heading-predictable', 10, {autoAlpha: 1})
            .to('#heading-planet-friendly', 10, {autoAlpha: 1})
            .fromTo('#footer-grass', 10, {autoAlpha: 1, zIndex: 0, yPercent: 100}, {
                yPercent: 0,
                autoAlpha: 1,
                zIndex: 1
            })


        ;
        return TlScene11MoveAndMorphIntoEarth;
    }


    var Scene00ShowMicrobesAndYeasts = new ScrollMagic.Scene({
        triggerElement: "body",
        offset: 50,
        triggerHook: 0
    })
        .setTween(sceneOneShowMicrobesAndYeasts())
        // .addIndicators({
        //     name: "Scene00ShowMicrobesAndYeasts",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene03AnimateScene = new ScrollMagic.Scene({
        triggerElement: "#scene0301pin",
        offset: -150,
        triggerHook: 0
    })
        .on("enter", function (event) {

        })
        .setTween(sceneTwoVanishBackground())
        // .addIndicators({
        //     name: "Scene03AnimateScene",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene04ShowNonGmo = new ScrollMagic.Scene({
        triggerElement: "#scene0401pin",
        offset: -50,
        triggerHook: 0
    })
        .on("enter", function (event) {

        })
        .setTween(sceneFourShowNonGmo())
        // .addIndicators({
        //     name: "Scene04ShowNonGmo",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene05ShowHungryText = new ScrollMagic.Scene({
        triggerElement: "#scene0501pin",
        offset: -150,
        triggerHook: 0
    })
        .on("enter", function (event) {

        })
        .setTween(sceneFiveShowHungryText())
        // .addIndicators({
        //     name: "Scene05ShowHungryText",
        //     indent: 100
        // })
        .addTo(controller);

    var Scene05HideHungryText = new ScrollMagic.Scene({
        triggerElement: "#scene0501pin",
        offset: 550,
        triggerHook: 0
    })
        .on("enter", function (event) {

        })
        .setTween(sceneFiveHideHungryText())
        // .addIndicators({
        //     name: "Scene05HideHungryText",
        //     indent: 100
        // })
        .addTo(controller);

    var Scene07AnimateLeaves = new ScrollMagic.Scene({
        triggerElement: "#scene0701pin",
        offset: 40,

        triggerHook: 0
    })

        .setTween(sceneSevenAnimateLeaves())
        // .addIndicators({
        //     name: "Scene07AnimateLeaves",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene07ShowAnnotation = new ScrollMagic.Scene({
        triggerElement: "#scene0701pin",
        offset: 40,

        triggerHook: 0
    })

        .setTween(sceneSevenShowAnnotation())
        // .addIndicators({
        //     name: "Scene07ShowAnnotation",
        //     indent: 100
        // })
        .addTo(controller);

    var Scene06AnimateGraph = new ScrollMagic.Scene({
        triggerElement: "#scene0601pin",
        offset: 880,

        triggerHook: 0
    })

        .setTween(sceneSixAnimateGraph())
        // .addIndicators({
        //     name: "Scene06AnimateGraph",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene08ShrinkBeforeVat = new ScrollMagic.Scene({
        triggerElement: "#scene0801pin",
        offset: -258,
        duration: 100,
        triggerHook: 0
    })

        .setTween(sceneEightShrinkBeforeVat())
        // .addIndicators({
        //     name: "Scene08ShrinkBeforeVat",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene09ShowAfterVat = new ScrollMagic.Scene({
        triggerElement: "#scene0901pin",
        offset: -500,
        duration: 100,
        triggerHook: 0
    })

        .setTween(sceneNineShowAfterVat())
        // .addIndicators({
        //     name: "Scene09ShowAfterVat",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene10ShowCoating = new ScrollMagic.Scene({
        triggerElement: "#scene1000pin",
        offset: -500,
        duration: 100,
        triggerHook: 0
    })

        .setTween(sceneTenShowCoating())
        // .addIndicators({
        //     name: "Scene10ShowCoating",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene10ShowProducts = new ScrollMagic.Scene({
        triggerElement: "#scene1000pin",
        offset: 450,
        duration: 1000,
        triggerHook: 0
    })

        .setTween(sceneTenShowProducts())
        // .addIndicators({
        //     name: "Scene10ShowProducts",
        //     indent: 100
        // })
        .addTo(controller);


    var scene11ShowConclusion = new ScrollMagic.Scene({
        triggerElement: "#scene1101pin",
        offset: 750,
        duration: 600,
        triggerHook: 0
    })
        .setTween(scene11MoveAndMorph())
        .on("enter", function (event) {


        })
        // .addIndicators({
        //     name: "scene11ShowConslusion",
        //     indent: 100
        // })
        .addTo(controller);


    //MAIN YEAST PIN
    var Scene02PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0201pin",
        offset: -50,
        duration: 10815,
        triggerHook: 0
    })
        .setPin('#scene0201pin', {pushFollowers: false})
        .on("enter", function (event) {
            TweenMax.set('#scene0301pin', {zIndex: -1})
        })

        // .addIndicators({
        //     name: "Scene02PinScene",
        //     indent: 100
        // })
        .addTo(controller);

    var Scene03PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0301pin",
        offset: -50,
        duration: 750,
        triggerHook: 0
    })
        .setPin('#scene0301pin', {pushFollowers: true})
        // .addIndicators({
        //     name: "Scene03PinScene",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene04PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0401pin",
        offset: 40,
        duration: 750,
        triggerHook: 0
    })
        .setPin('#scene0401pin', {pushFollowers: true})
        .on("enter", function (event) {
            TweenMax.set('#scene0501pin', {zIndex: -2})
        })
        // .addIndicators({
        //     name: "Scene04PinScene",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene05PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0501pin",
        offset: -50,
        duration: 750,
        triggerHook: 0
    })
        .setPin('#scene0501pin', {pushFollowers: true})
        .on("enter", function (event) {
            TweenMax.set('#scene0501pin', {zIndex: -1})
        })

        // .addIndicators({
        //     name: "Scene05PinScene",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene06PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0601pin",
        offset: 780,
        duration: 950,
        triggerHook: 0
    })
        .setPin('#scene0601pin', {pushFollowers: true})
        .on("enter", function (event) {
            TweenMax.set('#scene0601pin', {zIndex: -1})
        })
        // .addIndicators({
        //     name: "Scene06PinScene",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene07PinScene = new ScrollMagic.Scene({
        triggerElement: "#scene0700pin",
        offset: 40,
        duration: 760,
        triggerHook: 0
    })
        .setPin('#scene0700pin', {pushFollowers: true})
        .on("enter", function (event) {
            TweenMax.set('#scene0701pin', {zIndex: 1});
            TweenMax.set('#scene0201pin', {zIndex: 2});
            TweenMax.set('#scene0702pin', {zIndex: 3});
            TweenMax.set('#scene0802pin', {zIndex: 3});
            TweenMax.set('#scene0902pin', {zIndex: 3});
        })
        // .addIndicators({
        //     name: "Scene07PinScene",
        //     indent: 100
        // })
        .addTo(controller);

    var Scene10PinYeastAndProducts = new ScrollMagic.Scene({
        triggerElement: "#scene1000pin",
        offset: -100,

        triggerHook: 0
    })
        .setPin('#scene0202pin', {pushFollowers: true})

        // .addIndicators({
        //     name: "Scene10PinYeastAndProducts",
        //     indent: 500
        // })
        .addTo(controller);


    //BOTTOM DURATION

    var Scene1000pin = new ScrollMagic.Scene({
        triggerElement: "#scene1000pin",
        offset: -100,
        duration: 1500,
        triggerHook: 0
    })
        .setPin('#scene1000pin', {pushFollowers: false})

        // .addIndicators({
        //     name: "Scene10PinYeast",
        //     indent: 200
        // })
        .addTo(controller);

    var Scene06LayerOrder = new ScrollMagic.Scene({
        triggerElement: "#scene0601pin",
        offset: -550,
        duration: 750,
        triggerHook: 0
    })
    // .setPin('#scene0601pin', {pushFollowers: true})
        .on("enter", function (event) {
            TweenMax.set('#scene0601pin', {zIndex: 0});
            TweenMax.set('#scene0602pin', {zIndex: 3});
        })
        // .addIndicators({
        //     name: "Scene06LayerOrder",
        //     indent: 100
        // })
        .addTo(controller);
    //endregion


    //endregion

});
