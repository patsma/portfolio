<template>
  <div>
    <Header/>
    <main class="logo-animation">
      <a href="http://animations.tastysites.pl/"><img src="~assets/websites/animations.png" alt=""></a>
      <a href="http://ark-group.tastysites.pl/"><img src="~assets/websites/ark-group.jpg" alt=""></a>
      <a href="https://asp-animation.netlify.com/"><img src="~assets/websites/asp.png" alt=""></a>
      <a href="https://www.bandoncarshop.ie/"><img src="~assets/websites/bandon.jpg" alt=""></a>
      <a href="https://coolsteps.ie/"><img src="~assets/websites/coolsteps.png" alt=""></a>
      <a href="https://dobrahipoteka.pl/"><img src="~assets/websites/dobrahipoteka.png" alt=""></a>
      <a href="https://ecoszczoteczki.pl/"><img src="~assets/websites/ecoszczoteczki.png" alt=""></a>
      <a href="https://ficlinic.pl/"><img src="~assets/websites/ficlinic.png" alt=""></a>
      <a href="http://gmtsameday.co.uk/"><img src="~assets/websites/gmtsameday.png" alt=""></a>
      <a href="https://hqbio-tasty-sites.netlify.com/"><img src="~assets/websites/hqbio.png" alt=""></a>
      <a href="https://314.pl/"><img src="~assets/websites/interactive-314.jpg" alt=""></a>
      <a href="http://justads.tastysites.pl/"><img src="~assets/websites/justads.png" alt=""></a>
      <a href="https://page-404-02.netlify.app/"><img src="~assets/websites/page-404.png" alt=""></a>
      <a href="https://pixality-tasty-sites.netlify.com/"><img src="~assets/websites/pixality.png" alt=""></a>
      <a href="http://shanrizvi.tastysites.pl/"><img src="~assets/websites/shan-rizvi.png" alt=""></a>
      <a href="https://smartsmileorto.pl/"><img src="~assets/websites/smartsmile.png" alt=""></a>
      <a href="https://sport.trefl.com/"><img src="~assets/websites/trefl.png" alt=""></a>
      <a href="https://zap-black.netlify.com/"><img src="~assets/websites/zap.png" alt=""></a>
      <a href="https://new.achva.ac.il/"><img src="~assets/websites/achva.jpg" alt=""></a>
      <a href="https://pokoje3city.pl//"><img src="~assets/websites/pokoje3city.png" alt=""></a>
    </main>
    <Footer/>
  </div>
</template>

<script>

  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Logo from '~/components/Logo.vue'


  export default {
    components: {
      Logo,
      Header,
      Footer,
    },
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
  }

  img {
    width: 100%;
  }


</style>
