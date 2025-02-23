import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimationConfig {
  trigger: Element
  animation: {
    from?: gsap.TweenVars
    to: gsap.TweenVars
    duration?: number
    ease?: string
    delay?: number
    stagger?: number | object
  }
  scroll?: {
    start?: string
    end?: string
    scrub?: boolean | number
    toggleActions?: string
    pin?: boolean
    markers?: boolean
    onEnter?: () => void
    onLeave?: () => void
    onEnterBack?: () => void
    onLeaveBack?: () => void
  }
}

interface ParallaxConfig {
  trigger: Element
  speed?: number
  start?: string
  end?: string
  markers?: boolean
}

interface TransformConfig {
  trigger: Element
  scale?: number
  rotation?: number
  y?: string | number
  x?: string | number
  opacity?: number
  duration?: number
  ease?: string
  stagger?: number
  scroll?: {
    start?: string
    end?: string
    scrub?: boolean | number
    toggleActions?: string
  }
}

const useAnimation = () => {
  const animationRefs = useRef<gsap.Context[]>([])

  const cleanupAnimations = () => {
    animationRefs.current.forEach(context => context.kill())
    animationRefs.current = []
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  useEffect(() => {
    return () => cleanupAnimations()
  }, [])

  const createAnimation = (config: AnimationConfig) => {
    const { trigger, animation, scroll } = config
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: scroll?.start || 'top center+=100',
          end: scroll?.end || 'center center',
          scrub: scroll?.scrub,
          toggleActions: scroll?.toggleActions || 'play none none reverse',
          pin: scroll?.pin,
          markers: scroll?.markers,
          onEnter: scroll?.onEnter,
          onLeave: scroll?.onLeave,
          onEnterBack: scroll?.onEnterBack,
          onLeaveBack: scroll?.onLeaveBack,
        },
      })

      if (animation.from) {
        tl.from(trigger, {
          ...animation.from,
          duration: animation.duration || 1,
          ease: animation.ease || 'power2.out',
          delay: animation.delay || 0,
          stagger: animation.stagger,
        })
      }

      tl.to(trigger, {
        ...animation.to,
        duration: animation.duration || 1,
        ease: animation.ease || 'power2.out',
        delay: animation.delay || 0,
        stagger: animation.stagger,
      })
    })

    animationRefs.current.push(ctx)
    return ctx
  }

  const createParallax = (config: ParallaxConfig) => {
    const { trigger, speed = 30, start = 'top bottom', end = 'bottom top', markers = false } = config
    const ctx = gsap.context(() => {
      gsap.to(trigger, {
        y: `${speed}%`,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start,
          end,
          scrub: true,
          markers,
        },
      })
    })

    animationRefs.current.push(ctx)
    return ctx
  }

  const createTransform = (config: TransformConfig) => {
    const { 
      trigger, 
      scale = 1, 
      rotation = 0, 
      y = 0, 
      x = 0, 
      opacity = 1,
      duration = 1,
      ease = 'power2.out',
      stagger = 0,
      scroll 
    } = config

    const ctx = gsap.context(() => {
      gsap.to(trigger, {
        scale,
        rotation,
        y,
        x,
        opacity,
        duration,
        ease,
        stagger,
        scrollTrigger: scroll ? {
          trigger,
          start: scroll.start || 'top center+=100',
          end: scroll.end || 'center center',
          scrub: scroll.scrub,
          toggleActions: scroll.toggleActions || 'play none none reverse',
        } : undefined,
      })
    })

    animationRefs.current.push(ctx)
    return ctx
  }

  const batch = (elements: Element[], config: Omit<AnimationConfig, 'trigger'>) => {
    elements.forEach(element => {
      createAnimation({ ...config, trigger: element })
    })
  }

  return {
    createAnimation,
    createParallax,
    createTransform,
    batch,
    cleanup: cleanupAnimations,
  }
}

export default useAnimation 