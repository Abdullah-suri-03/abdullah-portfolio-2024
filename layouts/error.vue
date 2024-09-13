<template>
    <div>
      <h1 v-if="error.statusCode === 404">
        <Header />
        <HeroSection2 
            title="404 - Page Not Found"
            desc="Oops! The page you're looking for seems to have vanished into the digital abyss. Don't worry! You can easily navigate back to our home page and explore the rest of our website."
        >
            <template #cta>
                <div class="mt-12 flex justify-center w-full h-[52px] relative">
                    <nuxt-link to="/" class="btn-book-call">
                        Go to Home
                    </nuxt-link>
                    <span></span>
                </div>
            </template>
        </HeroSection2>
        
        <FooterPrimary :enable-top-section="false" />
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'error',
    props: {
      error: {
        type: Object,
        required: true
      }
    },
    head() {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: 'https://www.teksyo.com' + this.$route.path
                }
            ]
        }
    },
    created() {
    },
  }
  </script>