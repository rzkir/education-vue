import { ref, onMounted, onBeforeUnmount } from 'vue'

export const useStateTentangKami = () => {
    const statsSection = ref<HTMLElement | null>(null)

    const awardsCount = ref(0)
    const graduationCount = ref(0)
    const clubsCount = ref(0)
    const partnersCount = ref(0)

    const hasAnimated = ref(false)
    let observer: IntersectionObserver | null = null

    const animateValue = (targetRef: typeof awardsCount, target: number, duration = 1500) => {
        const start = 0
        const startTime = performance.now()

        const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1)
            targetRef.value = Math.floor(start + (target - start) * progress)

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                targetRef.value = target
            }
        }

        requestAnimationFrame(step)
    }

    onMounted(() => {
        if (!('IntersectionObserver' in window)) {
            // Fallback kalau browser tidak support, langsung set angka akhir
            awardsCount.value = 150
            graduationCount.value = 98
            clubsCount.value = 45
            partnersCount.value = 20
            return
        }

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.value) {
                        hasAnimated.value = true

                        animateValue(awardsCount, 150)
                        animateValue(graduationCount, 98)
                        animateValue(clubsCount, 45)
                        animateValue(partnersCount, 20)

                        if (observer && statsSection.value) {
                            observer.unobserve(statsSection.value)
                        }
                    }
                })
            },
            {
                threshold: 0.3,
            },
        )

        if (statsSection.value) {
            observer.observe(statsSection.value)
        }
    })

    onBeforeUnmount(() => {
        if (observer && statsSection.value) {
            observer.unobserve(statsSection.value)
        }
    })

    return {
        statsSection,
        awardsCount,
        graduationCount,
        clubsCount,
        partnersCount,
    }
}

