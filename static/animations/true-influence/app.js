jQuery(document).ready(function () {

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
TweenLite.set('html', {autoAlpha: 1});
// GSDevTools.create({minimal: true});

var select = function (s) {
        return document.querySelector(s);
    },
    selectAll = function (s) {
        return document.querySelectorAll(s);
    }
;


nonanimated__part__background = select('#nonanimated__part__background');
insightbase = select('#insightbase');
account__acceleration__platform = select('#account__acceleration__platform');

marketing__effectiveness = select('#marketing__effectiveness');
sales__enablement = select('#sales__enablement');
demand__generation = select('#demand__generation');
marketing__effectiveness__shape = select('#marketing__effectiveness__shape');
sales__enablement__shape = select('#sales__enablement__shape');
demand__generation__shape = select('#demand__generation__shape');

create__relevent__content__based__on__iintent__signal__activity__group = selectAll('#create__relevent__content__based__on__iintent__signal__activity__group > *');
prioritize__and__expand__my__account__base__group = selectAll('#prioritize__and__expand__my__account__base__group > *');

fuel__my__abm__strategies__group = select('#fuel__my__abm__strategies__group');
shorten__my__sales__cycles__group = select('#shorten__my__sales__cycles__group');

get__higher__response__rates__for__my__email__initiatives__group = select('#get__higher__response__rates__for__my__email__initiatives__group');
give__me__higher__conversion__rates__group = select('#give__me__higher__conversion__rates__group');

lead__generation__services__group = select('#lead__generation__services__group');

center__left__shape = select('#center__left__shape');
center__lright__shape = select('#center__lright__shape');
scroll__down = select('#scroll__down');



    jQuery('#create__relevent__content__based__on__iintent__signal__activity__background').hover(function () {

        var featuredImageContentShow = jQuery(this).find('#create__relevent__content__based__on__iintent__signal__activity__group');
        var featuredImageContentShowItems = jQuery(this).find('#create__relevent__content__based__on__iintent__signal__activity__group');

        var tl = new TimelineMax();

        tl
            .add('start')
            .to(featuredImageContentShow, .5, {autoAlpha: 1}, 0.1,'start')
            .from(featuredImageContentShowItems, .7, {yPercent: 10, autoAlpha: 0, ease: Linear.easeNone}, 0.2,'start')
        ;

    }, function () {

        var featuredImageContentShow = jQuery(this).find('.create__relevent__content__based__on__iintent__signal__activity__group');
        var featuredImageContentShowItems = jQuery(this).find('.create__relevent__content__based__on__iintent__signal__activity__group');

        var tl = new TimelineMax();

        tl
            .add('start')
            .to(featuredImageContentShow, .5, {autoAlpha: 0}, 0.1,'start')
            .to(featuredImageContentShowItems, .7, {yPercent: 0, autoAlpha: 1, ease: Linear.easeNone}, 0.2,'start')
        ;
    })




// init controller
var controller = new ScrollMagic.Controller();


// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: '.animation__scene',
    triggerHook: 0.3

})

    .setTween(tl01())
    .addTo(controller);

// build tween
function tl01() {
    var tl = new TimelineMax();

    tl
        .staggerFrom([nonanimated__part__background, insightbase, account__acceleration__platform], 0.5, {autoAlpha: 0,yPercent:-10}, 0.5)

        .add('show-row-one','-=1')
        .from([marketing__effectiveness, sales__enablement], 0.5, {autoAlpha: 0,yPercent:-10},'show-row-one')
        .from(demand__generation, 0.5, {autoAlpha: 0,yPercent:-10},'show-row-one+=0.3')


        .add('show-row-one-shape','-=0.3')
        .from([marketing__effectiveness__shape, sales__enablement__shape], 0.5, {autoAlpha: 0,yPercent:-10},'show-row-one-shape')
        .from(demand__generation__shape, 0.5, {autoAlpha: 0,yPercent:-10},'show-row-one-shape+=0.3')

        .add('show-row-two')
        .staggerFrom([create__relevent__content__based__on__iintent__signal__activity__group,prioritize__and__expand__my__account__base__group], 0.5, {autoAlpha: 0,yPercent:-10},0.01,'show-row-two')

        .staggerFrom([fuel__my__abm__strategies__group,shorten__my__sales__cycles__group ], 0.5, {autoAlpha: 0,yPercent:-10},0.01)
        .staggerFrom([get__higher__response__rates__for__my__email__initiatives__group,give__me__higher__conversion__rates__group ], 0.5, {autoAlpha: 0,yPercent:-10},0.01)

        .add('show-center-shapes')
        .from(center__left__shape,0.5,{autoAlpha:0,xPercent:-5},'show-center-shapes')
        .from(center__lright__shape,0.5,{autoAlpha:0,xPercent:5},'show-center-shapes')
        .from(lead__generation__services__group,0.5,{autoAlpha:0,yPercent:-5},'show-center-shapes')
        .from(scroll__down,0.5,{yPercent:-50,autoAlpha:0})
    ;


    return tl;
}









});





