export const setAppHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};

export const initViewportHeight = () => {
  window.addEventListener('resize', setAppHeight);
  setAppHeight();
};

export const cleanupViewportHeight = () => {
  window.removeEventListener('resize', setAppHeight);
}; 