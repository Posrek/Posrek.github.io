window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = window.innerHeight;
  const progress = Math.min(scrollTop / maxScroll, 1); // from 0 to 1

  // Get elements
  const horizontal = document.getElementById('horizontal');
  const vertical = document.getElementById('vertical');
  const menu = document.getElementById('menu');

  // Animate lines
  horizontal.style.top = `${10 + 80 * progress}vh`;  // 10vh → 90vh
  vertical.style.left = `${10 + 80 * progress}vw`;   // 10vw → 90vw

  // Fade out menu text
  // menu.style.opacity = `${1 - progress}`;

  // Move menu with vertical line (left of it) and downward (above horizontal)
  const menuLeft = 10 + 80 * progress - 15; // 15vw left of line (adjust spacing)
  const menuTop = 10 + 75 * progress;       // stays just above horizontal line
  menu.style.left = `${menuLeft}vw`;
  menu.style.top = `${menuTop}vh`;
});
