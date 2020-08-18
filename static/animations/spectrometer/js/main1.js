(function ($) {

    /* SET DYNAMIC DATA */
    /* SET DYNAMIC DATA */
    /* SET DYNAMIC DATA */
    /* SET DYNAMIC DATA */
    /* SET DYNAMIC DATA */
    /* SET DYNAMIC DATA */

    //

    var
        //COMPANY INFO

        companyNameBottom = $('div.companyText'),
        companyNameTopLeft = $('h1.dynamicCompanyDataTopLeft'),
        companyWebsite = $('div.companyInfoTopLeft > p'),


        // TOP PHRASES
        phrase1 = $('#topPhrases > text:nth-child(1)'),
        phrase2 = $('#topPhrases > text:nth-child(2)'),
        phrase3 = $('#topPhrases > text:nth-child(3)'),
        phrase4 = $('#topPhrases > text:nth-child(4)'),
        phrase5 = $('#topPhrases > text:nth-child(5)'),


        // OTHER PHRASES (FROM LEFT COLUMN TOP TO BOTTOM)

        //COLUMN LEFT
        otherPhrase1 = $('#list > text:nth-child(11)'),
        otherPhrase2 = $('#list > text:nth-child(12)'),
        otherPhrase3 = $('#list > text:nth-child(13)'),
        otherPhrase4 = $('#list > text:nth-child(14)'),
        otherPhrase5 = $('#list > text:nth-child(15)'),

        //COLUMN RIGHT
        otherPhrase6 = $('#list > text:nth-child(1)'),
        otherPhrase7 = $('#list > text:nth-child(2)'),
        otherPhrase8 = $('#list > text:nth-child(3)'),
        otherPhrase9 = $('#list > text:nth-child(4)'),
        otherPhrase10 = $('#list > text:nth-child(5)');

    // CHANGE COMPANY DETAILS

    TweenLite.set(companyNameTopLeft, {text:"Tasty Sites", ease:Linear.easeNone});
    TweenLite.set(companyNameBottom, {text:"Tasty Sites", ease:Linear.easeNone});
    TweenLite.set(companyWebsite, {text:"<a  href='www.tastysites.pl'>www.companywebsite.com</a>", ease:Linear.easeNone});





    // CHANGE TOP PHRASES
    TweenLite.set(phrase1, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(phrase2, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(phrase3, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(phrase4, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(phrase5, {text:"This is an example", ease:Linear.easeNone});


    // CHANGE OTHER PHRASES


    TweenLite.set(otherPhrase1, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase2, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase3, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase4, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase5, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase6, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase7, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase8, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase9, {text:"This is an example", ease:Linear.easeNone});
    TweenLite.set(otherPhrase10, {text:"This is an example", ease:Linear.easeNone});

    //









    //GSAP CUSTOMS

    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");







    //Bezier movements
    electronShotBezier = MorphSVGPlugin.pathDataToBezier("#electronBezier", {align:"relative"});
    electronShotBezierBack = MorphSVGPlugin.pathDataToBezier("#electronBezierBack", {align:"relative"});
    firstMovementLargeMoleculeToSpectrometer = MorphSVGPlugin.pathDataToBezier("#firstMovementLargeMoleculeToSpectrometer", {align:"relative"});
    secondMovementLargeMoleculeToSpectrometer = MorphSVGPlugin.pathDataToBezier("#secondMovementLargeMoleculeToSpectrometer", {align:"relative"});

    laserBezier = MorphSVGPlugin.pathDataToBezier("#laserBezier",{offsetY:0, offsetX:0,align:"#laserParticles"});
    purpleBezierPath01 = MorphSVGPlugin.pathDataToBezier("#purpleBezierPath01",{offsetY:0, offsetX:0,align:"relative"});
    // purpleBezierPath011 = MorphSVGPlugin.pathDataToBezier("#purpleBezierPath011",{offsetY:0, offsetX:0,align:"relative"});
    purpleBezierPath02 = MorphSVGPlugin.pathDataToBezier("#purpleBezierPath02",{offsetY:0, offsetX:0,align:"relative"});

    blueBezierPath01 = MorphSVGPlugin.pathDataToBezier("#blueBezierPath01",{offsetY:0, offsetX:0,align:"relative"});
    // blueBezierPath011 = MorphSVGPlugin.pathDataToBezier("#blueBezierPath011",{offsetY:0, offsetX:0,align:"relative"});
    blueBezierPath02 = MorphSVGPlugin.pathDataToBezier("#blueBezierPath02",{offsetY:0, offsetX:0,align:"relative"});

    greenBezierPath01 = MorphSVGPlugin.pathDataToBezier("#greenBezierPath01",{offsetY:0, offsetX:0,align:"relative"});
    // greenBezierPath011 = MorphSVGPlugin.pathDataToBezier("#greenBezierPath011",{offsetY:0, offsetX:0,align:"relative"});
    greenBezierPath02 = MorphSVGPlugin.pathDataToBezier("#greenBezierPath02",{offsetY:0, offsetX:0,align:"relative"});


    yellowBezierPath01 = MorphSVGPlugin.pathDataToBezier("#yellowBezierPath01",{offsetY:0, offsetX:0,align:"relative"});
    // yellowBezierPath011 = MorphSVGPlugin.pathDataToBezier("#yellowBezierPath011",{offsetY:0, offsetX:0,align:"relative"});
    yellowBezierPath02 = MorphSVGPlugin.pathDataToBezier("#yellowBezierPath02",{offsetY:0, offsetX:0,align:"relative"});

    redBezierPath01 = MorphSVGPlugin.pathDataToBezier("#redBezierPath01",{offsetY:0, offsetX:0,align:"relative"});
    // redBezierPath011 = MorphSVGPlugin.pathDataToBezier("#redBezierPath011",{offsetY:0, offsetX:0,align:"relative"});
    redBezierPath02 = MorphSVGPlugin.pathDataToBezier("#redBezierPath02",{offsetY:0, offsetX:0,align:"relative"});
    //WIGGLES

    CustomWiggle.create("moleculeBreakEase", {wiggles:1, type:"anticipate"});
    CustomWiggle.create("moleculeHyperJump", {wiggles:1, type:"anticipate"});
    CustomWiggle.create("randomWiggle", {wiggles:1, type:"uniform"});
    CustomWiggle.create("funWiggle", {wiggles:1, type:"anticipate"});

    //BOUNCES

    CustomBounce.create("myBounce", {strength:1, squash:3});
    CustomBounce.create("electronBounce", {strength:0.7, squash:3});
    CustomBounce.create("magnetsForce", {strength:0.7, squash:3});


//    GLOBAL VARIABLES

    var moleculeLarge = $('#moleculeLarge'),
        purpleParticle = $('#particle-05-purple'),
        yellowParticle = $('#particle-01-yellow'),
        greenParticle = $('#particle-04-green'),
        blueParticle = $('#particle-02-blue'),
        redParticle = $('#particle-03-red'),
        bond1 = $('#bond-01'),
        bond2 = $('#bond-02'),
        bond3 = $('#bond-03'),
        bond4 = $('#bond-04'),

        purpleParticleNew = $('#purpleParticleAfterBreak'),
        yellowParticleNew = $('#yellowParticleAfterBreak'),
        greenParticleNew = $('#greenParticleAfterBreak'),
        blueParticleNew = $('#blueParticleAfterBreak'),
        redParticleNew = $('#redParticleAfterBreak'),


        //PRELOADER
        preloaderNew = $('#preloader'),
        preloaderPurple = $('#preloaderPurple'),
        preloaderBlue = $('#preloaderBlue'),
        preloaderGreen = $('#preloaderGreen'),
        preloaderYellow = $('#preloaderYellow'),
        preloaderRed = $('#preloaderRed'),
        preloaderDotsGroup = $('#preloaderDotsGroup'),
        moleculePreloaderYellow = $('#moleculePreloaderYellow'),
        moleculePreloaderRed = $('#moleculePreloaderRed'),
        moleculePreloaderPurple = $('#moleculePreloaderPurple'),
        moleculePreloaderBlue = $('#moleculePreloaderBlue'),
        moleculePreloaderGreen = $('#moleculePreloaderGreen'),
        preloaderMoleculeGroup = $('#preloaderMoleculeGroup'),

        //SPECTROMETER BODY PARTS

        topCutCircles = $('#topCutCircles'),
        bottomCutCircles = $('#bottomCutCircles'),
        spectrometerBody = $('#spectrometerBody'),

        //ELECTRON GUN
        electronShot = $('#electronShot'),
        laser = $('#laser'),
        laserBlur = $('#laserBlur'),


        //MAGNETS
        forceGroupTop = $('#forceGroupTop path'),
        forceGroupBottom = $('#forceGroupBottom path'),

        //TEXTS
        companyText = $('.companyText'),
        companyInfoTopLeft = $('.companyInfoTopLeft'),
        dynamicCompanyDataTopLeftWebsite = $('.dynamicCompanyDataTopLeftWebsite'),
        dynamicCompanyDataTopLeft = $('.dynamicCompanyDataTopLeft'),
        //SPLIT TEXTS

        calibratingSPectrometer = $('.calibratingSPectrometer');





















    //TIMELINES

    var mainTl = new TimelineMax(),
        moleculeBreakTl = new TimelineMax(),
        finalTravelTl = new TimelineMax(),
        preloaderTl = new TimelineMax(),
        preloaderMorphTl = new TimelineMax(),
        moleculeMoveScaleDownAndEnterSpectrometer = new TimelineMax(),
        magnetsTl = new TimelineMax(),
        showStatisticsTl = new TimelineMax(),
        moveToSpeedUpTl = new TimelineMax();



    preloaderTl
        .to('#preloaderDotsGroup',0,{autoAlpha:1})
        .add('showPreloader')
        .fromTo(preloaderPurple,0.1,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.2')
        .fromTo(preloaderBlue,0.1,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.4')
        .fromTo(preloaderGreen,0.1,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.6')
        .fromTo(preloaderYellow,0.1,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.8')
        .fromTo(preloaderRed,0.1,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=1')
        .staggerTo(preloaderDotsGroup, 2,{svgOrigin:'592.131px 356.95 px' ,rotation:720,yoyo:true,autoAlpha:1,ease:"funWiggle"},0.2,'showPreloader')
    ;

    preloaderMorphTl

        .add('morphIntoMolecule')
        .to(preloaderPurple,1,{morphSVG:moleculePreloaderPurple},'morphIntoMolecule')
        .to(preloaderBlue,1,{morphSVG:moleculePreloaderBlue},'morphIntoMolecule')
        .to(preloaderGreen,1,{morphSVG:moleculePreloaderGreen},'morphIntoMolecule')
        .to(preloaderYellow,1,{morphSVG:moleculePreloaderYellow},'morphIntoMolecule')
        .to(preloaderRed,1,{morphSVG:moleculePreloaderRed},'morphIntoMolecule')

        .add('replacePreloaderWithMolecule')
        .to(preloaderDotsGroup,1,{autoAlpha:0},'replacePreloaderWithMolecule')
        .to([purpleParticle,redParticle,blueParticle,greenParticle,yellowParticle],0.5,{autoAlpha:1},'replacePreloaderWithMolecule')
        .staggerFromTo([bond1,bond2,bond3,bond4],0.6,{strokeWidth:'4px',autoAlpha:1,drawSVG:'0%'},{strokeWidth:'5px',autoAlpha:1,drawSVG:'100%',ease: Power2.easeOut},-0.05,'replacePreloaderWithMolecule+=0.5')

    ;


    moleculeMoveScaleDownAndEnterSpectrometer
        .add('moveSpectrometerToCenterFix')
        .to(moleculeLarge,2,{bezier:{values:firstMovementLargeMoleculeToSpectrometer,type:'cubic'},ease: Power0.easeNone},'moveSpectrometerToCenterFix')
        .to('svg#Layer_1',1,{xPercent:-8},'moveSpectrometerToCenterFix')
        .to([purpleParticle,yellowParticle,greenParticle,blueParticle,redParticle,bond1,bond2,bond3,bond4],1,{transformOrigin:'50% 50%',scale:0.08,svgOrigin:'592.131px 356.95 px'})
        .to(moleculeLarge,2,{bezier:{values:secondMovementLargeMoleculeToSpectrometer,type:'cubic'},ease: Power0.easeNone},'-=0.1');



    moleculeBreakTl
        .from(electronShot,0.4,{bezier:{values:electronShotBezier,type:'cubic',ease:'electronBounce'}})
        .to(electronShot,0.4,{bezier:{values:electronShotBezierBack,type:'cubic',ease:'electronBounce'}})

        .to('#laserParticles',0,{autoAlpha:1})
        .staggerTo('#laserParticles path',0.5,{scale:0.5,autoAlpha:1,repeat:5,bezier:{values:laserBezier,type:'cubic'}},0.1)
        .staggerTo('#laserParticles path',0.5,{autoAlpha:0},0.1,'-=1')





    ;


    magnetsTl
        .add('magnetsForce')
        .staggerFromTo(forceGroupTop,0.6,{autoAlpha:0,cycle:{xPercent:[0,0,0],yPercent:[20,-10,20]}},{autoAlpha:1,cycle:{xPercent:[0,0,0],yPercent:[0,0,0]},repeat:2,ease:'magnetsForce'},0.1,'magnetsForce')
        .staggerFromTo(forceGroupBottom,0.6,{autoAlpha:0,cycle:{xPercent:[0,0,0],yPercent:[20,-10,20]}},{autoAlpha:1,cycle:{xPercent:[0,0,0],yPercent:[0,0,0]},repeat:2,ease:'magnetsForce'},0.1,'magnetsForce');


    finalTravelTl

        .add('gradientFade')
        .to("#radial-gradient stop",0.1, {stopColor:'#9fa8da'},'gradientFade')
        .to("#radial-gradient-5 stop",0.1, {stopColor:'#80deea'},'gradientFade')
        .to("#radial-gradient-3 stop",0.1, {stopColor:'#ef9a9a'},'gradientFade')
        .to("#radial-gradient-2 stop",0.1, {stopColor:'#69f0ae'},'gradientFade')
        .to("#radial-gradient-4 stop",0.1, {stopColor:'#ffcc80'},'gradientFade')
        .to(blueParticle,0.3,{y:'-=5px'},'gradientFade')
        .to(yellowParticle,0.3,{y:'+=5px'},'gradientFade')
        .to(purpleParticle,0.3,{x:'+=5px'},'gradientFade')
        .to(greenParticle,0.3,{x:'-=5px'},'gradientFade')
        .to(redParticle,0.3,{scale:0.1,transformOrigin:'50% 50%'},'gradientFade')
        .to(bond1,0.3,{autoAlpha:0,y:'-=5px'},'gradientFade')
        .to(bond2,0.3,{autoAlpha:0,y:'+=5px'},'gradientFade')
        .to(bond3,0.3,{autoAlpha:0,x:'-=5px'},'gradientFade')
        .to(bond4,0.3,{autoAlpha:0,x:'+=5px'},'gradientFade')

        .add('moleculeBreak')
        .to(blueParticle,0.3,{y:'+=15px'},'moleculeBreak')
        .to(yellowParticle,0.3,{y:'-=15px'},'moleculeBreak')
        .to(purpleParticle,0.3,{x:'-=15px'},'moleculeBreak')
        .to(greenParticle,0.3,{x:'+=15px'},'moleculeBreak')
        .add('replaceMoleculeAfterLaser')
        .staggerTo([purpleParticle,blueParticle,greenParticle,yellowParticle,redParticle],0.5,{transformOrigin:'50%,50%',scale:0.08,bezier:{values:purpleBezierPath01,type:'cubic'}, ease: Power0.easeNone},0.01)




        .to([purpleParticleNew,blueParticleNew,greenParticleNew,yellowParticleNew,redParticleNew],0,{autoAlpha:1},{},0.01,'-=0.1')



        .add('toSpeedUp')




        .add('accelerated','-=0.2')
        .to(purpleParticleNew,4,{autoAlpha:1,bezier:{values:purpleBezierPath02,type:'cubic'}, ease: CustomEase.create("custom", "M0,0,C0,0,0,0,0.001,0,0.001,0,0.001,0,0.001,0,0.002,0,0.002,0,0.003,0,0.234,0.014,0.5,1,0.5,1,0.5,1,1,1,1,1")},'accelerated')
        .to(blueParticleNew,4,{autoAlpha:1,bezier:{values:blueBezierPath02,type:'cubic'},ease: CustomEase.create("custom", "M0,0,C0,0,0,0,0.001,0,0.001,0,0.001,0,0.001,0,0.302,0.014,0.5,1,0.5,1,0.5,1,1,1,1,1") },'accelerated')
        .to(greenParticleNew,4,{autoAlpha:1,bezier:{values:greenBezierPath02,type:'cubic'}, ease: CustomEase.create("custom", "M0,0,C0,0,0,0,0.001,0,0.38,0.014,0.5,1,0.5,1,0.5,1,1,1,1,1")},'accelerated')
        .to(yellowParticleNew,4,{autoAlpha:1,bezier:{values:yellowBezierPath02,type:'cubic'}, ease: CustomEase.create("custom", "M0,0,C0.454,0.012,0.5,1,0.5,1,0.5,1,1,1,1,1") },'accelerated')
        .to(redParticleNew,4,{autoAlpha:1,bezier:{values:redBezierPath02,type:'cubic'},ease: CustomEase.create("custom", "M0,0,C0.516,0,0.5,1,0.5,1,0.5,1,1,1,1,1") },'accelerated')


        .add('showPlusMinus1','-=3.8')
        .to('#_ > path.cls-14',0.1,{fill:'#fff'},'showPlusMinus1')
        .to('#_ > path.cls-13',0.1,{fill:'#216dd9',strokeWidth:' 4px'},'showPlusMinus1')


        .to('#_- > path.cls-14',0.1,{fill:'#fff'},'showPlusMinus1')
        .to('#_- > path.cls-13',0.1,{fill:'#216dd9',strokeWidth:' 4px'},'showPlusMinus1')

        .add('showPlusMinus2','-=3.7')
        .to('#_ > path.cls-14',0.1,{fill:'#216dd9'},'showPlusMinus2')
        .to('#_ > path.cls-13',0.1,{fill:'#fff',strokeWidth:' 2px'},'showPlusMinus2')


        .to('#_- > path.cls-14',0.1,{fill:'#216dd9'},'showPlusMinus2')
        .to('#_- > path.cls-13',0.1,{fill:'#fff',strokeWidth:' 2px'},'showPlusMinus2')

        .add('showPlusMinus3','-=3.6')
        .to('#_ > path.cls-14',0.1,{fill:'#fff'},'showPlusMinus3')
        .to('#_ > path.cls-13',0.1,{fill:'#216dd9',strokeWidth:' 4px'},'showPlusMinus3')


        .to('#_- > path.cls-14',0.1,{fill:'#fff'},'showPlusMinus3')
        .to('#_- > path.cls-13',0.1,{fill:'#216dd9',strokeWidth:' 4px'},'showPlusMinus3')


        .add('showPlusMinus4','-=3.5')
        .to('#_ > path.cls-14',0.1,{fill:'#216dd9'},'showPlusMinus4')
        .to('#_ > path.cls-13',0.1,{fill:'#fff',strokeWidth:' 2px'},'showPlusMinus4')


        .to('#_- > path.cls-14',0.1,{fill:'#216dd9'},'showPlusMinus4')
        .to('#_- > path.cls-13',0.1,{fill:'#fff',strokeWidth:' 2px'},'showPlusMinus4')



        .add('boom','-=2.48')

        .staggerFromTo('#boomGroup path',0.1,{autoAlpha:0,scale:0,transformOrigin:'50% 50%'},{autoAlpha:1,scale:1,transformOrigin:'50% 50%',ease: Back.easeInOut},0.05,'boom+=0.4')
        .staggerFromTo('#finishedParticles path',0.1,{autoAlpha:0,scale:0,transformOrigin:'50% 50%'},{autoAlpha:1,scale:1,transformOrigin:'50% 50%',ease: Back.easeInOut},0.05,'boom+=0.35')
        .staggerTo('#boomGroup path',0.1,{autoAlpha:0,scale:0,ease: Back.easeInOut},0.05,'boom+=0.6')
    ;









    showStatisticsTl

        .add('showStatistics')
        .to('.statistics-background',0.5,{autoAlpha:1})
        .to('#statistics',0.1,{autoAlpha:1})

        .add('showPreloader')
        .fromTo('#purple-dot-two',0.2,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.2')
        .fromTo('#blue-dot-two',0.2,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.4')
        .fromTo('#green-dot-two',0.2,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.6')
        .fromTo('#yellow-dot-two',0.2,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=0.8')
        .fromTo('#red-dot-two',0.2,{autoAlpha:0},{autoAlpha:1,ease:Power0.easeNone},'showPreloader+=1')
        .staggerTo('#preloaderTwo ', 3,{svgOrigin:"486.2px 364.3px",rotation:720,autoAlpha:1},0.2,'showPreloader')
        .fromTo('.wrapper',1,{backgroundColor:'#f7fafc',boxShadow:'0px 0px 0px 0px rgba(0, 0, 0, 0)'},{backgroundColor:'#fff',boxShadow:'0px 0px 5px 0px rgba(196, 204, 219, 0.62)'},'showPreloader')

        .fromTo('#bg',1,{autoAlpha:0,xPercent:5},{xPercent:0,autoAlpha:1})

        .add('morphIntoBars','-=1.9')
        .to('#purple-dot-two',1,{autoAlpha:1,morphSVG:'#chart-bar-04-purple'},'morphIntoBars+=0.1')
        .to('#blue-dot-two',1,{autoAlpha:1,morphSVG:'#chart-bar-01-blue'},'morphIntoBars+=0.3')
        .to('#green-dot-two',1,{autoAlpha:1,morphSVG:'#chart-bar-05-green'},'morphIntoBars+=0.5')
        .to('#yellow-dot-two',1,{autoAlpha:1,morphSVG:'#chart-bar-02-yellow'},'morphIntoBars+=0.7')
        .to('#red-dot-two',1,{autoAlpha:1,morphSVG:'#chart-bar-03-red'},'morphIntoBars+=0.9')
        .add('showScales','-=1.6')
        .staggerFromTo('#scaleBottomLines path', 0.4,{autoAlpha:0,cycle:{yPercent:[-200,200]}},{yPercent:0,autoAlpha:1},0.05,'showScales')
        .staggerFromTo('#scaleLeftLines path', 0.4,{autoAlpha:0,cycle:{xPercent:[-200,200]}},{xPercent:0,autoAlpha:1},0.05,'showScales')
        .staggerFromTo('#resultsText text', 1,{autoAlpha:0},{autoAlpha:1},0.6,'showScales+=1.4')
        .set('#bars',{autoAlpha:1})
        .to('#topPhrases',0.4,{autoAlpha:1})

        .add('showPhrase1')
        .to('#green-dot-two',1,{autoAlpha:1,morphSVG:'#colour-03'},'showPhrase1')
        .fromTo(phrase1,0.5,{xPercent:10,autoAlpha:0},{xPercent:0,autoAlpha:1},'showPhrase1+=0.7')

        .add('showPhrase2')
        .to('#red-dot-two',1,{autoAlpha:1,morphSVG:'#colour-01'},'showPhrase2')
        .fromTo(phrase2,0.5,{xPercent:10,autoAlpha:0},{xPercent:0,autoAlpha:1},'showPhrase2+=0.7')

        .add('showPhrase3')
        .to('#yellow-dot-two',1,{autoAlpha:1,morphSVG:'#colour-02'},'showPhrase3')
        .fromTo(phrase3,0.5,{xPercent:10,autoAlpha:0},{xPercent:0,autoAlpha:1},'showPhrase3+=0.7')


        .add('showPhrase4')
        .to('#purple-dot-two',1,{autoAlpha:1,morphSVG:'#colour-04'},'showPhrase4')
        .fromTo(phrase4,0.5,{xPercent:10,autoAlpha:0},{xPercent:0,autoAlpha:1},'showPhrase4+=0.7')

        .add('showPhrase5')
        .to('#blue-dot-two',1,{autoAlpha:1,morphSVG:'#colour-05'},'showPhrase5')
        .fromTo(phrase5,0.5,{xPercent:10,autoAlpha:0},{xPercent:0,autoAlpha:1},'showPhrase5+=0.7')




        .fromTo('#otherPhrasesGroup',0.4,{yPercent:-10,autoAlpha:0},{yPercent:0,autoAlpha:1});



    mainTl

        .add('startAnimation')
        .add(preloaderTl)
        .add(preloaderMorphTl)
        //PRELOADER END
        //SHOW TEXTS
        .from([companyText,companyInfoTopLeft],0.5,{autoAlpha:0})
        //SPLIT TEXT
        .add('phase1')
        // .addPause("runExperimentPause")
        .to(['#textWrapperFirst','.companyText'],0.5,{autoAlpha:0})
        .staggerFrom([dynamicCompanyDataTopLeft,dynamicCompanyDataTopLeftWebsite],0.5,{autoAlpha:0},0.2)
        .add(moleculeMoveScaleDownAndEnterSpectrometer)
        //SHOW SPECTROMETER
        .to([topCutCircles,bottomCutCircles,spectrometerBody],1,{autoAlpha:1},'-=3')
        //MOLECULE DISENGAGES + ELECTROGUN SHOTS
        .add('laserShot')
        .add(moleculeBreakTl)
        //MOVE TO SPEED UP SECTION
        .add('finalTravel')
        .add(finalTravelTl.timeScale(0.5),'-=2')
        .add(magnetsTl,'-=6.2')
        .add('phase2')
        // .addPause("pauseBeforeStatistics")
        .to(['#textWrapperSecond','.companyText'],0.5,{autoAlpha:0})
        .to('.hide-spectrometer-scene',1,{autoAlpha:0})
        .set('.hide-spectrometer-scene',{display:'none'})
        .add(showStatisticsTl,'-=1')
        .add('phase3')
    ;




    // mainTl.timeScale(0.01);



GSDevTools.create({
    minimal:true
});





})(jQuery);