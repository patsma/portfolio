document.addEventListener("DOMContentLoaded", function(){


gsap.set('#asp-background', {attr: {preserveAspectRatio: "xMidYMin slice"}});

function setSvgAttrs() {
    const toBeFilteredA = document.querySelector('#bottom-a');
    const toBeFilteredS = document.querySelector('#bottom-s');
    const toBeFilteredP = document.querySelector('#bottom-p');

    function createFilter() {
        const svgns = "http://www.w3.org/2000/svg";
        let filter = document.createElementNS(svgns, "filter");
        let defs = document.createElementNS(svgns, "defs");
        let dropShadow = document.createElementNS(svgns, "feDropShadow");
        dropShadow.setAttribute("stdDeviation", '3 3');
        dropShadow.setAttribute("flood-color", '#00aaff');
        dropShadow.setAttribute("flood-opacity", '1');
        dropShadow.setAttribute("dx", '0');
        dropShadow.setAttribute("dy", '0');
        dropShadow.setAttribute("in", 'blur');
        filter.setAttribute("id", "blur-image-effect");

        document.querySelector('#asp-text').appendChild(defs);
        defs.appendChild(filter);
        filter.appendChild(dropShadow);
    }

    function applyFilter(elem, filterId) {
        elem.style.filter = "url(#" + filterId + ")";
        return elem;
    }

    createFilter();
    applyFilter(toBeFilteredA, 'blur-image-effect');
    applyFilter(toBeFilteredS, 'blur-image-effect');
    applyFilter(toBeFilteredP, 'blur-image-effect');
}


function startAnimation() {
    const business = new SplitText(".business-chars", {type: "words,chars"});
    const businessChars = business.chars;
    gsap.set(".business-chars", {perspective: 400});
    gsap.set('.wrapper', {visibility: 'visible'});

    const stars = gsap.timeline({
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        defaults: {transformOrigin: 'center center'}
    });
    const master = gsap.timeline();
    const blurAndScale = gsap.timeline({repeat: -1, repeatDelay: 4, repeatRefresh: true});
    const rotation = gsap.timeline({repeat: -1, repeatDelay: 4, repeatRefresh: true});

    stars
        .to('#stars > *', {
            stagger: {
                from: "random",
                amount: 4
            },
            physics2D: {velocity: 'random(1,500)', angle: 'random(1,4600)', gravity: 100, ease: 'slow(1.6,0.9,true)'}
        })
    ;


    rotation
        .to('#stars', {rotation: '+=random(-10,10)', transformOrigin: 'center center'});

    blurAndScale
        .fromTo('#gradient-thin', {x: -800}, {x: 300, duration: 2})
        .to('#blur-image-effect-2 > *', {attr: {stdDeviation: 'random(4,14) random(4,14)', yoyo: true}}, '<')
        .to('#asp-3 > *', {
            x: '-=2',
            stagger: 0.5,
            scale: 1.02,
            duration: 1,
            ease: 'slow(0.5,0.8,true)',
            transformOrigin: 'center bottom'
        }, '<')
        .to(['#bottom-a', '#bottom-s', '#bottom-p'], {
            x: '+=4',
            fill: '#fff',
            stagger: 0.5,
            scale: 1.3,
            duration: 1,
            ease: 'slow(0.5,1.8,true)',

            transformOrigin: 'center bottom'
        }, '<')
    ;

    master
        .from('#asp-2 > *', {stagger: 0.3, x: '-=2', autoAlpha: 0.3, duration: 1, ease: 'slow(0.5,0.8,false)'})
        .from('#bottom-letters > *', {
            x: '+=6',
            stagger: 0.1,
            autoAlpha: 0.2,
            duration: 0.6,
            transformOrigin: 'center top'
        }, '+=0.1')
        .from('.form-asp > div', {duration: 1, autoAlpha: 0, stagger: 0.6, y: '-=10', ease: 'sine.out'}, 0)
        .from(businessChars, {
            duration: 0.8,
            opacity: 0,
            rotationY: 180,
            transformOrigin: "center center",
            ease: "sine.out",
            stagger: 0.07
        }, "<1.5")
        .add(stars, 0)
    ;

    master.timeScale(1);

    return master;
}

setSvgAttrs();
startAnimation();

});
