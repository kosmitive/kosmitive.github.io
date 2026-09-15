(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  function sync() {
    try {
      const stored = localStorage.getItem('theme');
      preference = stored === 'light' || stored === 'dark' ? stored : null;
    } catch (_) { /* Keep the in-memory choice when storage is unavailable. */ }
    apply(preference || (system.matches ? 'dark' : 'light'));
  }

  function apply(theme) {
    root.dataset.theme = theme;
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('aria-checked', String(theme === 'dark'));
    }
  }

  sync();
  window.addEventListener('pageshow', sync);
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme' || event.key === null) sync();
  });
  system.addEventListener('change', (event) => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    sync();
    document.getElementById('theme-control').hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try { localStorage.setItem('theme', preference); } catch (_) { /* Optional persistence. */ }
    });
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      preference = event.key === 'ArrowRight' ? 'dark' : 'light';
      apply(preference);
      try { localStorage.setItem('theme', preference); } catch (_) { /* Optional persistence. */ }
    });
  });
})();
