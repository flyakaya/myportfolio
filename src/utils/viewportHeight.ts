// Debounce function to prevent too many rapid updates
const debounce = (fn: Function, ms = 100) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const setAppHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

// Debounced version for events that might fire rapidly
const debouncedSetAppHeight = debounce(setAppHeight, 100);

export const initViewportHeight = () => {
  setAppHeight();
  const isMobile = window.innerWidth <= 768;
  if(!isMobile) {
    window.addEventListener('resize', debouncedSetAppHeight);
    window.addEventListener('orientationchange', setAppHeight);
  }
};

export const cleanupViewportHeight = () => {
  window.removeEventListener('resize', debouncedSetAppHeight);
  window.removeEventListener('orientationchange', setAppHeight);
}; 