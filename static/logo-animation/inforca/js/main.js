window.addEventListener('load', function () {


    // GSDevTools.create({minimal: true});
    const select = function (x) {
        return document.querySelector(x);
    };
    const selectAll = function (x) {
        return document.querySelectorAll(x);
    };
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    const animationWrapper = select('.animation__wrapper');


    const tail = select('#tail');
    const letter_I01 = select('#letter_I01');
    const letter_F01 = select('#letter_F01');
    const letter_C01 = select('#letter_C01');
    const letter_A01 = select('#letter_A01');
    const letter_R01 = select('#letter_R01');
    const letter_N01 = select('#letter_N01');
    const Tfin = select('#Tfin');
    const Lfin = select('#Lfin');
    const Rfin = select('#Rfin');
    const body = select('#body');
    const belly = select('#belly');
    const Leye = select('#Leye');
    const Reye = select('#Reye');
    const bellyTop = select('#bellyTop');
    const ReyeTop = select('#ReyeTop');
    const LeyeTop = select('#LeyeTop');
    const ReyeBottom = select('#ReyeBottom');
    const LeyeBottom = select('#LeyeBottom');
    const initialOrca = select('.initialOrca');

    const waveWrapper= select('.waveWrapper');
    const wave04= select('#wave04');
    const wave03= select('#wave03');
    const wave02= select('#wave02');
    const wave01= select('#wave01');



    TweenLite.set(tail,  {transformOrigin: '50% 0%',autoAlpha:1, scaleY: 0, ease: Power0.easeNone});

    function orcaJump() {




        const tl = new TimelineMax({repeat: -1});

        tl

            .add('moveDown')
            .to(belly,1,{scaleY:'-=0.3',y:'+=8',transformOrigin:'center center',ease: Power0.easeNone,repeat: 1,yoyo:true},'moveDown')
            .to(tail, 1, {transformOrigin: '50% 0%', scaleY:'-=1.5', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveDown')
            .to(body, 1, {transformOrigin: '50% 100%', scaleY:'-=0.1', ease: Power0.easeNone,repeat: 1,yoyo:true},'moveDown')
            .to(Tfin, 1, {transformOrigin: '50% 100%', y: '+=25', ease: Power0.easeNone,repeat: 1,yoyo:true},'moveDown')
            .to(Rfin, 1, {transformOrigin: '0% 0%',x:'-=4', y: '-=10',rotation:'-=30', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveDown')
            .to(Lfin, 1, {transformOrigin: '100% 0%',x:'+=4', y: '-=10',rotation:'+=30', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveDown')
            .to(Leye,1,{morphSVG:LeyeBottom,ease: Power0.easeNone,repeat: 1,yoyo:true},'moveDown')
            .to(Reye,1,{morphSVG:ReyeBottom,ease: Power0.easeNone,repeat: 1,yoyo:true},'moveDown')
            .to(initialOrca,1,{transformOrigin:'center center',y:'+=30',repeat:1,yoyo:true},'moveDown')
            .to(initialOrca,1,{transformOrigin:'center center',rotation:'+=1.3',repeat:1,yoyo:true},'moveDown')



            .add('moveUp')
            .to(belly,1,{scaleX:'-=0.1',y:'-=1',morphSVG:bellyTop,ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(Leye,1,{morphSVG:LeyeTop,ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(Reye,1,{morphSVG:ReyeTop,ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(body, 1, {transformOrigin: '50% 100%', scaleY:'+=0.05', ease: Power0.easeNone,repeat: 1,yoyo:true},'moveUp')
            .to(body, 1, {transformOrigin: '50% 50%', scaleX:'-=0.1', ease: Power0.easeNone,repeat: 1,yoyo:true},'moveUp')
            .to(tail, 1, {transformOrigin: '50% 0%', scaleY:'+=0.85',scaleX:'-=0.15',y:'-=1', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(Rfin, 1, {transformOrigin: '0% 0%',x:'-=3', y: '+=7',rotation:'+=25', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(Lfin, 1, {transformOrigin: '100% 0%',x:'+=3', y: '+=7',rotation:'-=25', ease: Power0.easeNone, repeat: 1,yoyo:true},'moveUp')
            .to(initialOrca,1,{transformOrigin:'center center',y:'-=30',repeat:1,yoyo:true},'moveUp')
            .to(initialOrca,1,{transformOrigin:'center center',rotation:'-=1.3',repeat:1,yoyo:true},'moveUp')



        ;

        return tl.timeScale(2);
    }

    function splashWaves() {




        const tl = new TimelineMax({repeat: -1,yoyo:true});

        tl

            .add('moveWaves')
            .to(wave01,1,{x:'+=35',transformOrigin:'center center',ease: Power0.easeNone},'moveWaves')
            .to(wave02,1,{x:'+=35',transformOrigin:'center center',ease: Power0.easeNone},'moveWaves')
            .to(wave03,1,{x:'-=35',transformOrigin:'center center',ease: Power0.easeNone},'moveWaves')
            .to(wave04,1,{x:'-=35',transformOrigin:'center center',ease: Power0.easeNone},'moveWaves')
            .fromTo(waveWrapper,1,{x:'-=15',y:35,transformOrigin:'center center',ease: Power0.easeNone},{y:-20},'moveWaves')
            .to(waveWrapper,1,{y:35,transformOrigin:'center center',ease: Power0.easeNone})



        ;

        return tl.timeScale(1);
    }

    orcaJump();
    splashWaves();


});

