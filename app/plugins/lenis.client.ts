import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
    const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.05, // Semakin kecil = semakin lama berhentinya (gliding/meluncur lebih panjang)
        wheelMultiplier: 1.5, // Kecepatan scroll dipercepat
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curve easing untuk efek "pantulan"/rem yang lebih terasa
    })

    nuxtApp.hook('app:mounted', () => {
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return {
        provide: {
            lenis
        }
    }
})
