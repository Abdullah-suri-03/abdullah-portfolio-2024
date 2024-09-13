<template>
    <div>
        <Nuxt />

    </div>
</template>

<script>

export default {
    data() {
        return {
        structuredData: {
                "@context": "https://schema.org/", 
                "@type": "BreadcrumbList", 
                "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Book a call",
                "item": "https://www.teksyo.com/book-a-call/"  
                },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Website Development",
                "item": "https://www.teksyo.com/services/web-development/"  
                },{
                "@type": "ListItem", 
                "position": 3, 
                "name": "AI-Integration (Open AI/Chat GPT)",
                "item": "https://www.teksyo.com/services/ai-integration-openai-chatgpt/"  
                },{
                "@type": "ListItem", 
                "position": 4, 
                "name": "SAAS Development",
                "item": "https://www.teksyo.com/services/saas-development/"  
                },{
                "@type": "ListItem", 
                "position": 5, 
                "name": "Custom Business Solutions",
                "item": "https://www.teksyo.com/services/custom-business-solutions/"  
                }]
            }
        }
    },
    head() {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: 'https://www.teksyo.com' + this.$route.path
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
        }
    },
    computed:{
        section_id(){
            return this.$route.hash;
        }
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo({
                top: 1,
            });
        }, 1);
        this.redirectToId();
    },
    methods: {
        redirectToId(){
            if (this.section_id) {
                const _class = this.section_id.replace('#','');
                const element = document.querySelector(`.${_class}`);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView();
                    }, 500);
                }
            }
        }
    },
};
</script>