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

}

a {
  text-decoration: none;
}


footer .nuxt-link-exact-active {
  svg > * {
    fill: #000;
  }
}

body::-webkit-scrollbar {
  width: 2vmin;
}

body::-webkit-scrollbar-track {
}

body::-webkit-scrollbar-thumb {
  background-color: #E76F51;
  outline: 1px solid #E76F51;
}


</style>
<script>

</script>
