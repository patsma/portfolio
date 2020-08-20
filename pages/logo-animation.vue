<template>
  <div>
    <Header/>
    <main class="default logo-animation">
      <a href="https://tastysites.pl/logo-animation/blueberry">
        <img src="~assets/logo-animation/blueberry.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/frontier">
        <img src="~assets/logo-animation/frontier.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/icebergwebdesign">
        <img src="~assets/logo-animation/iceberg-web-design.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/working-jobs-vyne">
        <img src="~assets/logo-animation/working-solutions-vyne.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/inforca">
        <img src="~assets/logo-animation/inforca.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/lion">
        <img src="~assets/logo-animation/lion.gif" alt="">
      </a>

      <a href="https://tastysites.pl/logo-animation/working-solutions/">
        <img src="~assets/logo-animation/working-solutions.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/aeroflux">
        <img src="~assets/logo-animation/aeroflux.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/zaksa">
        <img src="~assets/logo-animation/zaksa.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/michael-arthur/">
        <img src="~assets/logo-animation/michael-arthur.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/milk">
        <img src="~assets/logo-animation/milk.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/dobra-hipoteka">
        <img src="~assets/logo-animation/dobra-hipoteka.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/just-in-mind">
        <img src="~assets/logo-animation/just-in-mind.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/fresh-sight">
        <img src="~assets/logo-animation/fresh-sight.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/hq-bio">
        <img src="~assets/logo-animation/hq-bio-loader.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/catalyst">
        <img src="~assets/logo-animation/catalyst.gif" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/farm-table">
        <img src="~assets/logo-animation/farm-table.gif" alt="">
      </a>
      <a href="./yamahata">
        <img src="~assets/logo-animation/yamahata.gif" alt="">
      </a>
    </main>
    <Footer/>
  </div>
</template>

<script>
import gsap from 'gsap'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo,
    Header,
    Footer,
  },
  mounted() {
    gsap.to('main', {autoAlpha: 1})
  }
}
</script>

<style lang="scss">

</style>
