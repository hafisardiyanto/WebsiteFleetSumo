import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        AOS.init({
            once: false, // Animasi diputar ulang jika di-scroll naik-turun
            offset: 100, // Jarak dari bawah layar sebelum animasi dimulai
            duration: 800, // Cukup lambat agar terasa halus
            easing: 'ease-out-back', // KUNCI PANTULAN: ini yang memberikan efek memantul / spring yang premium!
            delay: 0
        })
    })
})
