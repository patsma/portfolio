//COMMENT OUT FOR PRODUCTION START
// GSDevTools.create({minimal: true});
//COMMENT OUT FOR PRODUCTION END

var colors = {
    top1: "#462a55",
    bottom1: "#a84153",
    top2: "#00B4DB",
    bottom2: "#0083B0",
    top3: "#4568DC",
    bottom3: "#B06AB3",
    top4: "#ee0979",
    bottom4: "#ff6a00",
    top5: "#3a6186",
    bottom5: "#89253e",
    top6: "#4ECDC4",
    bottom6: "#556270"
};

var animateGradient = new TimelineMax({
    repeat: -1,
    yoyo: true
});

animateGradient
    .set('#banner-gradient', {
        backgroundImage: "-webkit-linear-gradient(left," + colors.top1 + ", " + colors.bottom1 + ")",
        background: "linear-gradient(to left," + colors.top1 + ", " + colors.bottom1 + ")"
    })
    .to('#banner-gradient', 8, {
        id: '2',
        backgroundImage: "-webkit-linear-gradient(left," + colors.top2 + ", " + colors.bottom2 + ")",
        background: "linear-gradient(to left," + colors.top2 + ", " + colors.bottom2 + ")", ease: Power0.easeNone
    })
    .to('#banner-gradient', 8, {
        id: '3',
        backgroundImage: "-webkit-linear-gradient(left," + colors.top3 + ", " + colors.bottom3 + ")",
        background: "linear-gradient(to left," + colors.top3 + ", " + colors.bottom3 + ")", ease: Power0.easeNone
    })
    .to('#banner-gradient', 8, {
        id: '4',
        backgroundImage: "-webkit-linear-gradient(left," + colors.top4 + ", " + colors.bottom4 + ")",
        background: "linear-gradient(to left," + colors.top4 + ", " + colors.bottom4 + ")", ease: Power0.easeNone
    })
    .to('#banner-gradient', 8, {
        id: '5',
        backgroundImage: "-webkit-linear-gradient(left," + colors.top5 + ", " + colors.bottom5 + ")",
        background: "linear-gradient(to left," + colors.top5 + ", " + colors.bottom5 + ")", ease: Power0.easeNone
    })
    .to('#banner-gradient', 8, {
        id: '6',
        backgroundImage: "-webkit-linear-gradient(left," + colors.top6 + ", " + colors.bottom6 + ")",
        background: "linear-gradient(to left," + colors.top6 + ", " + colors.bottom6 + ")", ease: Power0.easeNone
    })
;
