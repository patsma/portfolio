<template>
  <div>
    <Header/>
    <main>
      <Items/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Items from '~/components/Items.vue'
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo,
      Header,
      Footer,
      Items
    }
  }

</script>

<style lang="scss">
  main {
    padding-top: 60px;
    padding-bottom: 60px;

  }

  a {
    text-decoration: none;
  }


  footer .nuxt-link-exact-active {
    svg > * {
      fill: #000;
    }
  }


</style>
