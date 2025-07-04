window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = window.innerHeight;

  const progress = Math.min(scrollTop / maxScroll, 1); // from 0 to 1

  // Animate lines
  const horizontal = document.getElementById('horizontal');
  const vertical = document.getElementById('vertical');
  const menu = document.getElementById('menu');

  horizontal.style.top = `${10 + 80 * progress}vh`; // from 10vh to 90vh
  vertical.style.left = `${10 + 80 * progress}vw`; // from 10vw to 90vw

  // Fade out menu text
  menu.style.opacity = `${1 - progress}`;
});
