<template>
  <n-link to="/">
    <img src="~assets/logo.svg" alt="">
  </n-link>
</template>

<script>

export default {
  components: {}
}
</script>

<style scoped lang="scss">
img {
  width: 160px;
  height: 40px;
  @media screen and (min-width: $mobile) {
    width: 260px;

  }

  #text path {
    stroke: $white;
  }

  #left, #right {
    fill: $white
  }
}
</style>
