const sr = ScrollReveal({ reset: true });
sr.reveal('.section-container', { duration: 2500 });
sr.reveal('.divisao', { duration: 2500 });
ScrollReveal().reveal('.projetos-container', { duration: 2500 });

interface XpUser {
  name: string;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
}
const xpUser: XpUser[] = [
  {
    name: 'Curso TI',
    titulo: 'Técnico em Informática',
    data: 'Fev 2020 - 2022 - atual',
    local: 'UFPI/CTT COLÉGIO TÉCNICO DE TERESINA',
    descricao:
      'No curso técnico em informática aprendi várias linguagens de programação (PHP, PYTHON), linguagem de marcação (HTML5) e linguagem de estilização (CSS3), tive também aprendizados com banco de dados com SQL por meio do MySQL. E como um bom curso de informática, aprendi a fazer manutenção e formatação de desktops.',
  },
  {
    name: 'Em aberto',
    titulo: 'xxxx',
    data: '00/00/0000',
    local: 'xxxx',
    descricao: 'xxxx',
  },
  {
    name: 'Em aberto',
    titulo: 'xxxx',
    data: '00/00/0000',
    local: 'xxxx',
    descricao: 'xxxx',
  },
  {
    name: 'Em aberto',
    titulo: 'xxxx',
    data: '00/00/0000',
    local: 'xxxx',
    descricao: 'xxxx',
  },
];

const clicadoLi = document.querySelectorAll(
  '.xp .li',
) as NodeListOf<HTMLLIElement>;

function experiencia(e: number): void {
  const ativo = document.querySelector('.xp .ativo') as HTMLElement;
  const i = document.querySelector('.titulo') as HTMLElement;
  const o = document.querySelector('.data') as HTMLElement;
  const r = document.querySelector('.local') as HTMLElement;
  const a = document.querySelector('.desc2') as HTMLElement;

  const xpLoop = xpUser.forEach((xp, index): void => {
    const { name, titulo, data, local, descricao } = xp;

    if (index === e) {
      ativo.innerHTML = name;
      i.innerHTML = titulo;
      o.innerHTML = data;
      r.innerHTML = local;
      a.innerHTML = descricao;
      return;
    }
  });
}

clicadoLi.forEach((e, i) => {
  e.addEventListener('click', () => {
    clicadoLi.forEach((e) => {
      e.classList.remove('ativo');
    }),
      e.classList.add('ativo'),
      experiencia(i);
  });
});

const subirTopo = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function btnMostraOculta(): void {
  if (0 === window.scrollY) {
    const scroll = document.querySelector('.scroll') as HTMLElement;
    scroll.style.display = 'none';
  } else {
    const scrollBlock = document.querySelector('.scroll') as HTMLElement;
    scrollBlock.style.display = 'block';
  }
}

window.addEventListener('scroll', btnMostraOculta);
