const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
  root.dataset.theme = 'dark';
}

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
