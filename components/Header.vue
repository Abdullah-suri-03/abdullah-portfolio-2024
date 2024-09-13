<template>
  <div>
    <div v-if="showMenu" @click="toggleMenu" id="menu-overlay" class="overlay-active"></div>
    <header :class="{ 'bg-quat': !hideBg }">
      <!-- Desktop Header  -->
      <div class="container py-6 flex items-center justify-between">
        <div class="flex items-center">
          <nuxt-link to="/" data-aos="fade-right" data-aos-delay="100" data-aos-offset="-1000">
              <img class="w-32" src="../assets/img/logo.svg" alt="">
          </nuxt-link>
          <div class="flex items-center max-[1024px]:hidden ml-12">
              <ul class="inline-block xl:text-[17px] text-sm">
                  <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
                  <li class="nav-link"><a @click="scrollToSection('team')">About</a></li>
                  <li class="nav-link"><a @click="scrollToSection('service')">Our Services</a></li>
                  <li class="nav-link"><a @click="scrollToSection('portfolio')">Our Work</a></li>
              </ul>
          </div>
        </div>
          <div class="flex items-center md:gap-3 max-[1024px]:hidden">
            <div class="mr-4">
                <img class="h-9" src="../assets/img/clutch.svg" alt="">
            </div>
            <a href="tel:+13023367384" id="phone-call-header" class="flex items-center mr-4">
                <div>
                    <img class="h-9" src="../assets/img/talk.svg" alt="">
                </div>
                <div class="ml-3 text-sm font-semibold">
                    Let’s Talk
                    <P class="text-primary -mt-1 xl:text-[17px] text-sm font-bold animate__animated animate__pulse animate__infinite animate__slower">+1 (302) 336-7384</P>
                </div>
            </a>
            <nuxt-link id="book-call-header" to="/book-a-call" class="hover-pulse xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full">Book a call</nuxt-link>
          </div>
          <!-- Mobile Nav  -->
          <div class="min-[1025px]:hidden flex items-center">
            <div class="mobi-nav-wrapper bg-grey-400 absolute w-0 h-0 top-0 bottom-0 left-0 right-0 ">
              <div class="sidenav w-0" :class="showMenu ? '!w-full' : ''">
                <span @click="toggleMenu" class="closebtn">&times;</span>
                <div @click="toggleMenu" class="text-center">
                  <nuxt-link to="/">Home</nuxt-link>
                  <a @click="scrollToSection('team')">About</a>
                  <a @click="scrollToSection('service')">Our Services</a>
                  <a @click="scrollToSection('portfolio')">Our Work</a>
                </div>
              </div>
          </div>
            <div class="flex items-center md:gap-6 sm:mr-10 mr-4 max-[374px]:hidden">
              <div class="mr-2 max-[500px]:hidden">
                <img class="sm:h-8 h-7" src="../assets/img/clutch.svg" alt="">
              </div>
              <a href="tel:+13023367384" id="phone-call-mobile-header" class="flex items-center">
                <img class="sm:h-8 h-7" src="../assets/img/talk.svg" alt="">
                  <div class="ml-3 text-sm font-semibold">
                      Let’s Talk
                      <P class="text-primary -mt-1 text-[15px] font-bold animate__animated animate__pulse animate__infinite animate__slower">+1 (302) 336-7384</P>
                  </div>
              </a>
            </div>
              <span @click="toggleMenu" class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24">
                      <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z" fill="#000"></path>
                  </svg>
              </span>
          </div>
        </div>
        <!-- Mobile Nav End -->
    </header>
  </div>
</template>
<script>
export default {
  props: {
    hideBg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  },
}
</script>
<style scoped>
.nav-link{
  position: relative;
  color: #000;
  margin: 0 16px 0 0;
  display: inline-flex;
  vertical-align: middle;
  border: none;
  transition-duration: .6s;
  cursor: pointer;
}
.nav-link:not(.nav-link:has(.nuxt-link-exact-active)){
  @apply hover:text-primary
}
</style>
