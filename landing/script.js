const navToggleButton = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

if (navToggleButton && primaryNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for on-page anchor links
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.matches('a[href^="#"]')) {
    const id = target.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el) {
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (primaryNav && primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        navToggleButton?.setAttribute('aria-expanded', 'false');
      }
    }
  }
});

// Fake submit for the email form
const ctaForm = document.querySelector('.cta-form');
ctaForm?.addEventListener('submit', () => {
  const email = ctaForm.querySelector('input[type="email"]');
  const value = email && 'value' in email ? email.value : '';
  alert(`Thanks! We'll reach out to ${value || 'your email'} soon.`);
});

