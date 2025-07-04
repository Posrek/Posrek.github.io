window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = window.innerHeight;
  const progress = Math.min(scrollTop / maxScroll, 1);

  const horizontal = document.getElementById('horizontal');
  const vertical = document.getElementById('vertical');
  const menu = document.getElementById('menu');

  // Animate lines positions: 10vh/vw → 90vh/vw
  const horizontalPos = 10 + 80 * progress; // vh
  const verticalPos = 10 + 80 * progress;   // vw
  horizontal.style.top = `${horizontalPos}vh`;
  vertical.style.left = `${verticalPos}vw`;

  // Calculate menu position:
  // Horizontally: vertical line position + 1.5vw gap
  const menuLeft = verticalPos + 1.5; // vw

  // Vertically: start below horizontal line (horizontalPos + 2vh gap), move up to above it (horizontalPos - 4vh)
  const startTop = 10 + 2;     // 12vh (start just below 10vh horizontal line)
  const endTop = 90 - 4;       // 86vh (end just above 90vh horizontal line)
  const menuTop = startTop + (endTop - startTop) * progress;

  // Set menu position
  menu.style.left = `${menuLeft}vw`;
  menu.style.top = `${menuTop}vh`;
});
