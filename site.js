(()=>{
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#nav');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const expanded=menu.getAttribute('aria-expanded')==='true';
      menu.setAttribute('aria-expanded',String(!expanded));
      nav.classList.toggle('open',!expanded);
      menu.querySelector('.menu-label').textContent=expanded?'Menu':'Close';
      menu.querySelector('.menu-glyph').textContent=expanded?'☰':'×';
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&nav.classList.contains('open')){
        nav.classList.remove('open');menu.setAttribute('aria-expanded','false');
        menu.querySelector('.menu-label').textContent='Menu';
        menu.querySelector('.menu-glyph').textContent='☰';menu.focus();
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
