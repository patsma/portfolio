<template>
  <div class="items">
    <n-link to="logo-animation">
      <Item>
        <template #svg>
          <LogoAnimationIcon/>
        </template>
        <template #text>Logo animation</template>
      </Item>
    </n-link>

    <n-link to="animations">
      <Item>
        <template #svg>
          <SvgAnimationIcon/>
        </template>
        <template #text>Animations</template>
      </Item>
    </n-link>
    <n-link to="websites">
      <Item>
        <template #svg>
          <WebsitesIcon/>
        </template>
        <template #text>Websites</template>
      </Item>
    </n-link>
    <n-link to="about">
      <Item>
        <template #svg>
          <AboutIcon/>
        </template>
        <template #text>About</template>
      </Item>
    </n-link>
  </div>
</template>

<script>
  import LogoAnimationIcon from "~/assets/icons/logo-animation.svg?inline";
  import BannersAnimationIcon from "~/assets/icons/banners-animation.svg?inline";
  import SvgAnimationIcon from "~/assets/icons/svg-animation.svg?inline";
  import CustomAnimationIcon from "~/assets/icons/custom-animation.svg?inline";
  import WebsitesIcon from "~/assets/icons/websites.svg?inline";
  import AboutIcon from "~/assets/icons/about.svg?inline";
  import Item from '~/components/Item.vue'

  export default {

    components: {
      Item,
      LogoAnimationIcon,
      BannersAnimationIcon,
      SvgAnimationIcon,
      CustomAnimationIcon,
      WebsitesIcon,
      AboutIcon
    }


  }
</script>

<style scoped lang="scss">
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    background: #264653;
    display: grid;
    color: #fff;
    text-transform: uppercase;
    justify-items: center;
    align-content: space-evenly;
    transition: 0.3s all ease-in-out;
    position: relative;

    &:after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: #264653;
      height: 10px;
      width: 0;
      transition: 0.3s all ease-in-out;

    }

    &:hover:after {
      width: 100%;
    }

    &:hover {
      background: #fff;
      color: #264653;
    }

    &:hover .item__icon svg > * {
      fill: #E76F51;
    }

    &:nth-child(2n) {
      background: #fff;
      color: #264653;

      &:after {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: #E76F51;
        height: 10px;
        width: 0;
        transition: 0.3s all ease-in-out;

      }

      &:hover:after {
        width: 100%;
      }

      &:hover {
        background: #264653;
        color: #fff;
      }

      &:hover .item__icon svg > * {
        fill: #2A9D8F;
      }
    }

    &:nth-child(3n) {
      background: #fff;
      color: #264653;

      &:after {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: #E76F51;
        height: 10px;
        width: 0;
        transition: 0.3s all ease-in-out;

      }

      &:hover:after {
        width: 100%;
      }

      &:hover {
        background: #264653;
        color: #fff;
      }

      &:hover .item__icon svg > * {
        fill: #2A9D8F;
      }
    }

    &:nth-child(4n) {
      background: #264653;
      color: #fff;

      &:hover {
        background: #fff;
        color: #264653;
      }

      &:hover .item__icon svg > * {
        fill: #E76F51;
      }
    }

  }
</style>
