<template>
  <div @click="onClick">
    <page404SVG/>
  </div>
</template>

<script>
import page404SVG from "~/assets/animations/page404/page404.svg?inline";
import {gsap} from "gsap";

let masterTl = gsap.timeline()

export default {
  data() {
    return {}
  },

  components: {
    page404SVG
  },

  methods: {
    onClick() {
      masterTl.reversed(!masterTl.reversed())

    }
  },

  mounted() {
    function animate() {

      const ship = document.querySelector('#ship')
      const background1 = document.querySelector('#background-1')
      const background2 = document.querySelector('#background-2')
      const octo = document.querySelector('#octo')
      const octoM = document.querySelector('#octo-m')
      const shark = document.querySelector('#shark')
      const sharkM = document.querySelector('#shark-m')
      const sharkWave = document.querySelector('#sharkWave')
      const shipWave = document.querySelector('#shipWave')
      const textHome = document.querySelectorAll('#text-home > *')
      const text404 = document.querySelector('#txt-404')
      const textYouAreLost = document.querySelectorAll('#txt-you-are-lost > *')
      const textDontPanic = document.querySelectorAll('#txt-dont-panic > *')
      const textFindYourWayBack = document.querySelectorAll('#txt-find-your-way-back > *')
      const guy1 = document.querySelector('#guy-1')
      const guy2 = document.querySelector('#guy-2')
      const guy3 = document.querySelector('#guy-3')
      const colors = ['#34A3D4', '#62269E', '#4cb748', '#005597']

      gsap.set(ship, {scale: 0.8, y: '+=80', transformOrigin: '50% 50%'})
      gsap.set(sharkWave, {y: '+=18', transformOrigin: '50% 50%'})
      gsap.set([guy2, guy3], {autoAlpha: 0})
      gsap.set([sharkM], {scaleY: 0, transformOrigin: '50% 100%'})
      gsap.set([octoM], {scaleY: 0, transformOrigin: '50% 100%'})

      function random(list) {
        return function () {
          return list[Math.floor(Math.random() * list.length)];
        }
      }

      let tl1 = gsap.timeline();
      let tl2 = gsap.timeline();
      let tl3 = gsap.timeline();
      let master = gsap.timeline();

      tl1
        .to(ship, {duration: 18, x: 1250, y: 210, scale: 1, ease: 'sine.out'})
      ;

      tl2
        .to(guy2, {autoAlpha: 1, ease: 'steps(1)'})
        .to(guy1, {autoAlpha: 0, ease: 'steps(1)'}, '<')
        .to(guy3, {duration: 1, autoAlpha: 1, ease: 'steps(1)', repeat: -1, repeatDelay: 1})
      ;

      tl3
        .from(text404, {autoAlpha: 0, ease: 'steps(1)'})
        .from(textYouAreLost, {autoAlpha: 0, stagger: 0.1, ease: 'steps(1)'})
        .from(textDontPanic, {autoAlpha: 0, stagger: 0.1, ease: 'steps(1)'})
        .from(textFindYourWayBack, {autoAlpha: 0, stagger: 0.1, ease: 'steps(1)'})
        .from(textHome, {autoAlpha: 0, ease: 'steps(1)'})
        .to(textHome, {
          fill: random(colors),
          repeat: -1,
          repeatRefresh: true,
          yoyo: true
        }, '+=1')
        .from(sharkWave, {y: '+=100', scale: 0, transformOrigin: '50% 100%'})
        .add('shark', '-=0.1')

        .to(sharkM, {scaleY: 1}, 'shark')
        .to(shark, {y: '+=5', repeatDelay: 0.05, x: '+=2', repeat: -1, yoyo: true}, 'shark+=0.5')
        .to(sharkWave, {autoAlpha: 0, ease: 'steps(1)'}, 'shark+=0.4')
        .from(shark, {y: '+=250', transformOrigin: '50% 100%'}, 'shark')


        .add('octo', '+=1')
        .to(octoM, {scaleY: 1}, 'octo')
        .to(octo, {y: '+=5', x: '+=1', repeat: -1, repeatDelay: 0.1, yoyo: true}, 'octo+=0.5')
        .from(octo, {y: '+=250', transformOrigin: '50% 100%'}, 'octo')
      ;

      master
        .add(tl1)
        .add(tl2, '-=16.5')
        .add(tl3, '<')
        .to(ship, {yPercent: '+=2', xPercent: '-=1', repeat: -1, yoyo: true, ease: 'bounce.inOut'}, 0)
        .to(background1, {duration: 3, autoAlpha: 0, repeat: -1, ease: 'steps(1)'}, 0)
        .to(shipWave, {autoAlpha: 0, ease: 'steps(1)'}, 16)


      return master
    }

    masterTl.add(animate())
    masterTl.reverse()
  }
}
</script>

<style scoped>

</style>
