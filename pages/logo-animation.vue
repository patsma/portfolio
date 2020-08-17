<template>
  <div>
    <Header/>
    <main class="logo-animation">
      <a href="https://tastysites.pl/logo-animation/blueberry">
        <img src="~assets/logo-animation/blueberry.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/frontier">
        <img src="~assets/logo-animation/frontier.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/icebergwebdesign">
        <img src="~assets/logo-animation/iceberg.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/working-jobs-vyne">
        <img src="~assets/logo-animation/working-vyne.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/inforca">
        <img src="~assets/logo-animation/inforca.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/lion">
        <img src="~assets/logo-animation/lion.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/signs">
        <img src="~assets/logo-animation/symbols.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/working-solutions/">
        <img src="~assets/logo-animation/working-solutions.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/aeroflux">
        <img src="~assets/logo-animation/aeroflux.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/zaksa">
        <img src="~assets/logo-animation/zaksa.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/michael-arthur/">
        <img src="~assets/logo-animation/michael-arthur.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/milk">
        <img src="~assets/logo-animation/milk.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/dobra-hipoteka">
        <img src="~assets/logo-animation/dobra-hipoteka.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/just-in-mind">
        <img src="~assets/logo-animation/just-in-mind.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/fresh-sight">
        <img src="~assets/logo-animation/fresh.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/hq-bio">
        <img src="~assets/logo-animation/morphing.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/catalyst">
        <img src="~assets/logo-animation/catalyst.png" alt="">
      </a>
      <a href="https://tastysites.pl/logo-animation/farm-table">
        <img src="~assets/logo-animation/farm-table.png" alt="">
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
.logo-animation {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  a {
    height: 100%;
  }

  img {
    object-fit: cover;
    height: auto;
    height: 100%;
  }
}

img {
  width: 100%;
}


</style>
