<template>
  <div>
    <Header/>
    <main>
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



</style>
