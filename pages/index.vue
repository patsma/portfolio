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
    visibility: hidden;
    opacity: 0;
  }

  a {
    text-decoration: none;
  }


  footer .nuxt-link-exact-active {
    svg > * {
      fill: #2A9D8F;
    }
  }


</style>
