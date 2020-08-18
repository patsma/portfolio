
function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}

r(function () {
    // GSDevTools.create({minimal: true});
    //Create a wiggle with 6 oscillations (default type:"easeOut")
    CustomWiggle.create("myWiggle", {wiggles: 12});
    CustomBounce.create("myBounce", {strength: 5.6, squash: 12, squashID: "myBounce-squash"});

    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

    var select = function (s) {
            return document.querySelector(s);
        },
        selectAll = function (s) {
            return document.querySelectorAll(s);
        }
    ;

    cloud01Blue01 = selectAll('#cloud01__blue01 > path');
    cloud01Blue02 = selectAll('#cloud01__blue02 > path');
    cloud01Blue03 = selectAll('#cloud01__blue03 > path');
    cloud01Blue04 = selectAll('#cloud01__blue04 > path');

    cloud02Blue01 = selectAll('#cloud02__blue01 > path');
    cloud02Blue02 = selectAll('#cloud02__blue02 > path');
    cloud02Blue03 = selectAll('#cloud02__blue03 > path');
    cloud02Blue04 = selectAll('#cloud02__blue04 > path');
    cloud02Blue05 = selectAll('#cloud02__blue05 > path');

    cloud03Blue01 = selectAll('#cloud03__blue01 > path');
    cloud03Blue02 = selectAll('#cloud03__blue02 > path');
    cloud03Blue03 = selectAll('#cloud03__blue03 > path');
    cloud03Blue04 = selectAll('#cloud03__blue04 > path');

    cloud04Blue02 = selectAll('#cloud04__blue02 > path');
    cloud04Blue01 = selectAll('#cloud04__blue01 > path');
    cloud04Blue03 = selectAll('#cloud04__blue03 > path');
    cloud04Blue04 = selectAll('#cloud04__blue04 > path');
    cloud04Blue05 = selectAll('#cloud04__blue05 > path');

    cloud04Outlines = selectAll('#cloud04__nodeOverlay__outlines > path');
    cloud04Joints = selectAll('#cloud04__nodeOverlay__circleJoints > path');
    cloud04NodeStorm = selectAll('#cloud04__nodeOverlay__nodeStorm > path');

    var colors = ['rgb(225, 244, 249)', 'rgb(214, 238, 244)', 'rgb(174, 221, 233)', 'rgb(139, 205, 223)', 'rgb(122, 185, 210)'];

    function tl01() {

        var tl = new TimelineMax({yoyo: true, repeat: -1, ease: "myBounce"});

        tl
            .add('changeColors')
            .staggerTo(cloud01Blue01, 1, {fill: colors[3]}, .1, 'changeColors')
            .staggerTo(cloud01Blue02, 1, {fill: colors[2]}, .1, 'changeColors')
            .staggerTo(cloud01Blue03, 1, {fill: colors[1]}, .1, 'changeColors')
            .staggerTo(cloud01Blue04, 1, {fill: colors[0]}, .1, 'changeColors')
        ;

        return tl;

    }

    function tl02() {

        var tl = new TimelineMax({yoyo: true, repeat: -1, ease: "myWiggle"});

        tl
            .add('changeColors')
            .staggerTo(cloud02Blue01, 1, {fill: colors[4]}, .1, 'changeColors')
            .staggerTo(cloud02Blue02, 1, {fill: colors[3]}, .1, 'changeColors')
            .staggerTo(cloud02Blue03, 1, {fill: colors[2]}, .1, 'changeColors')
            .staggerTo(cloud02Blue04, 1, {fill: colors[1]}, .1, 'changeColors')
            .staggerTo(cloud02Blue05, 1, {fill: colors[1]}, .1, 'changeColors')
        ;

        return tl;

    }

    function tl03() {

        var tl = new TimelineMax({yoyo: true, repeat: -1});

        tl
            .add('changeColors')
            .staggerTo(cloud03Blue01, 1, {fill: colors[3]}, .1, 'changeColors')
            .staggerTo(cloud03Blue02, 1, {fill: colors[2]}, .1, 'changeColors')
            .staggerTo(cloud03Blue03, 1, {fill: colors[1]}, .1, 'changeColors')
            .staggerTo(cloud03Blue04, 1, {fill: colors[0]}, .1, 'changeColors')
        ;

        return tl;

    }

    function tl04() {

        var tl = new TimelineMax({yoyo: true, repeat: -1});

        tl
            .add('changeColors')
            .staggerTo(cloud04Blue01, 1, {fill: colors[4]}, .1, 'changeColors')
            .staggerTo(cloud04Blue02, 1, {fill: colors[3]}, .1, 'changeColors')
            .staggerTo(cloud04Blue03, 1, {fill: colors[2]}, .1, 'changeColors')
            .staggerTo(cloud04Blue04, 1, {fill: colors[1]}, .1, 'changeColors')
            .staggerTo(cloud04Blue05, 1, {fill: colors[0]}, .1, 'changeColors')
        ;

        return tl;

    }
        function tl05() {

        var bezier01 = MorphSVGPlugin.pathDataToBezier("#cloud04__electricity__bezier__path01", {align:"#cloud04__electricity__mask01 > path",offsetX:-15,offsetY:-15});
        var bezier02 = MorphSVGPlugin.pathDataToBezier("#cloud04__electricity__bezier__path02", {align:"#cloud04__electricity__mask02 > path",offsetX:-15,offsetY:15});
        var bezier03 = MorphSVGPlugin.pathDataToBezier("#cloud04__electricity__bezier__path03", {align:"#cloud04__electricity__mask03 > path",offsetX:-15,offsetY:-15});
        var bezier04 = MorphSVGPlugin.pathDataToBezier("#cloud04__electricity__bezier__path04", {align:"#cloud04__electricity__mask04 > path",offsetX:-15,offsetY:-15});
        var bezier05 = MorphSVGPlugin.pathDataToBezier("#cloud04__electricity__bezier__path05", {align:"#cloud04__electricity__mask05 > path",offsetX:-15,offsetY:-15});

        var tl = new TimelineMax({repeat:-1});

        tl

            .add('animateMasks')
            .to("#cloud04__electricity__mask01 > path", 3, {bezier:{values:bezier01, type:"cubic"},ease:Linear.easeNone},'animateMasks')
            .to("#cloud04__electricity__mask02 > path", 3, {bezier:{values:bezier02, type:"cubic"},ease:Linear.easeNone},'animateMasks')
            .to("#cloud04__electricity__mask03 > path", 3, {bezier:{values:bezier03, type:"cubic"},ease:Linear.easeNone},'animateMasks')
            .to("#cloud04__electricity__mask04 > path", 3, {bezier:{values:bezier04, type:"cubic"},ease:Linear.easeNone},'animateMasks')
            .to("#cloud04__electricity__mask05 > path", 3, {bezier:{values:bezier05, type:"cubic"},ease:Linear.easeNone},'animateMasks')

        ;
        return tl;

    }




    var masterTimeline = new TimelineMax({repeat: -1});

    masterTimeline

        .add(tl01().timeScale(0.6), 0)
        .add(tl02().timeScale(0.5), 0.2)
        .add(tl03().timeScale(0.6), 0.4)
        .add(tl04().timeScale(0.4), 0.8)
        .add(tl05().timeScale(1), 0.2)



    ;

    masterTimeline.timeScale(0.8);



});



