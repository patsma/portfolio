<template>
  <div>
    <Header/>
    <main class="logo-animation">
      <a href="https://tastysites.pl/dev/animations/blueberry-loader/v5/"><img
        src="~assets/logo-animation/blueberry.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/frontier-logo-animation/"><img
        src="~assets/logo-animation/frontier.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/icebergwebdesign/"><img src="~assets/logo-animation/iceberg.png"
                                                                            alt=""></a>
      <a href="https://tastysites.pl/dev/animations/working-jobs-vyne/"><img
        src="~assets/logo-animation/working-vyne.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/inforca/"><img src="~assets/logo-animation/inforca.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/lion/"><img src="~assets/logo-animation/lion.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/signs-animation/"><img src="~assets/logo-animation/symbols.png"
                                                                           alt=""></a>
      <a href="https://tastysites.pl/dev/animations/working-solutions/"><img
        src="~assets/logo-animation/working-solutions.png" alt=""></a>
      <a href="https://tastysites.pl/dev/animations/yamahata/"><img src="~assets/logo-animation/yamahata.png"
                                                                    alt=""></a>
      <a href="https://zaksa-logo-animation.netlify.com/"><img src="~assets/logo-animation/zaksa.png" alt=""></a>
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
    }
  }

  img {
    width: 100%;
  }


</style>
