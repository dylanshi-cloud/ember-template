document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})})
  const r=document.querySelectorAll('.ember-card,.process,.product,.pricing__card,.story,.section-header,.hero__content')
  const o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal--visible');o.unobserve(e.target)}})},{threshold:0.1})
  r.forEach(e=>{e.classList.add('reveal');o.observe(e)})
  document.querySelectorAll('.grid').forEach(g=>{g.querySelectorAll('.ember-card').forEach((c,i)=>{c.style.transitionDelay=i*0.07+'s'})})
  const f=document.querySelector('.contact__form');if(f){f.addEventListener('submit',e=>{e.preventDefault();const i=f.querySelector('input').value.trim();if(i)window.open('mailto:dylan_shi@hotmail.com?subject=Ember Template Inquiry&body='+encodeURIComponent('Hi, I\'m interested in Ember.\n\nEmail: '+i),'_blank')})}
})