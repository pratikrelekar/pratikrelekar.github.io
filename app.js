const toggle = document.querySelector('[data-toggle]');
const nav = document.querySelector('[data-links]');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('show');toggle.setAttribute('aria-expanded', String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});

// Animate the main homepage name once per page load.
(function () {
  const el = document.querySelector('[data-typewriter-name]');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fullName = el.dataset.typewriterName || el.textContent.trim();
  if (!fullName) return;
  el.classList.add('is-typing');
  el.textContent = '';
  let i = 0;
  function typeNext() {
    if (i >= fullName.length) return;
    el.textContent += fullName.charAt(i++);
    if (i < fullName.length) window.setTimeout(typeNext, 85);
  }
  window.setTimeout(typeNext, 300);
})();
