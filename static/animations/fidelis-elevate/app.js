window.addEventListener("load", function () {
    function animateFidelisCircle() {
        const blueText = document.getElementById("blue__text");
        const blueIconCenter = document.getElementById("blueIconCenter");
        const blueSubText = document.querySelectorAll("#text--network > *");
        const redText = document.getElementById("red__text");
        const redIconCenter = document.getElementById("redIconCenter");
        const redSubText = document.querySelectorAll("#text--deception > *");

        const greenText = document.getElementById("green__text");
        const greenIconCenter = document.getElementById("greenIconCenter");
        const greenSubText = document.querySelectorAll("#text--endpoint > *");

        const circleFidelist = document.querySelector("g#circle");
        const fidelisSvg = document.querySelector("#circle-right");
        const arc1 = document.getElementById("arc--01");
        const arc2 = document.getElementById("arc--01");
        const centerText = document.querySelector("g#text");

        //Idle state
        fidelisSvg.addEventListener('mouseleave', function () {
            const tl = gsap.timeline();
            tl
                .to([redIconCenter, greenIconCenter, blueIconCenter], 0.5, {autoAlpha: 0})
                .to(circleFidelist, 1, {rotation: 0, transformOrigin: "center center"}, 0)
                .to(centerText, 1, {autoAlpha: 1}, 0)

            ;
        });

        blueText.addEventListener("mouseenter", function () {
            const tl = gsap.timeline();
            tl
                .to([redIconCenter, greenIconCenter, centerText], 0.5, {autoAlpha: 0})
                .to(circleFidelist, 1, {rotation: 60, transformOrigin: "center center"}, 0)
                .to(blueIconCenter, 1, {autoAlpha: 1}, 0)
                .staggerTo(blueSubText, 0.2, {y: -3, transformOrigin: 'center center', repeat: 1, yoyo: true}, 0.01, 0)
            ;


        });
        redText.addEventListener("mouseenter", function () {


            const tl = gsap.timeline();
            tl
                .to([blueIconCenter, greenIconCenter, centerText], 0.5, {autoAlpha: 0})
                .to(circleFidelist, 1, {rotation: -185, transformOrigin: "center center"}, 0)
                .to(redIconCenter, 1, {autoAlpha: 1}, 0)
                .staggerTo(redSubText, 0.2, {y: -3, transformOrigin: 'center center', repeat: 1, yoyo: true}, 0.01, 0)
            ;


        });
        greenText.addEventListener("mouseenter", function () {
            const tl = gsap.timeline();
            tl
                .to([blueIconCenter, redIconCenter, centerText], 0.5, {autoAlpha: 0})
                .to(circleFidelist, 1, {rotation: -65, transformOrigin: "center center"}, 0)
                .to(greenIconCenter, 1, {autoAlpha: 1}, 0)
                .staggerTo(greenSubText, 0.2, {y: 3, transformOrigin: 'center center', repeat: 1, yoyo: true}, 0.01, 0)
            ;

        });
    }

    animateFidelisCircle();
});
