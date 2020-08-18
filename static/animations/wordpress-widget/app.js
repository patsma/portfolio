fetch("arch-animation.svg")
    .then(response => response.text())
    .then(svg => document.querySelector('.wrapper').insertAdjacentHTML("afterbegin", svg))
    .then(setSvgAttrs)
    .then(startAnimation)
;
let visaArray = [];
let personalArray = [];
let requiredArray = [];
let paymentsArray = [];

const innerShapesArray = ['#personal-profile', '#visa-application', '#required-documents', '#payments-charges'];

for (let i = 1; i < 16; i++) {
    visaArray.push(`#visa-${i} > *`);
}
for (let i = 1; i < 16; i++) {
    personalArray.push(`#personal-${i} > *`);
}

for (let i = 1; i < 18; i++) {
    requiredArray.push(`#required-${i} > *`);
}
for (let i = 1; i < 17; i++) {
    paymentsArray.push(`#payments-${i} > *`);
}
gsap.utils.shuffle(visaArray);
gsap.utils.shuffle(personalArray);
gsap.utils.shuffle(requiredArray);
gsap.utils.shuffle(paymentsArray);
gsap.utils.shuffle(innerShapesArray);

function setSvgAttrs() {

    gsap.registerPlugin(DrawSVGPlugin);

}


function startAnimation() {
    gsap.set('.wrapper', {visibility: 'visible'});

    const lightColor = '#bde3f4';
    const darkColor = '#0194c7';


    GSDevTools.create({
        minimal: true
    });
    const master = gsap.timeline();
    master
        .from('#inner-shapes', {rotation: -360, transformOrigin: 'center center'})
        .from(innerShapesArray, {scale: 0, transformOrigin: 'center center', ease: 'slow(0.6,0.8)', stagger: 0.1}, '<')
        .from('#thick-2', {drawSVG: 0, duration: 0.75}, '<')
        .from('#thin-2', {drawSVG: 0, duration: 0.75}, '<0.1')

        .fromTo('#thick', {drawSVG: 0}, {drawSVG: '25%'})
        .fromTo('#thin', {drawSVG: 0}, {drawSVG: '25%'}, '<0.1')
        .from('#personal-profile-s ', {drawSVG: 0}, '<')
        .from('#p-25 > *', {scaleX: 0, x: '-=5', stagger: 0.01, transformOrigin: 'center center'}, '<0.5')
        .from('#personal-profile-b > path', {fill: lightColor}, '<')
        .from('#personal-profile-t > g > *', {fill: darkColor}, '<0.2')
        .from(personalArray, {drawSVG: 0, stagger: 0.02}, '<')

        .to('#thick', {drawSVG: '50%'})
        .to('#thin', {drawSVG: '50%'}, '<0.1')
        .from('#visa-application-s ', {drawSVG: 0}, '<')
        .from('#p-50 > *', {scaleX: 0, x: '-=5', stagger: 0.01, transformOrigin: 'center center'}, '<0.5')
        .from('#visa-application-b > path', {fill: lightColor}, '<')
        .from('#visa-application-t > g > *', {fill: darkColor}, '<')
        .from(visaArray, {drawSVG: 0, stagger: 0.02}, '<')

        .to('#thick', {drawSVG: '75%'})
        .to('#thin', {drawSVG: '75%'}, '<0.1')
        .from('#required-documents-s ', {drawSVG: 0}, '<')
        .from('#p-75 > *', {scaleX: 0, x: '-=5', stagger: 0.01, transformOrigin: 'center center'}, '<0.5')
        .from('#required-documents-b > path', {fill: lightColor}, '<')
        .from('#required-documents-t > g> *', {fill: darkColor}, '<')
        .from(requiredArray, {drawSVG: 0, stagger: 0.02}, '<')


        .to('#thick', {drawSVG: '100%'})
        .to('#thin', {drawSVG: '100%'}, '<0.1')
        .from('#payments-charges-s ', {drawSVG: 0}, '<')

        .from('#p-100 > *', {scaleX: 0, x: '-=5', stagger: 0.01, transformOrigin: 'center center'}, '<0.5')
        .from('#payments-charges-b > path', {fill: lightColor}, '<')
        .from('#payments-charges-t > g > *', {fill: darkColor}, '<')
        .from(paymentsArray, {drawSVG: 0, stagger: 0.02}, '<')


    ;
// color light #bde3f4
// color dark #0194c7
    master.timeScale(0.5);

    return master;
}



