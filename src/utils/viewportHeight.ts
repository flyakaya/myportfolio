// Debounce function to prevent too many rapid updates
const debounce = (fn: Function, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const setAppHeight = () => {
  // Use requestAnimationFrame for smooth updates
  requestAnimationFrame(() => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  });
};

// Debounced version for events that might fire rapidly
const debouncedSetAppHeight = debounce(setAppHeight, 100);

export const initViewportHeight = () => {
  // Initial setup
  setAppHeight();

  // Handle various events that might change the viewport
  window.addEventListener('resize', debouncedSetAppHeight);
  window.addEventListener('orientationchange', setAppHeight);
  
  // Mobile-specific events
  window.addEventListener('scroll', debouncedSetAppHeight);
  window.addEventListener('touchmove', debouncedSetAppHeight);
  window.addEventListener('touchend', debouncedSetAppHeight);
  
  // Some mobile browsers need a small delay after load
  setTimeout(setAppHeight, 100);
};

export const cleanupViewportHeight = () => {
  window.removeEventListener('resize', debouncedSetAppHeight);
  window.removeEventListener('orientationchange', setAppHeight);
  window.removeEventListener('scroll', debouncedSetAppHeight);
  window.removeEventListener('touchmove', debouncedSetAppHeight);
  window.removeEventListener('touchend', debouncedSetAppHeight);
}; 