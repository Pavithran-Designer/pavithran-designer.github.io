document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero-text');
  if (!hero) return;

  const text = "Hi, I'm Pavithran, I turn complex ideas into simple, intuitive digital experiences. UI/UX & Product Designer focused on creating user-centered, visually engaging and functional digital products.";
  hero.innerHTML = text
    .split(' ')
    .map((word, i) => `<span class="hero-word" style="animation-delay: ${i * 60}ms">${word}</span>`)
    .join(' ');
});
