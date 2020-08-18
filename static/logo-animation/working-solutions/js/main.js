GSDevTools.create({minimal: true});
const select = function (x) {
    return document.querySelector(x);
};
const selectAll = function (x) {
    return document.querySelectorAll(x);
};
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

console.log('works');
const defsMaskW01 = select('#defsMaskW01 > path');
const defsMaskR01 = select('#defsMaskR01 > path');
const defsMaskK01 = select('#defsMaskK01 > path');
const defsMaskI01 = select('#defsMaskI01 > path');
const defsMaskN01 = select('#defsMaskN01 > path');
const defsMaskG01 = select('#defsMaskG01 > path');
const defsMaskT01 = select('#defsMaskT01 > path');
const defsMaskM01 = select('#defsMaskM01 > path');
const defsMaskS01 = select('#defsMaskS01 > path');
const defsMaskO01 = select('#defsMaskO01 > path');
const defsMaskL01 = select('#defsMaskL01 > path');
const defsMaskU01 = select('#defsMaskU01 > path');
const defsMaskT02 = select('#defsMaskT02 > path');
const defsMaskI02 = select('#defsMaskI02 > path');
const defsMaskO02 = select('#defsMaskO02 > path');
const defsMaskN02 = select('#defsMaskN02 > path');
const defsMaskS02 = select('#defsMaskS02 > path');

const morph = select('#morph');
const extraMessage = select('#extraMessage');

const shapeToBeMorphed = select('#shapeToBeMorphed');
const messageMorph = select('#messageMorph');

TweenLite.set(shapeToBeMorphed, {autoAlpha: 0});
TweenLite.set(morph, {xPercent: '+=100', yPercent: '+=50'});


function tl01() {
    const tl = new TimelineMax({repeat: -1, yoyo: true});

    tl
        .to('body', 0.5, {autoAlpha: 1})
        .from([messageMorph, extraMessage], 1, {scale: 0, transformOrigin: 'center center'})

        .to(messageMorph, 1, {morphSVG: shapeToBeMorphed})
        .to(morph, 1, {xPercent: 0, yPercent: 0})
        .add('all')
        .from(defsMaskW01, 1, {drawSVG: 0}, 'all+=0.2')
        .from(defsMaskR01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskK01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskI01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskN01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskG01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskT01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskM01, 1, {drawSVG: 0}, 'all')

        .from(defsMaskS01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskO01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskL01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskU01, 1, {drawSVG: 0}, 'all')
        .from(defsMaskT02, 1, {drawSVG: 0}, 'all')
        .from(defsMaskI02, 1, {drawSVG: 0}, 'all')
        .from(defsMaskO02, 1, {drawSVG: 0}, 'all')
        .from(defsMaskN02, 1, {drawSVG: 0}, 'all')
        .from(defsMaskS02, 1, {drawSVG: 0}, 'all')


    ;
    return tl.timeScale(1.3);

}

tl01();
