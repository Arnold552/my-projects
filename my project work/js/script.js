// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1 && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Scroll-to-top
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.id = 'topBtn';
topBtn.style.position='fixed';
topBtn.style.right='20px';
topBtn.style.bottom='20px';
topBtn.style.padding='10px 14px';
topBtn.style.display='none';
topBtn.style.border='none';
topBtn.style.borderRadius='8px';
topBtn.style.background='#0b5cff';
topBtn.style.color='white';
topBtn.style.cursor='pointer';
document.body.appendChild(topBtn);
topBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));
window.addEventListener('scroll', ()=> {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Simple contact form feedback (front-end)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const note = document.getElementById('formNote');
    note.textContent = 'Thanks, Mwesige — your message was captured (front-end demo).';
    contactForm.reset();
  });
}
