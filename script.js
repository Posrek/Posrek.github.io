window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = window.innerHeight;
  const progress = Math.min(scrollTop / maxScroll, 1);

  const vertical = document.getElementById('vertical');
  const horizontal = document.getElementById('horizontal');

  const verticalX = 10 + 80 * progress;     // 10vw → 90vw
  const horizontalY = 10 + 80 * progress;   // 10vh → 90vh

  vertical.style.left = `${verticalX}vw`;
  horizontal.style.top = `${horizontalY}vh`;

  // Handle multiple images fading evenly across total scroll
  const images = [
    document.getElementById('house1'),
    document.getElementById('house2'),
    // Add more images if needed
  ];

  const overallProgress = Math.min(scrollTop / (window.innerHeight * images.length), 1);
  const segment = 1 / images.length;

  images.forEach((img, idx) => {
    const start = idx * segment;
    const end = start + segment;

    if (overallProgress >= start && overallProgress <= end) {
      const localProgress = (overallProgress - start) / segment;

      if (localProgress <= 0.5) {
        img.style.opacity = (localProgress * 2).toString(); // fade in
      } else {
        img.style.opacity = ((1 - localProgress) * 2).toString(); // fade out
      }
    } else {
      img.style.opacity = '0';
    }
  });
});

window.dispatchEvent(new Event('scroll'));
