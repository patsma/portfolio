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
    <n-link to="banners-animation">
      <Item>
        <template #svg>
          <BannersAnimationIcon/>
        </template>
        <template #text>Banners animation</template>
      </Item>
    </n-link>
    <n-link to="svg-animation">
      <Item>
        <template #svg>
          <SvgAnimationIcon/>
        </template>
        <template #text>SVG animation</template>
      </Item>
    </n-link>
    <n-link to="custom-animation">
      <Item>
        <template #svg>
          <CustomAnimationIcon/>
        </template>
        <template #text>Custom animation</template>
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


    &:nth-child(2n) {
      background: #fff;
      color: #264653;
    }

    &:nth-child(3n) {
      background: #fff;
      color: #264653;
    }

    &:nth-child(4n) {
      background: #264653;
      color: #fff;

    }


  }


</style>
