(function () {
    GSDevTools.create({minimal:true});
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


    const select = function (x) {

        return document.querySelector(x);

    };

    const selectAll = function (x) {

        return document.querySelectorAll(x);

    };


    const BG = select('#BG');
    const Icons = selectAll('g#Icons g path');
    const IconsGroup = selectAll('g#Icons g');
    const Shadows = select('#Shadows');
    const ShadowBottom = select('.bottom__shadow');
    const _3D_Logo = select('#_3D_Logo');
    const Light = select('#Light');
    const Figure = select('#Figure');
    const Glow = select('#Glow');
    const Glowing_Lines = select('#Glowing_Lines');
    const checkboard = select('#checkboard');
    const shield = select('#shield');
    const profile = select('#profile');
    const pilars = select('#pilars');
    const glowing__lines = select('#Glowing_Lines');
    const Circles = selectAll('#Circles > g > path');


    const glowing__line__right__overlay = selectAll('#glowing__line__right__overlay > path');
    const glowing__line__top__overlay = selectAll('#glowing__line__top__overlay > path');
    const glowing__line__left__overlay = selectAll('#glowing__line__left__overlay > path');
    const glowing__line__bottom__overlay = selectAll('#glowing__line__bottom__overlay > path');

    const glowing__line__right__overlay__second = selectAll('#glowing__line__right__overlay__second > path');
    const glowing__line__top__overlay__second = selectAll('#glowing__line__top__overlay__second > path');
    const glowing__line__left__overlay__second = selectAll('#glowing__line__left__overlay__second > path');
    const glowing__line__bottom__overlay__second = selectAll('#glowing__line__bottom__overlay__second > path');

    const glowing__line__right = selectAll('#glowing__line__right');
    const glowing__line__top = selectAll('#glowing__line__top');
    const glowing__line__left = selectAll('#glowing__line__left');
    const glowing__line__bottom = selectAll('#glowing__line__bottom');

    TweenMax.set([Glow],{autoAlpha:0});

    function tl1() {


        const tl = new TimelineMax();

        tl
            .add('initial-reveal')
            .to('section', .3, {autoAlpha: 1},'initial-reveal')
            .from(BG, .3, {autoAlpha: 0},'initial-reveal')
            .from(Figure, .3, {autoAlpha: 0},'initial-reveal')

            .add('show-icons-circles')
            .staggerFrom(Icons, .2, {drawSVG: 0, transformOrigin: 'center center', ease: Sine.easeInOut}, 0.01,'show-icons-circles')
            .staggerFrom(Circles, .2, {drawSVG: 0, transformOrigin: 'center center', ease: Sine.easeInOut}, -0.5,'show-icons-circles')
            .from(Glowing_Lines, 1, {autoAlpha: 0, transformOrigin: 'center center', ease: Back.easeInOut},'show-icons-circles')
            .from(_3D_Logo, .7, {autoAlpha:0,yPercent: -100, ease: Sine.easeInOut},'show-icons-circles+=1')


            .from([ShadowBottom], .2, {scale:1.1,transformOrigin:'center center',autoAlpha: 0, ease: Linear.easeNone},'show-icons-circles+=1.5')


        ;
tl.timeScale(0.7);

        return tl;
    }

    function tl2() {


        const tl = new TimelineMax();

        tl

            .add('filter-and-glow-one')
            .fromTo(checkboard, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-one')
            .to("#glow2 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-one')
            .to("#glowCheckboard feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-one')
            .staggerFrom(glowing__line__left__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-one')
            .staggerTo(glowing__line__left__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-one+=0.5')
            .to([Glow],.6, {autoAlpha: 0.9, repeat: 1, yoyo: true},'-=0.5')
            .to([Glow],.6, {autoAlpha: 0, yoyo: true})




            .add('filter-and-glow-two','-=3.5')
            .fromTo(shield, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-two')
            .to("#glow3 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-two')
            .to("#glowShield feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-two')
            .staggerFrom(glowing__line__top__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-two')
            .staggerTo(glowing__line__top__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-two+=0.5')
            .to([Glow],.6, {autoAlpha: 0.9, repeat: 1, yoyo: true},'-=0.5')
            .to([Glow],.6, {autoAlpha: 0, yoyo: true})



            .add('filter-and-glow-three','-=3.4')
            .fromTo(profile, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-three')
            .to("#glow4 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-three')
            .to("#glowProfile feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-three')
            .staggerFrom(glowing__line__right__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-three')
            .staggerTo(glowing__line__right__overlay, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-three+=0.5')
            .to([Glow],.6, {autoAlpha: 0.9, repeat:1, yoyo: true},'-=0.5')
            .to([Glow],.6, {autoAlpha: 0, yoyo: true})



            .add('filter-and-glow-four','-=3.9')
            .fromTo(pilars, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-four')
            .to("#glow1 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-four')
            .to("#glowPilars feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-four')
            .staggerFrom(glowing__line__bottom__overlay, .5, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-four')
            .staggerTo(glowing__line__bottom__overlay, .5, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-four+=0.5')




        ;
tl.timeScale(2);

        return tl;
    }



    function tl4() {


        const tl = new TimelineMax({repeat: 10,repeatDelay:3.5});

        tl

            .add('filter-and-glow-one')
            .fromTo(checkboard, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-one')
            .to("#glow2 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-one')
            .to("#glowCheckboard feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-one')
            .staggerFrom(glowing__line__left__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-one')
            .staggerTo(glowing__line__left__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-one+=0.5')





            .add('filter-and-glow-two','-=2.5')
            .fromTo(shield, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-two')
            .to("#glow3 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-two')
            .to("#glowShield feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-two')
            .staggerFrom(glowing__line__top__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-two')
            .staggerTo(glowing__line__top__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-two+=0.5')




            .add('filter-and-glow-three','-=2.5')
            .fromTo(profile, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-three')
            .to("#glow4 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-three')
            .to("#glowProfile feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-three')
            .staggerFrom(glowing__line__right__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-three')
            .staggerTo(glowing__line__right__overlay__second, 1, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-three+=0.5')




            .add('filter-and-glow-four','-=2.5')
            .fromTo(pilars, .6, {scale: 1, transformOrigin: 'center center', ease: Sine.easeInOut},{autoAlpha:1,scale:1.2,repeat:1,yoyo:true},'filter-and-glow-four')
            .to("#glow1 feGaussianBlur",.5,{attr:{stdDeviation:0},repeat:5,yoyo:true},'filter-and-glow-four')
            .to("#glowPilars feGaussianBlur",.6,{attr:{stdDeviation:15},repeat:1,yoyo:true,ease: Sine.easeInOut},'filter-and-glow-four')
            .staggerFrom(glowing__line__bottom__overlay__second, .5, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-four')
            .staggerTo(glowing__line__bottom__overlay__second, .5, {autoAlpha: 0, transformOrigin: 'center center',  ease: SteppedEase.config(1)}, .1,'filter-and-glow-four+=0.5')




        ;
        tl.timeScale(2);

        return tl;
    }


const master = new TimelineMax();

    master
        .add(tl1())
        .add(tl2(),'-=2.2')
        .to([Glow],1, {autoAlpha: 1})
        .add(tl4())
    ;





}());