<template>
  <div>
    <Header/>
    <main>

      <h1><span>Hello,</span><br> Front-end developer and web animation enthusiast with 8 years of experience in web
        development/design
        and 10
        years of computer science education.</h1>

      <p> I've worked with multiple agencies - GreenRubino, AKA, We Push Buttons - companies like Disney, Mazda, Paco
        Rabanne, and many others - creating SEO friendly pages, custom themes, newsletter templates, web applications,
        video tutorials, motion graphics, banner design, and banner animation.</p>

      <p> Since 2010 I'm professionally helping in topics like networks, hardware, software, malware removal and
        crafting
        brands for local and global businesses.</p>

      <p> In a nutshell I can help you with:</p>
      <ul>

        <li>Web apps with Vue.js + animations and e-commerce</li>
        <li>WordPress custom theme building + e-commerce</li>
        <li>Web animated banners with GreenSock</li>
        <li>ScrollMagic, Parallax animations</li>
        <li>Creating layouts with CSS Grid</li>
        <li>SVG draw, morph animations</li>
        <li>Web Animations HTML 5</li>
        <li>Canvas Animations</li>
        <li>Logo animation</li>
        <li>PSD to HTML</li>
      </ul>

      <p> As a freelancer for the past 7 years, my main goal is to evolve, have great ongoing relationships - and most
        important enjoy my work and the people around me.</p>

      <p> I have my own office, with everything that's important - from the fiber internet to smooth audio hardware for
        communication. If needed I have a group of professionals that can help me with almost any task related to IT, so
        Ads, SEO, Marketing, Enterprise Applications/Software, 3D interactive animations and even VR and AI.</p>

      <p>Besides that, I love to take long walks in the forest.
        I'm an amateur archer a dog guy, a rodents guy (currently 2 lovely Chinchillas), and a passionate reader.
      </p>

      <p> Usually reading at least one book per week from programming books, animation ones to Sci-Fi, Fantasy,
        Personal
        advice, and classical literature.</p>

      <p> Don't hesitate to ask me about anything <a
        href="mailto:kontakt@tastysites.pl">kontakt@tastysites.pl</a>
        If you prefer a video chat - no problem</p>

      <p> Cheers,<br>
        Patryk</p>

    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Items from '~/components/Items.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
    Header,
    Footer,
    Items
  }
}
</script>

<style scoped lang="scss">

main {
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1024px;
  padding: 120px 1rem;
}

a {
  color: #E76F51;
}

</style>
