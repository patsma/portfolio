GSDevTools.create({minimal: true});

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function tl01() {
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    var Cont = {val: 50}, NewVal = 90;
    tl
        .add('Yahoo50to90')
        .to(Cont, 1, {val: NewVal, roundProps: "val", onUpdate: function () {
                document.getElementById("numberAnimate01").innerHTML = Cont.val + '%'
            }
        },'Yahoo50to90')

        .to("#Yahoo50 > path:nth-child(1)", 1, {morphSVG:"#Yahoo90 > path:nth-child(1)"},'Yahoo50to90')
        .to("#Yahoo50 > path:nth-child(2)", 1, {morphSVG:"#Yahoo90 > path:nth-child(2)"},'Yahoo50to90')
        .to("#Yahoo50 > path:nth-child(3)", 1, {morphSVG:"#Yahoo90 > path:nth-child(3)"},'Yahoo50to90')
    ;
    return tl
}

function tl02() {
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    var Cont = {val: 35}, NewVal = 75;
    tl
        .add('Bing35to75')
        .to(Cont, 1, {val: NewVal, roundProps: "val", onUpdate: function () {
                document.getElementById("numberAnimate02").innerHTML = Cont.val + '%'
            }
        },'Bing35to75')

        .to("#Bing35 > path:nth-child(1)", 1, {morphSVG:"#Bing75 > path:nth-child(1)"},'Bing35to75')
        .to("#Bing35 > path:nth-child(2)", 1, {morphSVG:"#Bing75 > path:nth-child(2)"},'Bing35to75')
        .to("#Bing35 > path:nth-child(3)", 1, {morphSVG:"#Bing75 > path:nth-child(3)"},'Bing35to75')
    ;
    return tl
}

function tl03() {
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    var Cont = {val: 75}, NewVal = 35;
    tl
        .add('Organic75to35')
        .to(Cont, 1, {val: NewVal, roundProps: "val", onUpdate: function () {
                document.getElementById("numberAnimate03").innerHTML = Cont.val + '%'
            }
        },'Organic75to35')

        .to("#Organic75 > path:nth-child(1)", 1, {morphSVG:"#Organic35 > path:nth-child(1)"},'Organic75to35')
        .to("#Organic75 > path:nth-child(2)", 1, {morphSVG:"#Organic35 > path:nth-child(2)"},'Organic75to35')
        .to("#Organic75 > path:nth-child(3)", 1, {morphSVG:"#Organic35 > path:nth-child(3)"},'Organic75to35')
    ;
    return tl
}

function tl04() {
    var tl = new TimelineMax({repeat: -1, yoyo: true});
    var Cont = {val: 50}, NewVal = 90;
    tl
        .add('Google50to90')
        .to(Cont, 1, {val: NewVal, roundProps: "val", onUpdate: function () {
                document.getElementById("numberAnimate04").innerHTML = Cont.val + '%'
            }
        },'Google50to90')

        .to("#Google50 > path:nth-child(1)", 1, {morphSVG:"#Google90 > path:nth-child(1)"},'Google50to90')
        .to("#Google50 > path:nth-child(2)", 1, {morphSVG:"#Google90 > path:nth-child(2)"},'Google50to90')
        .to("#Google50 > path:nth-child(3)", 1, {morphSVG:"#Google90 > path:nth-child(3)"},'Google50to90')
    ;
    return tl
}

master = new TimelineMax({repeat: -1, yoyo: true});

master

    .add(tl01())
    .add(tl02(),0.5)
    .add(tl03(),0.2)
    .add(tl04(),0.3)
;

master.timeScale(0.5);



