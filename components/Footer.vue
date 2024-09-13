<template>
    <div>
        <footer class="relative bg-[#ffc19d]/50 sm:pt-48 pt-24">
            <!-- help Card  -->
            <div class="absolute left-0 right-0 -top-32 z-10 sm:p-16 p-5 bg-quat container lg:max-w-[900px] max-w-2xl mx-auto rounded-3xl shadow-lg">
                <div class="flex flex-col">
                    <h5 class="sm:text-[2.625rem] text-2xl sm:leading-10 sm:text-start text-center font-bold text-secondary inline max-w-[600px]">Get In Touch To See How We Can Help You 
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 inline" viewBox="0 0 24 24"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z" fill="rgba(255,115,93,1)"></path></svg>
                    </h5>
                    <div class="sm:mt-6 mt-3 flex flex-wrap sm:justify-start justify-center gap-3">
                        <nuxt-link to="javascript:void(0)" class="bg-secondary text-sm py-2 px-8 text-white rounded-full border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all duration-200">+1 (410) 457-9993</nuxt-link>
                        <nuxt-link to="javascript:void(0)" class="text-secondary text-sm py-2 px-8 rounded-full border-2 border-secondary hover:text-white hover:bg-secondary transition-all duration-200">info@teksyo.com</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- Main Footer  -->
            <div class="container flex lg:flex-row flex-col mt-12">
                <div class="lg:w-[30%] w-full">
                    <div>
                        <nuxt-link to="/" class="inline-block">
                            <img src="../assets/img/logo.svg" class="w-[150px]" alt="">
                        </nuxt-link>
                        <p class="text-sm mt-3 max-w-[320px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptas cupiditate, eligendi iusto temporibus </p>
                    </div>
                </div>
                <div class="lg:w-[70%] w-full flex flex-wrap lg:justify-evenly lg:mt-0 mt-8">
                    <div class="lg:w-1/4 w-1/2">
                        <ul class="space-y-1">
                            <li class="text-lg font-bold leading-6 text-gray-900 mb-3">Quick Links</li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">About</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/service" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Services</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Case Studies</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Contact</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/blog" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Blog</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="lg:w-1/4 w-1/2">
                        <ul class="space-y-1">
                            <li class="text-lg font-bold leading-6 text-gray-900 mb-3">Services</li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Web Development</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Re-Development</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Ecommerce Web Development</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">SAAS Development</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">Custom Business Solutions</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="javascript:void(0)" class="relative inline-flex items-center text-sm leading-6 align-middle border-none 
                                    after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500
                                    text-gray-600 hover:text-secondary after:bg-secondary duration-500">AI-Integration (Open AI/Chat GPT)</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="lg:w-1/4 w-1/2 lg:mt-0 mt-8">
                        <ul>
                            <li class="text-lg font-bold leading-6 text-gray-900 mb-3">Contact</li>
                            <li class="text-sm text-gray-600">Call Us</li>
                            <li>
                                <a href="tel:+13023367384" class="text-[15px] hover:text-secondary transition-all duration-300">+1 (302) 336-7384</a>
                            </li>
                            <li class="text-sm text-gray-600 pt-2">Email Us</li>
                            <li>
                                <a href="mailto:info@teksyo.com" class="text-[15px] hover:text-secondary transition-all duration-300">info@teksyo.com</a>
                            </li>
                            <li class="text-sm text-gray-500 pt-2">Address</li>
                            <li class="text-sm">13-C, Gulshan-e-Iqbal, Karachi - Pakistan.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- CopyRight div  -->
            <div class="container flex sm:flex-row flex-col sm:justify-between items-center border-t border-gray-400/40 py-5 mt-12">
                <div class="flex items-center space-x-3 ">
                    <nuxt-link to="https://www.facebook.com/teksyo" class="text-secondary hover:text-primary transition-all duration-300">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </nuxt-link>
                    <nuxt-link to="https://www.instagram.com/teksyo/" class="text-secondary hover:text-primary transition-all duration-300">
                        <span class="sr-only">Instagram</span>
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                        </svg>
                    </nuxt-link>
                    <nuxt-link to="https://twitter.com/TeksyoDesign" class="text-secondary hover:text-primary transition-all duration-300">
                        <span class="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>
                    </nuxt-link>
                    <nuxt-link to="https://www.behance.net/teksyoltd?tracking_source=search_users|teksyo" class="text-secondary hover:text-primary transition-all duration-300">
                        <span class="sr-only">Behance</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.44262 5.3501C8.08197 5.3501 8.67213 5.39957 9.21311 5.54798C9.7541 5.64692 10.1967 5.8448 10.5902 6.09215C10.9836 6.3395 11.2787 6.68579 11.4754 7.13102C11.6721 7.57625 11.7705 8.12042 11.7705 8.71406C11.7705 9.40664 11.623 10.0003 11.2787 10.4455C10.9836 10.8907 10.4918 11.2865 9.90164 11.5833C10.7377 11.8307 11.377 12.2759 11.7705 12.8695C12.1639 13.4632 12.4098 14.2052 12.4098 15.0462C12.4098 15.7388 12.2623 16.3324 12.0164 16.8271C11.7705 17.3218 11.377 17.7671 10.9344 18.0639C10.4918 18.3607 9.95082 18.608 9.36066 18.7565C8.77049 18.9049 8.18033 19.0038 7.59016 19.0038H1V5.3501H7.44262ZM7.04918 10.8907C7.59016 10.8907 8.03279 10.7423 8.37705 10.495C8.72131 10.2476 8.86885 9.80239 8.86885 9.25822C8.86885 8.96141 8.81967 8.66458 8.72131 8.4667C8.62295 8.26883 8.47541 8.12042 8.27869 7.97201C8.08197 7.87307 7.88525 7.77413 7.63934 7.72466C7.39344 7.67519 7.14754 7.67519 6.85246 7.67519H4V10.8907H7.04918ZM7.19672 16.7282C7.4918 16.7282 7.78689 16.6787 8.03279 16.6292C8.27869 16.5798 8.52459 16.4808 8.72131 16.3324C8.91803 16.184 9.06557 16.0356 9.21311 15.7883C9.31148 15.5409 9.40984 15.2441 9.40984 14.8978C9.40984 14.2052 9.21312 13.7105 8.81967 13.3642C8.42623 13.0674 7.88525 12.919 7.2459 12.919H4V16.7282H7.19672ZM16.6885 16.6787C17.082 17.0745 17.6721 17.2724 18.459 17.2724C19 17.2724 19.4918 17.1239 19.8852 16.8766C20.2787 16.5798 20.5246 16.283 20.623 15.9861H23.0328C22.6393 17.1734 22.0492 18.0144 21.2623 18.5586C20.4754 19.0533 19.541 19.3501 18.4098 19.3501C17.6229 19.3501 16.9344 19.2017 16.2951 18.9543C15.6557 18.707 15.1639 18.3607 14.7213 17.866C14.2787 17.4208 13.9344 16.8766 13.7377 16.2335C13.4918 15.5904 13.3934 14.8978 13.3934 14.1063C13.3934 13.3642 13.4918 12.6717 13.7377 12.0285C13.9836 11.3854 14.3279 10.8413 14.7705 10.3466C15.2131 9.90133 15.7541 9.50557 16.3443 9.25822C16.9836 9.01087 17.6229 8.86246 18.4098 8.86246C19.2459 8.86246 19.9836 9.01088 20.623 9.35716C21.2623 9.70345 21.7541 10.0992 22.1475 10.6929C22.541 11.237 22.8361 11.8801 23.0328 12.5727C23.1311 13.2653 23.1803 13.9579 23.1311 14.7494H16C16 15.5409 16.2951 16.283 16.6885 16.6787ZM19.7869 11.4844C19.4426 11.1381 18.9016 10.9402 18.2623 10.9402C17.8197 10.9402 17.4754 11.0391 17.1803 11.1876C16.8852 11.336 16.6885 11.5338 16.4918 11.7317C16.2951 11.9296 16.1967 12.177 16.1475 12.4243C16.0984 12.6717 16.0492 12.8695 16.0492 13.0674H20.4754C20.3771 12.3254 20.1311 11.8307 19.7869 11.4844ZM15.459 6.29003H20.9672V7.62572H15.459V6.29003Z"></path></svg>
                    </nuxt-link>
                </div>
                <div>
                    <p class="text-sm text-gray-700 sm:text-start text-center sm:mt-0 mt-2">© Copyright 2023 <nuxt-link to="/" class="text-secondary hover:text-secondary/70">Teksyo</nuxt-link> All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
</template>