window.sr = ScrollReveal({ reset: true });
sr.reveal('.section-container', { duration: 2500 });
sr.reveal('.divisao', { duration: 2500 });
sr.reveal('.projetos-container', { duration: 2500 });

const clicado = document.querySelectorAll('.li');

function descricao(index) {
	const titulo = document.querySelector('.titulo');
	const data = document.querySelector('.data');
	const local = document.querySelector('.local');
	const desc = document.querySelector('.desc2');
	if (index === 0) {
		titulo.innerHTML = 'Técnico em informática';
		data.innerHTML = 'Fev 2020 - 2022 - atual';
		local.innerHTML = 'UFPI/CTT COLÉGIO TÉCNICO DE TERESINA';
		desc.innerHTML =
			'No curso técnico em informática aprendi várias linguagens de programação (PHP, PYTHON), linguagem de marcação (HTML5) e linguagem de estilização (CSS3), tive também aprendizados com banco de dados com SQL por meio do MySQL. E como um bom curso de informática, aprendi a fazer manutenção e formatação de desktops.';
	} else if (index == 1) {
		titulo.innerHTML = 'Projeto Pessoal';
		data.innerHTML = '2022';
		local.innerHTML = '';
		desc.innerHTML =
			'Projeto que eu Desenvolvi Usando Javascript e React, que basicamente é um encurtador de links que usa a API do bit.ly para encurtar links. ';
	} else if (index == 2) {
		titulo.innerHTML = 'em breve';
		data.innerHTML = '00/00/0000';
		local.innerHTML = 'em breve';
		desc.innerHTML =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor, sed quaerat excepturi placeat labore non ad voluptatibus quae quidem maxime iure reprehenderit commodi expedita omnis nisi similique minima provident!';
	} else {
		titulo.innerHTML = 'em breve';
		data.innerHTML = '00/00/0000';
		local.innerHTML = 'em breve';
		desc.innerHTML =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor, sed quaerat excepturi placeat labore non ad voluptatibus quae quidem maxime iure reprehenderit commodi expedita omnis nisi similique minima provident! ';
	}
}
for (let i = 0; i < clicado.length; i++) {
	clicado[i].addEventListener('click', () => {
		for (let j = 0; j < clicado.length; j++) {
			clicado[j].classList.remove('ativo');
		}
		clicado[i].classList.add('ativo');
		descricao(i);
	});
}

const subirTopo = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

const btnMostraOculta = () => {
	window.scrollY === 0
		? (document.querySelector('.scroll').style.display = 'none')
		: (document.querySelector('.scroll').style.display = 'block');
};
window.addEventListener('scroll', btnMostraOculta);
