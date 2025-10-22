
// Basic client-side navigation highlight and small interactions
document.addEventListener('DOMContentLoaded', ()=>{
  // mark active link by current filename
  const path = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if(a.getAttribute('href') === path || (path==='' && a.getAttribute('href')==='index.html')){
      a.classList.add('active');
    }
  });

  // simple mobile nav toggle if needed (not visible on desktop sample)
  const navToggle = document.getElementById('navToggle');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const links = document.querySelector('.nav-links');
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // demo: submit contact form (no backend) shows thank you message
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = document.getElementById('contactMsg');
      msg.textContent = 'Thanks — we received your message. Our support team will contact you soon.';
      msg.style.color = 'green';
      contactForm.reset();
    });
  }

  // small transfer demo for login page
  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const user = document.getElementById('username').value;
      const msg = document.getElementById('loginMsg');
      msg.textContent = 'Welcome back, ' + (user||'User') + '! (Demo)';
      msg.style.color = 'var(--accent)';
      setTimeout(()=>{ window.location.href = 'index.html'; }, 900);
    });
  }
});
