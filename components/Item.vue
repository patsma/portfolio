<template>
  <div class="item">
    <div class="item__icon">
      <slot name="svg">
      </slot>
    </div>
    <div class="item__text">
      <slot name="text">Logo Animation</slot>
    </div>
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="scss">
  .item {
    font-size: 1rem;
    grid-gap: 12vw;
    padding: 2vh;
    text-align: center;
    justify-content: stretch;
    display: grid;
    justify-items: center;
    width: 100%;
    @media screen and (min-width: 800px) {
      grid-gap: 4vw;
      padding: 6vh;
    }

  }
  .item__text {
    display: grid;
    align-content: center;
    letter-spacing: 1.9px;
    font-weight: bold;
    font-family: sans-serif;
    transition: 0.3s all ease-in-out;
  }
  .item__icon {
    display: grid;
    align-content: center;
    transition: 0.3s all ease-in-out;

    svg {
      width: 90px;

      > * {
        transition: 0.3s all ease-in-out;
      }


    }
  }
</style>
