<template>
  <div>
    <Header />
    <HeroSection />
    <Portfolio
      :portfolioVideoPlaying="portfolioVideoPlaying"
      @portfolioVideoPlaying="isVideoPlaying"
    />
    <!--<HomeReview />-->
    <!-- <Logo/> -->
    <Founders />
    <WorkReview /> 
    <!--<AboutUs />-->
    <CustomerVideoReviews
      @portfolioVideoPlaying="isVideoPlaying"
    />
    
    <WhatWeDo2 />

    <!--<HomeReview />-->
    <!--<Process />-->
    <FooterPrimary />
  </div>
</template>

<script>
export default {
    name: 'Home',
    head: {
      title: 'Teksyo | Creating Million-Dollar Websites & AI SaaS for Startup Ideas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Turn your startup idea into a success story! We specialize in Web Design, E-commerce, Custom Solutions, SAAS, and AI-Integration (OpenAI/ChatGPT)'
        },
      ],
    },
    data() {
      return {
        portfolioVideoPlaying: false,
      }
    },
    created() {
        
    },
    methods: {
      isVideoPlaying(value) {
        this.portfolioVideoPlaying = value;
      }
    }
}
</script>
