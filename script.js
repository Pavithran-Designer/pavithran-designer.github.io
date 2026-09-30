document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero-text');
  if (!hero) return;

  const text = "Hi, I'm Pavithran with 4+ years of experience across QA, UI/UX & Visual Design, blending quality, usability, and visual thinking to create better digital experiences.";
  hero.innerHTML = text
    .split(' ')
    .map((word, i) => `<span class="hero-word" style="animation-delay: ${i * 60}ms">${word}</span>`)
    .join(' ');
});
