export const initializeParallax = () => {
  const els = document.querySelectorAll(".ukiyo");
  els.forEach((el) => {
    // @ts-ignore (since Ukiyo is loaded via CDN)
    new Ukiyo(el);
  });
};

export const initializeSmoothScroll = () => {
  // @ts-ignore (since Lenis is loaded via CDN)
  const lenis = new Lenis({
    wrapper: window,
    content: document.documentElement,
    smoothWheel: true,
    lerp: 0.1,
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}; 