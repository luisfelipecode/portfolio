const btnMobile = document.getElementById('btn-mobile') as HTMLElement;

function toggleMenu(event: any): void {
  'touchstart' === event.type ? event.preventDefault() : null;
  const nav = document.getElementById('nav') as HTMLElement;
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  btnMobile.classList.toggle('active', active);
  nav.addEventListener('click', (event: any) => {
    event.target.tagName === 'A' ? nav.classList.remove('active') : null;
  });
}
btnMobile.addEventListener('click', toggleMenu),
  btnMobile.addEventListener('touchstart', toggleMenu);
