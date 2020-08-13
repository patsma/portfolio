<template>
  <header>
    <Logo/>
    <MenuToggle/>

    <Navigation/>
  </header>

</template>

<script>
import Navigation from "~/components/Navigation";
import MenuToggle from "~/components/MenuToggle";

export default {
  components: {
    Navigation,
    MenuToggle
  }
}
</script>

<style scoped>
header {
  display: grid;
  align-content: center;
  justify-content: space-evenly;
  grid-auto-flow: column;
  align-items: center;
  height: 60px;
  max-height: 100px;
  z-index: 2;
  position: fixed;
  width: 100vw;
  background: #fff;
}

</style>
