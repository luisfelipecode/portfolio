"use strict";
const sr = ScrollReveal({ reset: true });
sr.reveal('.section-container', { duration: 2500 });
sr.reveal('.divisao', { duration: 2500 });
ScrollReveal().reveal('.projetos-container', { duration: 2500 });
const xpUser = [
    {
        name: 'Curso TI',
        titulo: 'Técnico em Informática',
        data: 'Fev 2020 - 2022 - atual',
        local: 'UFPI/CTT COLÉGIO TÉCNICO DE TERESINA',
        descricao: 'No curso técnico em informática aprendi várias linguagens de programação (PHP, PYTHON), linguagem de marcação (HTML5) e linguagem de estilização (CSS3), tive também aprendizados com banco de dados com SQL por meio do MySQL. E como um bom curso de informática, aprendi a fazer manutenção e formatação de desktops.',
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
const clicadoLi = document.querySelectorAll('.xp .li');
function experiencia(e) {
    const ativo = document.querySelector('.xp .ativo');
    const i = document.querySelector('.titulo');
    const o = document.querySelector('.data');
    const r = document.querySelector('.local');
    const a = document.querySelector('.desc2');
    const xpLoop = xpUser.forEach((xp, index) => {
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
function btnMostraOculta() {
    if (0 === window.scrollY) {
        const scroll = document.querySelector('.scroll');
        scroll.style.display = 'none';
    }
    else {
        const scrollBlock = document.querySelector('.scroll');
        scrollBlock.style.display = 'block';
    }
}
window.addEventListener('scroll', btnMostraOculta);
