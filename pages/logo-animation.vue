<template>
  <div>
    <Header/>
    <main>
      <a href="https://nuxtjs.org">

      <Item>
          <template #svg>
            <LogoAnimationIcon/>
          </template>
          <template #text>HQs</template>
        </Item>
      <Item>
          <template #svg>
            <LogoAnimationIcon/>
          </template>
          <template #text>HQs</template>
        </Item>
      </a>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import LogoAnimationIcon from "~/assets/icons/logo-animation.svg?inline";

  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import Item from '~/components/Item.vue'
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo,
      Header,
      Footer,
      Item,
      LogoAnimationIcon
    }
  }
</script>

<style lang="scss">


</style>
