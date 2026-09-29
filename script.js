document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero-text');
  if (!hero) return;

  const text = 'Hi, I am a UI/UX Designer with 4 years of experience.';
  hero.innerHTML = text
    .split(' ')
    .map((word, i) => `<span class="hero-word" style="animation-delay: ${i * 60}ms">${word}</span>`)
    .join(' ');
});
