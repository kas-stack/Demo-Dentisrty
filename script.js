/* JS: тема, анимации, счётчики, слайдер, форма */
const root=document.documentElement;
document.getElementById('theme').onclick=()=>{
  const dark=getComputedStyle(root).getPropertyValue('--bg').trim()==='#071a22';
  root.dataset.theme=dark?'light':'dark';
};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('[data-n]').forEach(el=>{
  const to=parseFloat(el.dataset.n),dec=String(to).includes('.')?1:0,s=el.dataset.s||'';let t0;
  const tick=t=>{t0??=t;const k=Math.min((t-t0)/1400,1);el.textContent=(to*k).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+(k===1?s:'');if(k<1)requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
});
const ba=document.getElementById('ba');
ba.querySelector('input').oninput=e=>ba.style.setProperty('--p',e.target.value+'%');
document.getElementById('form').onsubmit=e=>{
  e.preventDefault();
  // Здесь подключается бэкенд: Supabase insert / Telegram-бот / WhatsApp
  document.getElementById('ok').style.display='block';e.target.reset();
};
