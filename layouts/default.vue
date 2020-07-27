<template>
  <Nuxt/>
</template>

<style lang="scss">
  #__layout {
    display: grid;
  }

  html {
    font-family: sans-serif;

  }

  body {

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s
  }

  .page-enter, .page-leave-active {
    opacity: 0
  }

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
<script>

</script>
