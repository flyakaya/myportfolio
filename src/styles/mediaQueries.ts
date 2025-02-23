import { css } from 'styled-components'

// Breakpoints in pixels
const breakpoints = {
  xs: 320,
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
} as const

type BreakpointKey = keyof typeof breakpoints

// Media query functions
export const mediaQueries = {
  up: (breakpoint: BreakpointKey) => `@media (min-width: ${breakpoints[breakpoint]}px)`,
  down: (breakpoint: BreakpointKey) => `@media (max-width: ${breakpoints[breakpoint] - 0.02}px)`,
  between: (start: BreakpointKey, end: BreakpointKey) => 
    `@media (min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end] - 0.02}px)`,
  only: (breakpoint: BreakpointKey) => {
    const keys = Object.keys(breakpoints) as BreakpointKey[]
    const index = keys.indexOf(breakpoint)
    const nextBreakpoint = keys[index + 1]

    return nextBreakpoint
      ? `@media (min-width: ${breakpoints[breakpoint]}px) and (max-width: ${breakpoints[nextBreakpoint] - 0.02}px)`
      : mediaQueries.up(breakpoint)
  }
}

// Helper functions for styled-components
export const media = {
  up: (breakpoint: BreakpointKey) => (styles: TemplateStringsArray | string) => css`
    ${mediaQueries.up(breakpoint)} {
      ${styles}
    }
  `,
  down: (breakpoint: BreakpointKey) => (styles: TemplateStringsArray | string) => css`
    ${mediaQueries.down(breakpoint)} {
      ${styles}
    }
  `,
  between: (start: BreakpointKey, end: BreakpointKey) => (styles: TemplateStringsArray | string) => css`
    ${mediaQueries.between(start, end)} {
      ${styles}
    }
  `
} 