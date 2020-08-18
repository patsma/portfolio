MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const container = document.getElementById("draggable");
const svgContainer = document.querySelector("#draggable > svg");
const startBtn = document.querySelector('.all-starts-here');
const dotHoverGroup = [...document.querySelectorAll('#dot-hover-group > g')];
const linesNarrowGroup = [...document.querySelectorAll('#lines-narrow > *')];
const linesNarrowDummyGroup = [...document.querySelectorAll('#lines-narrow > *')];
const datesDotsGroupHover = [...document.querySelectorAll('#dates-dots-group-hover > *')];


gsap.set(svgContainer, {
    attr: {
        viewBox: '0 200 1892  1169'
    }
});
gsap.set(['#dots-wide > *', '#lines-wide > *', '#graph-wide'], {visibility: 'hidden'});

let dotsNarrow = document.querySelectorAll('#dots-narrow > path');
let dotsWide = document.querySelectorAll('#dots-wide > path');
let linesNarrow = document.querySelectorAll('#lines-narrow > path');
let linesNarrowDummy = document.querySelectorAll('#lines-narrow-dummy > path');
let linesWide = document.querySelectorAll('#lines-wide > path');

let dotsNarrowArray = [];
let dotsWideArray = [];
let linesNarrowArray = [];
let linesNarrowDummyArray = [];
let linesWideArray = [];

let slides = document.querySelectorAll('.slide');
const clickableDots = [...document.querySelectorAll('#dates > g')];
const next = document.querySelectorAll('.next');
const back = document.querySelectorAll('.back');
const reverse = document.querySelector('.reverse');
const dur = 0.5;
const offsetValue = 100;
let oldSlide = 0;
let activeSlide = 0;
const offsets = Array.from(Array(slides.length).keys()).map(k => -1 * k * offsetValue);
let lastSlide = slides.length - 1;
let dateDots = 'date-dots';

let dotsSmallArray = [];
let dotsBigArray = [];
let datesArray = [];
let datesArrayPath = [];
let slidesArray = Array.from(slides);


for (let i = 0; i < 29; i++) {
    dotsWideArray.push(dotsWide[i]);
    dotsNarrowArray.push(dotsNarrow[i]);
    linesNarrowArray.push(linesNarrow[i]);
    linesNarrowDummyArray.push(linesNarrowDummy[i]);
    linesWideArray.push(linesWide[i]);

}


function graphNavigation() {
    gsap.set('.wrapper', {visibility: 'visible'});


    reverse.addEventListener('click', slideAnim);

    for (let i = 0; i < clickableDots.length; i++) {

        linesNarrowDummy[i].addEventListener('click', slideAnim);
        linesNarrowDummy[i].setAttribute('index', i);
        linesNarrowDummy[i].setAttribute('class', dateDots);
        clickableDots[i].addEventListener('click', slideAnim);
        clickableDots[i].setAttribute('index', i);
        clickableDots[i].setAttribute('class', dateDots);
        next[i].addEventListener('click', slideAnim);
        back[i].addEventListener('click', slideAnim);


    }


    for (let i = 1992; i < 2020; i++) {

        datesArray.push(`#_${i}`);
        datesArrayPath.push(`#_${i} > path`);
    }

    for (let i = 1; i < 29; i++) {
        dotsSmallArray.push(`#data-dot-small-${i}`);
        dotsBigArray.push(`#data-dot-big-${i}`);

    }

    for (let i = 0; i < dotsSmallArray.length; i++) {
        gsap.set(dotsSmallArray, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%"});
        gsap.set(dotsBigArray, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%"});

    }

    // set slides and dots to be invisible initially
    for (i = 1; i < slidesArray.length; i++) {
        gsap.set(slidesArray[i], {autoAlpha: 0});
    }


    for (let i = 0; i < dotHoverGroup.length; i++) {
        linesNarrowDummyArray[i].addEventListener('mouseenter', function () {
            let tlShowHover = gsap.timeline();

            tlShowHover
                .add('play-all')
                .to(datesDotsGroupHover[i], {
                    autoAlpha: 1,
                    scale: 1,
                    transformOrigin: 'center center'
                }, 'play-all')
                .to(dotHoverGroup[i], {autoAlpha: 1}, 'play-all')
                .to(linesNarrowGroup[i], {duration: 0.2, autoAlpha: 0.4, ease: 'linear'}, 0)
                .to(datesArray[i], {opacity: 0}, 'play-all');
            tlShowHover.timeScale(1)

        });
        linesNarrowDummyArray[i].addEventListener('mouseleave', function () {
            let tlHideHover = gsap.timeline();
            tlHideHover
                .add('play-all')
                .to(datesDotsGroupHover[i], {
                    autoAlpha: 0,
                    scale: 0,
                    transformOrigin: 'center center'
                }, 'play-all')

                .to(dotHoverGroup[i], {autoAlpha: 0}, 'play-all')
                .to(linesNarrowGroup[i], {duration: 0.2, autoAlpha: 0.2, ease: 'linear'}, 0)
                .to(datesArray[i], {opacity: 1}, 'play-all');
            tlHideHover.timeScale(1)

        });

    }

    gsap.set(back[0], {display: 'none'});


    function slideAnim(e) {
        oldSlide = activeSlide;


        if (this.id === "dragger") {
            let snapDragg = gsap.utils.snap(offsetValue, this.endX);
            console.log(snapDragg);
            for (let i = 0; i < offsets.length; i++) {
                if (snapDragg === i) {
                    activeSlide = i
                } else if (snapDragg === offsets[i + 1]) {
                    activeSlide = i + 1
                } else if (snapDragg >= 0) {
                    activeSlide = 0
                }
            }

        } else {
            if (gsap.isTweening(container)) {
                return;
            }

            if (this.className === "back") {
                if (activeSlide === 0) {
                    activeSlide++;
                } else {
                    activeSlide--;
                }
            }
            if (this.className === "next") {
                activeSlide++;
            }
            if (this.className === "reverse") {
                activeSlide = 0;
            }

            // handle drag clicks
            if (this.getAttribute("class") === dateDots) {
                if (activeSlide === lastSlide) {
                    gsap.set(next[lastSlide], {display: 'none'})
                }
                activeSlide = parseInt(this.getAttribute('index'));


            }

        }


        let hideOldSlide = gsap.timeline();
        let showActive = gsap.timeline();

        hideOldSlide

            .add('play-all')
            .to(datesArray[oldSlide], {fill: '#83929b', y: 0, transformOrigin: '50% 100%', scale: 1}, 'play-all')
            .to(datesArrayPath[oldSlide], {fill: '#83929b'}, 'play-all')
            .to(dotsSmallArray[oldSlide], {autoAlpha: 0, scale: 0}, 'play-all')
            .to(dotsBigArray[oldSlide], {autoAlpha: 0, scale: 0}, 'play-all')
            .to(slidesArray[oldSlide], {autoAlpha: 0}, 0);

        showActive
            .add('play-all')
            .to(datesArray[activeSlide], {fill: '#000', y: -40, transformOrigin: '50% 100%', scale: 1.5}, 'play-all')
            .to(datesArrayPath[activeSlide], {fill: '#000'}, 'play-all')
            .to(dotsBigArray[activeSlide], {autoAlpha: 0.3, scale: 1, ease: 'sine.out',}, 'play-all')
            .to(dotsSmallArray[activeSlide], {autoAlpha: 1, scale: 1, ease: 'sine.out',}, 'play-all')
            .to(slidesArray[activeSlide], {autoAlpha: 1}, 0);


        if (oldSlide === activeSlide) {
            return;
        }
        // if we're dragging we don't animate the container
        if (this.id != "dragger") {
            if (activeSlide === lastSlide) {
                gsap.set(next[lastSlide], {display: 'none'})

            }
            gsap.to(svgContainer, dur, {attr: {viewBox: `${offsets[activeSlide] * -1}  200 1892  1169`}});
        }
    }

    function graphAnimation() {


        const tlLines = gsap.timeline({paused: true});
        const tlDots = gsap.timeline();
        const tlLinesDotsMaster = gsap.timeline({paused: true});


        for (let i = 0; i < dotsNarrowArray.length; i++) {
            tlLines
                .to(linesNarrowArray[i], {
                    morphSVG: linesWideArray[i],
                    ease: 'linear'
                }, 0)

        }
        for (let i = 0; i < dotsNarrowArray.length; i++) {
            tlDots
                .to(dotsNarrowArray[i], {
                    morphSVG: dotsWideArray[i],
                    ease: 'linear'
                }, 0);

        }


        tlLinesDotsMaster

            .add('play-all')
            .add(tlDots, 'play-all')

            .to('#graph-narrow', {
                duration: 1.5,
                morphSVG: '#graph-wide',
            }, 'play-all')
        // .add(tlLines.timeScale(0.5), '-=2.4')
        ;


        const master = gsap.timeline();
        const initialTl = gsap.timeline();

        initialTl

            .from(['.tagline', '#title-first', '#title-subtitle'], {
                autoAlpha: 0, stagger: 0.3, y: '+=20'
            })

            .from('#bottom-graph', {duration: 1.5, drawSVG: 0})
            .from('#dots-narrow > *', {
                duration: 1,
                autoAlpha: 0,
                stagger: 0.09,
                y: '-=100',
                ease: 'slow(2.6,4.8)'
            }, '<')
            .fromTo('#lines-narrow > *', {
                duration: 1,
                drawSVG: 0,
                stagger: 0.09,
                y: '+=20',
                ease: 'sine.out'
            }, {duration: 1, drawSVG: '96.5%', stagger: 0.09, ease: 'sine.out'}, '<')
            .from('#graph-narrow', {duration: 1, autoAlpha: 0, scaleY: 0, transformOrigin: '50% 100%'})
            .add('show-initial-dates')
            .from('#initial-2019', {autoAlpha: 0}, 'show-initial-dates')
            .from('#date-background-1992-initial', {autoAlpha: 0}, '<')
            .from(datesArray[0], {autoAlpha: 0}, 'show-initial-dates')
            .from('#date-background-2019-initial', {autoAlpha: 0}, '<')
            .to(datesArrayPath[0], {fill: '#000', autoAlpha: 1}, '<')
            .add('show-dot-41b')
            .from('#date-dot-2019-initial', {autoAlpha: 0}, 'show-dot-41b')
            .from('#top-41-t', {autoAlpha: 0}, 'show-dot-41b')
            .from(['#pulsating-small-inner', '#pulsating-big-outer'], {
                duration: 2,
                autoAlpha: 0,
                ease: 'slow(0.2,0.5,true)',
                scale: 0,
                stagger: -0.3,
                transformOrigin: '50% 50%'
            }, 'show-dot-41b+=0.1')
            .from('.all-starts-here', {autoAlpha: 0, y: '+=20', duration: 1, ease: 'sine.out'})
        ;


        master
            .add(initialTl)
            .addPause()
            .to('.all-starts-here', {autoAlpha: 0, y: '-=20', display: 'none', duration: 1, ease: 'sine.out'})
            .add('hide-initial')
            .to('#date-dot-2019-initial', {autoAlpha: 0}, 'hide-initial')
            .to('#top-41-t', {autoAlpha: 0}, 'hide-initial')
            .to('#initial-2019', {autoAlpha: 0}, 'hide-initial')
            .to('#date-background-2019-initial', {autoAlpha: 0}, 'hide-initial')
            .add('scale-graph')

            .to('#lines-narrow > *', {
                duration: 1,
                drawSVG: 0,
                stagger: 0.01,
                y: '+=20',
                ease: 'sine.out'
            })
            .add(tlLinesDotsMaster.play())
            .add(tlLines.play(),'<')
            .add('lines-dates')
            .to('#lines-narrow > *', {
                duration: 1,
                drawSVG: '96.5%',
                stagger: 0.09,
                y: '+=20',
                ease: 'sine.out'
            })



            //gradient tweaking
            .to('#linear-gradient-29 stop:nth-child(2)', {
                attr: {offset: '0.09', 'stop-opacity': '0.4'}
            })


            .from('#dates > *:not(:first-child)', {
                stagger: 0.1,
                autoAlpha: 0,
                ease: 'sine.out'
            }, 'lines-dates')
            .from('#dates-background-rest > *', {
                scaleX: 0,
                stagger: 0.1,
                ease: 'sine.out',
                transformOrigin: '50% 50%'
            }, '<')
            .add('play-date', '-=2')
            .to(datesArray[0], {y: -40, transformOrigin: '50% 100%', scale: 1.5}, 'play-date')
            .to(datesArrayPath[0], {fill: '#000'}, 'play-date')
            .to(dotsBigArray[0], {autoAlpha: 0.3, scale: 1, ease: 'sine.out',}, 'play-date')
            .to(dotsSmallArray[0], {autoAlpha: 1, scale: 1, ease: 'sine.out',}, 'play-date')
            .from(['#pulsating-small-inner-2', '#pulsating-big-outer-2'], {
                duration: 2,
                autoAlpha: 0,
                ease: 'slow(0.2,0.5,true)',
                scale: 0,
                stagger: -0.3,
                transformOrigin: '50% 50%'
            }, 'play-date')
            .from('.date-title-0', {autoAlpha: 0}, '<')
            .from('.date-text-0', {autoAlpha: 0}, '<')
            .from('.next', {autoAlpha: 0}, '<')


        // master.timeScale(1).progress(0.5);
        startBtn.addEventListener('click', function () {
            gsap.set(['#lines-narrow-dummy > *', ' #dates > g '], {css: {pointerEvents: 'unset'}});
            master.play();
        });

        return master;
    }

    graphAnimation();
}

graphNavigation();

