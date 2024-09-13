<template>
  <div>
    <section class="bg-[#E9F2F4] pb-48 pt-36">
      <div class="container">
        <div class="w-full flex flex-col lg:items-center items-start justify-center lg:text-center">
          <h5 class="sm:text-4xl text-3xl font-bold">How it works</h5>
          <p class="text-[#375A64] my-4 max-w-[450px]">
            Forget about long and complicated agency sign-ups. Just book a call,
            answer a few quick questions, and see us in action!
          </p>
          <div class="mt-12 flex justify-center w-full h-[52px] relative">
            <nuxt-link  to="/book-a-call" class="btn-book-call">
                Book a Call
            </nuxt-link>
            <span></span>
        </div>
        </div>
        <div class="w-full lg:flex flex-wrap gap-4 mt-16 hidden">
          <div class="flex">
            <!-- Item #1 -->
            <div class="w-1/3 relative text-center p-5 group">
              <div class="absolute left-1/2 -top-0 w-[100%] ml-auto border-t-[1px] border-dashed border-[#E8505B]"></div>
              <div class="flex items-start group-last:before:hidden after:content-['1'] after:bg-[#E9F2F4] after:text-[#E8505B] after:flex after:justify-center after:items-center 
                  after:absolute after:-top-3 after:left-2 sm:after:left-[50%] after:w-7 after:h-7 after:border-[1px] after:border-dashed after:border-red-500 after:box-content 
                  after:rounded-full after:-translate-x-1/2"></div>
              <div class="text-3xl font-bold text-[#E8505B] mt-2">
                Schedule a call
              </div>
              <div class="text-[#1A2E35] mt-2">
                You'll arrange a call with us to discuss your projectand ideas.
              </div>
            </div>
            <!-- Item #2 -->
            <div class="w-1/3 relative text-center p-5 group">
              <div class="absolute left-1/2 -top-0 w-[100%] ml-auto border-t-[1px] border-dashed border-[#E8505B]"></div>
              <div class="flex items-start group-last:before:hidden after:content-['2'] after:bg-[#E9F2F4] after:text-[#E8505B] after:flex after:justify-center after:items-center 
              after:absolute after:-top-3 after:left-2 sm:after:left-[50%] after:w-7 after:h-7 after:border-[1px] after:border-dashed after:border-red-500 after:box-content after:rounded-full 
              after:-translate-x-1/2"></div>
              <div class="text-3xl font-bold text-[#E8505B] mt-2">
                On-boarding
              </div>
              <div class="text-[#1A2E35] mt-2">
                Hand over your photos and videos, and complete a short
                questionnaire to enhance our understanding of your business.
              </div>
            </div>
            <!-- Item #3 -->
            <div class="w-1/3 relative text-center p-5">
              <div class="flex items-start group-last:before:hidden after:content-['3'] after:bg-[#E9F2F4] after:text-[#E8505B] after:flex after:justify-center after:items-center 
              after:absolute after:-top-3 after:left-2 sm:after:left-[50%] after:w-7 after:h-7 after:border-[1px] after:border-dashed after:border-red-500 after:box-content after:rounded-full
               after:-translate-x-1/2"></div>
              <div class="text-3xl font-bold text-[#E8505B] mt-2">
                Development
              </div>
              <div class="text-[#1A2E35] mt-2">
                We initiate the design and development phase, bringing your
                vision to life.
              </div>
            </div>
          </div>
        </div>
        <div class="my-12 lg:hidden block">
          <!-- Item #1 -->
          <div class="relative pl-12 py-6 group">
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:top-12 before:left-2 sm:before:left-0 lg:before:h-[100px] md:before:h-[130px] 
            before:h-[120px] before:border-l before:border-dashed before:!border-red-600 before:px-px sm:before:ml-3 before:self-start before:-translate-x-1/2 before:translate-y-3 
            after:content-['1'] after:bg-[#FFF7F7] after:text-[#E8505B] after:flex after:justify-center after:items-center after:absolute after:left-2 sm:after:left-0 after:w-7 after:h-7
            after:border-[1px] after:border-dashed after:border-red-500 after:box-content after:rounded-full sm:after:ml-3 after:-translate-x-1/2 after:translate-y-1.5">
              <div class="text-3xl font-semibold text-[#E8505B] mt-2">
                Schedule a call
              </div>
            </div>
            <div class="text-[#1A2E35] mt-2">
              You'll arrange a call with us to discuss your projectand ideas.
            </div>
          </div>
          <!-- Item #2 -->
          <div class="relative pl-12 py-6 group">
            <div class="flex flex-col sm:flex-row items-start mb-1 before:absolute before:top-12 before:left-2 sm:before:left-0 lg:before:h-[145px] md:before:h-[198px] before:h-[190px] 
            before:border-l before:border-dashed before:!border-red-600 before:px-px sm:before:ml-3 before:self-start before:-translate-x-1/2 before:translate-y-3 after:content-['2']
            after:bg-[#FFF7F7] after:text-[#E8505B] after:flex after:justify-center after:items-center after:absolute after:left-2 sm:after:left-0 after:w-7 after:h-7 after:border-[1px] 
            after:border-dashed after:border-red-500 after:box-content after:rounded-full sm:after:ml-3 after:-translate-x-1/2 after:translate-y-1.5">
              <div class="text-3xl font-semibold text-[#E8505B] mt-2">
                On-boarding
              </div>
            </div>
            <div class="text-[#1A2E35] mt-2">
              Hand over your photos and videos, and complete a <br />
              short questionnaire to enhance our understanding <br />
              of your business.
            </div>
          </div>
          <!-- Item #3 -->
          <div class="relative pl-12 py-6 group">
            <div class="flex flex-col sm:flex-row items-start mb-1 before:absolute before:top-2 before:left-2 sm:before:left-0 before:h-[70px] before:border-l-4 before:border
             before:!border-[#e9f2f4] before:px-px sm:before:ml-3 before:self-start before:-translate-x-1/2 before:translate-y-6 after:content-['3'] after:bg-[#FFF7F7]
              after:text-[#E8505B] after:flex after:justify-center after:items-center after:absolute after:left-2 sm:after:left-0 after:w-7 after:h-7 after:border-[1px] 
              after:border-dashed after:border-red-500 after:box-content after:rounded-full sm:after:ml-3 after:-translate-x-1/2 after:translate-y-1.5">
              <div class="text-3xl font-semibold text-[#E8505B] mt-2">
                Development
              </div>
            </div>
            <div class="text-[#1A2E35] mt-2">
              We initiate the design and development phase, <br />
              bringing your vision to life.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>