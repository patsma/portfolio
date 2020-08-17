<template>
  <div>
    <Header/>
    <main class="logo-animation">
            <a href="https://tastysites.pl/dev/animations/audiologist-lab/"><img src="~assets/animations/audiologist.png"
                                                                                 alt=""></a>
            <a href="https://tastysites.pl/dev/animations/bartender/free-edition-v04/"><img
              src="~assets/animations/bartender.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/blood/"><img src="~assets/animations/blood.png" alt=""></a>
            <a href="https://booking-engine-animation.netlify.app/"><img src="~assets/animations/booking.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/medical/brain-pain/"><img src="~assets/animations/brain.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/clouds/"><img src="~assets/animations/clouds.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/person-computer/person-computer-animated-0201.svg"><img
              src="~assets/animations/computer-guy.svg" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/cybersecurity/module01/"><img
              src="~assets/animations/cybersecurity.png" alt=""></a>
            <a href="https://envelope-gsap.netlify.com/"><img src="~assets/animations/envelope.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/family/family-clean.svg"><img src="~assets/animations/family.svg"
                                                                                        alt=""></a>
            <a href="https://tastysites.pl/dev/animations/fidelis-elevate/"><img src="~assets/animations/fidelis.png" alt=""></a>
            <a href="https://fort-privacy-tasty-sites.netlify.com/"><img src="~assets/animations/fort-privacy.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/gradient/"><img src="~assets/animations/gradient.png" alt=""></a>
            <a href="https://graph-gradients.netlify.com/"><img src="~assets/animations/graph.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation01/"><img src="~assets/animations/icon-01.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation02/"><img src="~assets/animations/icon-02.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation03/"><img src="~assets/animations/icon-03.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation04/"><img src="~assets/animations/icon-04.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation05/"><img src="~assets/animations/icon-05.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation06/"><img src="~assets/animations/icon-06.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation07/"><img src="~assets/animations/icon-07.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/examples/animation08/"><img src="~assets/animations/icon-08.png"
                                                                                      alt=""></a>
            <a href="https://tastysites.pl/dev/animations/landingpage-laptop/"><img src="~assets/animations/laptop.png"
                                                                                    alt=""></a>
            <a href="https://tastysites.pl/dev/animations/graph/"><img src="~assets/animations/lines.png" alt=""></a>
            <a href="https://page-404-02.netlify.app/"><img src="~assets/animations/page-404.svg" alt=""></a>
            <a href="https://spectrometer-tasty-sites.netlify.com/"><img src="~assets/animations/spectrometer.png" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/stairs/stairs-animated-02.svg"><img
              src="~assets/animations/stairs.svg" alt=""></a>
            <a href="https://tastysites.pl/dev/animations/trueinfluence/"><img src="~assets/animations/trueinfluence.png"
                                                                               alt=""></a>
            <a href="https://tastysites.pl/dev/animations/usa_map/"><img src="~assets/animations/usa-map.png" alt=""></a>
            <a href="https://wpb-homepage-animation.netlify.com/"><img src="~assets/animations/wpb.png" alt=""></a>
            <a href="https://cdpn.io/tastysites/debug/MoGepg/PBrNWnOOEBmA"><img src="~assets/animations/koduje.png"
                                                                                alt=""></a>
            <a href="https://arch-animation.netlify.app/"><img src="~assets/animations/arc.png" alt=""></a>

    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo,
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
.logo-animation {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
}

img {
  width: 100%;
}


</style>
