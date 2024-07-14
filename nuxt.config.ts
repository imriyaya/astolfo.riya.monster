// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-07-14',

    modules: ['@nuxtjs/turnstile', "@nuxt/scripts", '@pinia/nuxt', '@nuxtjs/tailwindcss'],

    turnstile: {
        siteKey: '0x4AAAAAAAemJPMqiN5i5kt5',
        addValidateEndpoint: true
    },

    runtimeConfig: {
        turnstile: {
            secretKey: '0x4AAAAAAAemJP3uEJTU3J1TFw_-9I20odw',
        },
    },
})