"use strict";


$(document).ready(function () {

TweenLite.set('body',{autoAlpha:1});




    var controller = new ScrollMagic.Controller();


    var Scene01ShowIntro = new ScrollMagic.Scene({
        triggerElement: ".scene01",
        offset:-20,
        duration: '100%',
        triggerHook: 0
    })

        .setPin('.scene01')
        .setTween(showScene01())
        // .addIndicators({
        //     name: "ShowScene01",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene02 = new ScrollMagic.Scene({
        triggerElement: ".scene02",
        offset: 50,
        duration: '600%',
        triggerHook: 0
    })
        .setPin('.scene02')
        .setTween(showScene02())
        // .addIndicators({
        //     name: "ShowScene02",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene03 = new ScrollMagic.Scene({
        triggerElement: ".scene03",
        offset: 50,
        duration: '600%',
        triggerHook: 0
    })
        .setPin('.scene03')
        .setTween(showScene03())
        // .addIndicators({
        //     name: "ShowScene02",
        //     indent: 100
        // })
        .addTo(controller);


    var Scene04 = new ScrollMagic.Scene({
        triggerElement: ".scene04",
        offset: 80,
        duration: '900%',
        triggerHook: 0
    })
        .setPin('.scene04')
        .setTween(showScene04())
        // .addIndicators({
        //     name: "ShowScene02",
        //     indent: 100
        // })
        .addTo(controller);


    function showScene01() {
        var tl = new TimelineMax();

        tl
            .from('#mainTitle', 0.5, {yPercent:10,autoAlpha: 0})
            .staggerFrom('#storageMediaDevices > g > g > g', 0.5, {yPercent:10,autoAlpha:0}, 0.1)
        ;
        return tl;
    }

    function showScene02() {
        var tl = new TimelineMax();

        tl
            .from('#frame', 0.5, {yPercent:20,autoAlpha: 0})
            .from('#s02t01', 0.5, {yPercent:20,autoAlpha: 0})
            .to('#s02t01', 0.5, {yPercent:-20,autoAlpha: 0})
            .from('#s02t02', 0.5, {yPercent:20,autoAlpha: 0})
            .to('#s02t02', 0.5, {yPercent:-20,autoAlpha: 0})
            .add('yourResponsibility')
            .staggerFrom('#s02t03 > path', 0.5, {yPercent:20,autoAlpha: 0},0.1,'yourResponsibility')
            .from('#stopPerson', 0.5, {xPercent:50,autoAlpha: 0},'yourResponsibility')

        ;
        return tl;
    }

    function showScene03() {
        var tl = new TimelineMax();

        tl
            .from('#sdCardBackground', 0.5, {xPercent:20,autoAlpha: 0})
            .from('#s03t01', 0.5, {yPercent:20,autoAlpha: 0})
            .add('lostOrStolen')
            .from('#s03t02', 0.5, {yPercent:20,autoAlpha: 0},'lostOrStolen')
            .from('#redWarning', 0.5, {yPercent:50,autoAlpha: 0},'lostOrStolen-=0.5')
            .staggerTo('#s03e01 > *',0.5,{yPercent:10,autoAlpha:0},0.1)
            .add('showTextAndSpider')
            .from('#s03t04', 0.5, {yPercent:20,autoAlpha: 0},'showTextAndSpider')
            .from('#spider', 0.5, {yPercent:-20,scale:0,transformOrigin:'top center',autoAlpha: 0},'showTextAndSpider')
            .from('#s03e02 > g:nth-child(3)', 0.5, {scale:0,transformOrigin:'center center',autoAlpha: 0})


        ;
        return tl;
    }

    function showScene04() {
        var tl = new TimelineMax();

        tl
            .from('#tabletBackground', 0.5, {skewX:45,transformOrigin:'bottom center',yPercent:20,autoAlpha: 0})
            .add('showJamesPointing')
            .from('#s04t01', 0.5, {yPercent:20,autoAlpha: 0},'showJamesPointing')
            .from('#jamesPointing', 0.5, {yPercent:20,autoAlpha: 0},'showJamesPointing')

            .staggerTo('#s04e01 > *',0.5,{yPercent:10,autoAlpha:0},0.1)
            .from('#jamesDontCare', 0.5, {yPercent:20,autoAlpha: 0})
            .from('#s04t02', 0.5, {xPercent:20,autoAlpha: 0})
            .from('#jamesLostUsb', 0.5, {yPercent:20,autoAlpha: 0})

            .staggerTo('#s04e02 > *',0.5,{yPercent:10,autoAlpha:0},0.1)
            .from('#s04t03', 0.5, {xPercent:20,autoAlpha: 0})
            .from('#jamesRedCard', 0.5, {yPercent:20,autoAlpha: 0})
            .to('#jamesRedCard', 0.5, {skewX:1,yoyo:true,transformOrigin:'bottom right'})
            .staggerTo('#s04e03 > *',0.5,{yPercent:10,autoAlpha:0},0.1)
            .from('#s04t04', 0.5, {xPercent:20,autoAlpha: 0})
            .from('#hacker', 0.5, {yPercent:20,autoAlpha: 0})

            .from('#hacker > g:nth-child(2) > g > g:nth-child(3)',0.5,{scale:2,transformOrigin:'center center',ease:Bounce.easeIn})
            .add('showSpiderLegs')

            .staggerFrom('#hacker > g:nth-child(2) > g > g:nth-child(1) > path', 0.5, {transformOrigin:'center center',cycle:{xPercent:[-5,-10,-15,-20],yPercent:[5,10,15,20],rotation:[-5,-10,-15,-20]},autoAlpha: 0},0.1,'showSpiderLegs')
            .staggerFrom('#hacker > g:nth-child(2) > g > g:nth-child(2) > path', 0.5, {transformOrigin:'center center',cycle:{xPercent:[5,10,15,20],yPercent:[5,10,15,20],rotation:[5,10,15,20]},autoAlpha: 0},0.1,'showSpiderLegs')




        ;
        return tl;
    }
});
