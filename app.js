const toggle = document.querySelector('[data-toggle]');
const nav = document.querySelector('[data-links]');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('show');toggle.setAttribute('aria-expanded', String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});
