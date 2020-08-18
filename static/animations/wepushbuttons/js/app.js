document.addEventListener('DOMContentLoaded', function () {

    async function triggerAll(){
        await fetch("./svg/clouds.svg")
            .then(response => response.text())
            .then(svg => document.querySelector('.clouds').insertAdjacentHTML("afterbegin", svg))
            .then(setSvgAttrsClouds)
        ;

        await fetch("./svg/ground.svg")
            .then(response => response.text())
            .then(svg => document.querySelector('.ground').insertAdjacentHTML("afterbegin", svg))
            .then(setSvgAttrsGround)
        ;

        await fetch("./svg/animation-scenes.svg")
            .then(response => response.text())
            .then(svg => document.querySelector('.scene').insertAdjacentHTML("afterbegin", svg))
            .then(setSvgAttrsScenes)

        ;
         startAnimation();
    }
   triggerAll();

    function setSvgAttrsClouds() {
        const svg = document.querySelector('.clouds>svg');
        TweenMax.set(svg, {attr: {viewBox: "0 0 1920  1080"}});
        TweenMax.set(svg, {attr: {preserveAspectRatio: "xMidYMin slice"}});

    }

    function setSvgAttrsGround() {
        const svg = document.querySelector('.ground>svg');
        TweenMax.set(svg, {attr: {viewBox: "2113 100 925 520.313 "}});
        TweenMax.set(svg, {attr: {preserveAspectRatio: "xMidYMid meet"}});

    }

    function setSvgAttrsScenes() {
        const svg = document.getElementsByTagName('svg')[0];
        TweenMax.set(svg, {attr: {viewBox: "0 0 964 542"}});
        TweenMax.set(svg, {attr: {preserveAspectRatio: "xMidYMid slice"}});
    }

    function startAnimation() {
        MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
        GSDevTools.create({
            timeline: 'master',
            minimal: true
        });
        let select = s => document.querySelector(s),
            selectAll = s => document.querySelectorAll(s);


        const animationScenes = select('.scene>*');
        const clouds = select('.clouds>*');
        const ground = select('.ground>*');
        const tree = select('#tree');
        const sun = select('#sun');
        const bg01 = select('#background');
        const bg02 = select('#background02');
        const bgC01 = select('#bgC01');
        const bgC02 = select('#bgC02');
        const bgC03 = select('#bgC03');
        const bgC04 = select('#bgC04');
        const bgC05 = select('#bgC05');
        const logo = select('#logo');
        const logoBorder = select('#logo-border');
        const logoShadow = select('#logo-shadow');
        const circlesBigBlow = select('#circles-big-blow');

        const cloudsScene02 = select('#clouds-scene02--clouds');
        const miniTree01 = select('#miniTree01');
        const miniTree02 = select('#miniTree02');
        const miniTree03 = select('#miniTree03');
        const miniTree04 = select('#miniTree04');
        const c01 = select('#c01');
        const c02 = select('#c02');
        const c03 = select('#c03');
        const c04 = select('#c04');
        const cone = select('#cone');
        const shineLogo = selectAll('#shine-tree> *');
        const shineFull = selectAll('#shine-full > *');
        const miniTreesLeft = selectAll('#miniTreesLeft');
        const miniTreesRight = selectAll('#miniTreesRight > *');
        const starsUp = selectAll('#stars-up > *');
        const starsDown = selectAll('#stars-down > *');
        const txtBeExceptional = selectAll('#txt-be-exceptional > *');
        const txtWhatWeDo = selectAll('#txt-what-we-do > *');
        const txtWantToGrow = selectAll('#want-to > *');
        const txtYourBusiness = selectAll('#your-business > *');
        const txtLetsTalk = selectAll('#lets-talk > *');
        const txtWeCanHelp = selectAll('#txt-we-can-help > *');
        const logoFingerprint = selectAll('#logo-fingerprint > * ');
        const circlesBlow = selectAll('#circles-blow > * ');


        //Gradient



        //region Tree variables
        const colorLightBlue = '#00AAC7';
        const colorDarkBlue = '#168E9B';
        const colorMain = '#8D545A';

        const data = document.querySelectorAll('#data > *');
        const smallest = document.querySelectorAll('#smallest > *');
        const medium = document.querySelectorAll('#medium > *');
        const big = document.querySelectorAll('#big > *');
        const bigest = document.querySelectorAll('#bigest > *');
        //endregion
        //region Tree Masks and branches

        const t001 = document.querySelector('#t001');
        const t002 = document.querySelector('#t002');
        const t003 = document.querySelector('#t003');
        const t004 = document.querySelector('#t004');
        const t005 = document.querySelector('#t005');
        const t006 = document.querySelector('#t006');
        const t011 = document.querySelector('#t011');
        const t012 = document.querySelector('#t012');
        const t013 = document.querySelector('#t013');
        const t014 = document.querySelector('#t014');
        const t015 = document.querySelector('#t015');
        const t016 = document.querySelector('#t016');
        const t017 = document.querySelector('#t017');
        const t018 = document.querySelector('#t018');
        const t019 = document.querySelector('#t019');
        const t020 = document.querySelector('#t020');
        const t021 = document.querySelector('#t021');
        const t022 = document.querySelector('#t022');
        const t023 = document.querySelector('#t023');
        const t024 = document.querySelector('#t024');
        const t025 = document.querySelector('#t025');
        const t026 = document.querySelector('#t026');
        const t027 = document.querySelector('#t027');
        const t028 = document.querySelector('#t028');
        const t029 = document.querySelector('#t029');
        const t030 = document.querySelector('#t030');
        const t031 = document.querySelector('#t031');
        const t032 = document.querySelector('#t032');
        const t033 = document.querySelector('#t033');
        const t034 = document.querySelector('#t034');
        const t035 = document.querySelector('#t035');
        const t036 = document.querySelector('#t036');
        const t037 = document.querySelector('#t037');
        const t038 = document.querySelector('#t038');
        const t039 = document.querySelector('#t039');
        const t040 = document.querySelector('#t040');
        const t041 = document.querySelector('#t041');
        const t042 = document.querySelector('#t042');
        const t043 = document.querySelector('#t043');
        const t044 = document.querySelector('#t044');
        const t045 = document.querySelector('#t045');
        const t046 = document.querySelector('#t046');
        const t047 = document.querySelector('#t047');
        const t048 = document.querySelector('#t048');
        const t049 = document.querySelector('#t049');
        const tm001 = document.querySelector('#tm001');
        const tm002 = document.querySelector('#tm002');
        const tm003 = document.querySelector('#tm003');
        const tm004 = document.querySelector('#tm004');
        const tm005 = document.querySelector('#tm005');
        const tm006 = document.querySelector('#tm006');
        const trunkMask01 = document.querySelector('#tm007');
        const trunkMask02 = document.querySelector('#tm008');
        const trunkMask03 = document.querySelector('#tm009');
        const trunkMask04 = document.querySelector('#tm010');
        const tm011 = document.querySelector('#tm011');
        const tm012 = document.querySelector('#tm012');
        const tm013 = document.querySelector('#tm013');
        const tm014 = document.querySelector('#tm014');
        const tm015 = document.querySelector('#tm015');
        const tm016 = document.querySelector('#tm016');
        const tm017 = document.querySelector('#tm017');
        const tm018 = document.querySelector('#tm018');
        const tm019 = document.querySelector('#tm019');
        const tm020 = document.querySelector('#tm020');
        const tm021 = document.querySelector('#tm021');
        const tm022 = document.querySelector('#tm022');
        const tm023 = document.querySelector('#tm023');
        const tm024 = document.querySelector('#tm024');
        const tm025 = document.querySelector('#tm025');
        const tm026 = document.querySelector('#tm026');
        const tm027 = document.querySelector('#tm027');
        const tm028 = document.querySelector('#tm028');
        const tm029 = document.querySelector('#tm029');
        const tm030 = document.querySelector('#tm030');
        const tm031 = document.querySelector('#tm031');
        const tm032 = document.querySelector('#tm032');
        const tm033 = document.querySelector('#tm033');
        const tm034 = document.querySelector('#tm034');
        const tm035 = document.querySelector('#tm035');
        const tm036 = document.querySelector('#tm036');
        const tm037 = document.querySelector('#tm037');
        const tm038 = document.querySelector('#tm038');
        const tm039 = document.querySelector('#tm039');
        const tm040 = document.querySelector('#tm040');
        const tm041 = document.querySelector('#tm041');
        const tm042 = document.querySelector('#tm042');
        const tm043 = document.querySelector('#tm043');
        const tm044 = document.querySelector('#tm044');
        const tm045 = document.querySelector('#tm045');
        const tm046 = document.querySelector('#tm046');
        const tm047 = document.querySelector('#tm047');
        const tm048 = document.querySelector('#tm048');
        const tm049 = document.querySelector('#tm049');
        const trunk01 = document.querySelector('#t007');
        const trunk02 = document.querySelector('#t008');
        const trunk03 = document.querySelector('#t009');
        const trunk04 = document.querySelector('#t010 > path:nth-child(2)');
        const initialTreeBranchesMasks = [tm001, tm002, tm003, tm004, tm005, tm006, tm011, tm012, tm013, tm014, tm015, tm016, tm017, tm018, tm019];
        const initialTreeBranches = [t001, t002, t003, t004, t005, t006, t011, t012, t013, t014, t015, t016, t017, t018, t019];
        const allTrunks = [trunk01, trunk02, trunk03, trunk04];
        TweenLite.set('.wrapper-homepage-animation-ps',{autoAlpha:1});

        TweenLite.set([trunkMask01,trunkMask02,trunkMask03,trunkMask04],{drawSVG:0});
        TweenLite.set([trunk01,trunk02,trunk03,trunk04],{fill:colorDarkBlue});
        TweenLite.set([smallest,medium,big,bigest,data],{transformOrigin:'center center'});

        //endregion
        //region Tree timeline
        const treeTl = new TimelineMax({paused:true});
        treeTl


            .staggerFrom([tm001, tm002, tm003, tm004, tm005, tm006],1,{drawSVG:0},0.4)
            .add('pause-01')

            .to(trunkMask01, 1, {drawSVG:"0% 55%"})
            .staggerFrom([tm013, tm014],1,{drawSVG:0},0.4)
            .to(trunkMask02, 1, {drawSVG:"0% 55%"})
            .from(tm011, 1, {drawSVG:0})
            .to(trunkMask03, 1, {drawSVG:"0% 70%"})
            .to(trunkMask04, 1, {drawSVG:"0% 80%"})
            .staggerFrom([tm012, tm015, tm016, tm017, tm018, tm019],1,{drawSVG:0},0.4)

            .add('finished-initial-branches')

            .staggerTo(allTrunks, 1, {fill:colorMain},0.4,'finished-initial-branches')
            .to(trunkMask01, 1, {drawSVG:"0% 100%"},'finished-initial-branches')
            .staggerFrom([tm020, tm021, tm022, tm023, tm024],1,{drawSVG:0},0.1,'finished-initial-branches')
            .to(trunkMask03, 1, {drawSVG:"0% 100%"},'finished-initial-branches+=0.3')
            .staggerFrom([tm026,tm027],1,{drawSVG:0},0.1,'finished-initial-branches+=1.5')

            .add('after-initial-branches')

            .to(trunkMask04, 1, {drawSVG:"0% 100%"},'after-initial-branches')
            .staggerFrom([tm025,tm028,tm029],1,{drawSVG:0},0.1,'after-initial-branches+=1.5')
            .to(trunkMask02, 1, {drawSVG:"0% 100%"},'after-initial-branches-=0.5')
            .staggerFrom([tm030,tm031,tm032,tm033,tm034,tm035,tm036,tm037,tm038,tm039,tm040,tm041,tm042,tm043,tm044,tm045,tm046,tm047,tm048,tm049],2,{drawSVG:0},0.4,'after-initial-branches')


            .staggerTo(initialTreeBranches,0.6, {autoAlpha: 0,cycle:{x:[-4,-3,-2,2,3,4],y:[10,4,7,2,8],rotation:[-4,-3,-2,2,3,4]}},-0.2,'after-initial-branches')
            .staggerFrom(smallest,0.4, {autoAlpha: 0,scale:0},0.02,'-=2.5')
            .staggerFrom(medium,0.4, {autoAlpha: 0,scale:0},0.02,'-=2.5')
            .staggerFrom(big,0.4, {autoAlpha: 0,scale:0},0.02,'-=1.5')
            .staggerFrom(bigest,1, {autoAlpha: 0,scale:0},0.1,'-=0.5')
            .add('pause')
            .staggerFrom(data,1, {autoAlpha: 0,scale:2.2,rotation:-1,y:'-=1',transformOrigin:'50% 80%'},-0.1)
            .add('play')

        ;
        //endregion
        //region Start Tl
        const startTl = new TimelineMax();

        startTl
            .add('start-animation')
            .from(logoShadow,3.5,{autoAlpha:0},'start-animation')
            .from(logoBorder, 3.5, {drawSVG: '25% 25%',x:'+=3',ease: Sine.easeOut},'start-animation')

            .staggerFrom(logoFingerprint, 2, {autoAlpha: 0,x:'+=3', ease: Sine.easeOut},-0.3, 'start-animation')
            .staggerFrom([bgC01, bgC02, bgC03], 3, {autoAlpha: 0, y: '+=40', ease: SlowMo.easeOut}, 0.8, 'start-animation')
            //move to clouds
            .add('move-to-clouds')
            .to(animationScenes, 8, {delay:1, attr: {viewBox: "964 0 964 542",ease: SlowMo.easeOut}},'move-to-clouds')
            .to(logo,2,{delay:1,autoAlpha:0,x:'-=10',ease: SlowMo.easeOut},'move-to-clouds')
            //show clouds
            .from(c01,4,{autoAlpha: 0,x:'-=50'},'move-to-clouds+=2')
            .staggerFrom(txtWantToGrow,4,{autoAlpha: 0,x:'+=5'},0.1,'move-to-clouds+=3')
            //show full text
            .add('show-clouds-txt','-=2')
            .staggerFrom([c02,c03,c04], 3, {autoAlpha: 0,x:'+=50'},0.8,'show-clouds-txt')
            .staggerFrom(txtYourBusiness,2,{autoAlpha: 0,x:'+=5'},0.1,'show-clouds-txt-=0.2')
            .to([txtYourBusiness,txtWantToGrow],1,{delay:1,autoAlpha:0,x:'+=5'})
            .add('help-shine')
            .staggerFrom(txtWeCanHelp,2,{autoAlpha: 0,x:'+=5'},0.1,'help-shine')
            .staggerFrom(starsUp,1,{autoAlpha: 0,y:'+=1',repeat:3,yoyo:true},0.2,'help-shine+=0.5')
            .to(txtWeCanHelp,1,{autoAlpha: 0,x:'-=5'},'-=4')
            .add('show-ground','-=3')
            .to(animationScenes, 3, {attr: {viewBox: "684.453   56.886    1240.924    698.02    "}},'show-ground')
            .staggerTo([bgC01, bgC02, bgC03], 3, {y: '-=120', ease: SlowMo.easeOut}, 0.1, 'show-ground')
            .to(ground, 2, {attr: {viewBox: "2312.912    567.309    759.303   427.108    "}},'show-ground')
            .from(cone,1,{scaleX:0,transformOrigin:'50% 90%',rotation:20,autoAlpha:0})
            .staggerFrom(starsDown,0.5,{autoAlpha: 0,y:'+=1',repeat:3,yoyo:true},0.2,'+=0.5')
            .to(cone,1,{scaleX:0,transformOrigin:'50% 90%',rotation:20,autoAlpha:0})
            .add('hide-clouds')
            .to(cloudsScene02,6,{x:'-=100'},'hide-clouds')
            .staggerTo([c01,c02,c03,c04], 6, {autoAlpha: 0,x:'-=100'},0.3,'hide-clouds')
            .add(treeTl.tweenFromTo(treeTl.time(), "pause-01"))

;
        //endregion

        const master = new TimelineMax();

        master


            .add(startTl)
            .add('switch-to-day','-=2')
            .staggerTo([bgC01,bgC02,bgC03],3,{autoAlpha:0},-1,'switch-to-day')
            .staggerFromTo([bgC04,bgC05],3,{autoAlpha:0},{autoAlpha:1,y:'+=50'},1,'switch-to-day+=1')
            .from(bg02,3,{autoAlpha:0},'switch-to-day')
            .from(sun,3,{autoAlpha:0,scale:0,scaleY:0.1,transformOrigin:'50% 90%',y:'+=25',ease:Elastic.easeInOut},'switch-to-day+=2')

            .add('grow-sun')
            .add(treeTl.tweenFromTo("pause-01", "pause"),'grow-sun')

            .to(sun,25,{x:'+=100',y:'-=50',ease:Linear.easeNone},'grow-sun')
            .to(ground, 25, {attr: {viewBox: "1320 0 1724.36  974.453 "},ease:Linear.easeNone},'grow-sun')
            .to(animationScenes, 25, {attr: {viewBox: "354.453   10.886    1240.924    698.02    "},ease:Linear.easeNone},'grow-sun')
            .to(animationScenes, 5, {attr: {viewBox: "829.885   104.87     749.108     421.373     "},ease:Linear.easeNone})
            .to(ground, 5, {attr: {viewBox: "1320 -100 1732.36  974.453 "},ease:Linear.easeNone},'-=2')
            .add('switch-clouds','-=3')
            .to([bgC04,sun],2,{autoAlpha:0},'switch-clouds')
            .to(bgC05,4,{y:'-=100',opacity:0.9,scale:1.2,transformOrigin:'50% 50%'},'switch-clouds')
            .staggerFrom(txtWhatWeDo,2,{autoAlpha: 0,x:'+=5'},0.1,'-=1.5')
            .add(treeTl.tweenFromTo("pause", "play"),'-=1')

            .add('show-mini-trees')
            .to(animationScenes, 5, {attr: {viewBox: "1537.611      245.937        800.129       450.073      "},ease:Linear.easeNone},'show-mini-trees')
            // .to(bgC05,4,{y:'-=30',opacity:0.4,scale:1.2,transformOrigin:'50% 50%'},'show-mini-trees')
            .to(tree,1,{autoAlpha:0},'show-mini-trees')
            .to('#miniTreesLeft',1,{autoAlpha:0},'show-mini-trees')
            .to(ground, 14, {attr: {viewBox: "1320 0 1724.36  974.453 "},ease:Linear.easeNone},'show-mini-trees')

            // .staggerFrom([miniTree01,miniTree02,miniTree03,miniTree04],4,{autoAlpha: 0,y:'-=15'},1,'show-mini-trees')


            .add('show-final-scene','-=8')
            .to(animationScenes, 10, {attr: {viewBox: "2451.492       181.623         1030.957        579.913       "},ease:Linear.easeNone},'show-final-scene')
            .add('show-all-trees-=3')
            .staggerTo(circlesBlow,3,{transformOrigin:'center center',cycle:{scale:[1.1,0.9,1.3,0.7]},repeat:2,yoyo:true},0.01,'show-all-trees')
            .staggerTo(circlesBlow,1,{ease: SlowMo.ease.config(0.1, 0.9, false),scale:2,transformOrigin:'center center',cycle:{y:['-=100','-=250','+=100','-=300'],x:['+=150','-=250','+=100','+=50','-=500','-=400','-=800']}},0.001,'-=1')
            .from(circlesBigBlow,1,{ease: SlowMo.ease.config(0.1, 0.9, false),scale: 0,y:'+=5'},'-=1')
            .staggerFrom(txtBeExceptional,2,{autoAlpha: 0,x:'+=5'},0.1,'-=0.5')
            .staggerFrom(txtLetsTalk,2,{autoAlpha: 0,x:'+=5'},0.1,'-=0.5')

            // .staggerFrom(shineLogo,2,{autoAlpha: 0,x:'+=5',repeat:4,yoyo:true},0.1,'show-all-trees')
            // .staggerFrom(shineFull,8,{autoAlpha: 0,y:'-=15',repeat:5,yoyo:true},0.1,'-=30')









            .to(clouds, 135, {attr: {viewBox: "1864 0 1920 1080"},ease:Linear.easeNone}, 0)

        ;
        master.timeScale(2);

    }


}, false);


