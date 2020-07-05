<template>
  <div class="item">
    <div class="item__icon">
      <slot name="svg">
        <LogoAnimation/>
      </slot>
    </div>
    <div class="item__text">
      <slot name="text">Logo Animation</slot>
    </div>
  </div>
</template>

<script>
  import LogoAnimation from "~/assets/icons/logo-animation.svg?inline";

  export default {
    components: {
      LogoAnimation
    }
  }
</script>

<style lang="scss">
  .item {
    font-size: 1rem;
    grid-gap: 2vw;
    padding: 2vh;
    text-align: center;
    justify-content: center;
    display: grid;
    justify-items: center;
  }

  .item__text {
    display: grid;
    align-content: center;
    letter-spacing: 1.9px;
    font-weight: bold;
    font-family: sans-serif;
  }

  .item__icon {
    display: grid;
    align-content: center;

    svg {
      width: 90px;
    }
  }
</style>
