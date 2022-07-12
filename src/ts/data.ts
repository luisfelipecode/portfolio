interface Project {
  image_url: string;
  nameProject: string;
  descricao: string;
  tech: string;
  gitHubLink: string;
}

const dados: Project[] = [
  {
    image_url: './src/img/desafio-1-recorte.png',
    nameProject: 'Blog Codelândia',
    descricao:
      'Projeto que eu Desenvolvi Usando HTML e CSS para criar um blog.',
    tech: 'HTML,CSS',
    gitHubLink: 'https://github.com/luisfelipecode/blog-desafio-1',
  },
  {
    image_url: './src/img/preview-project-spotify.png',
    nameProject: 'Clone spotify',
    descricao:
      'Projeto que eu Desenvolvi Usando HTML e CSS, Clone da interface Web do Spotify.',
    tech: 'HTML,CSS',
    gitHubLink: 'https://github.com/luisfelipecode/spotify-clone',
  },
  {
    image_url: './src/img/todo-list.png',
    nameProject: 'Lista de Tarefas',
    descricao:
      'Projeto que eu Desenvolvi um todo-list ele persiste os dados no navegador.',
    tech: 'HTML,CSS,Javascript',
    gitHubLink: 'https://github.com/luisfelipecode/lista-tarefas',
  },
];
function renderProjects(): void {
  const imagemDoProjeto = document.querySelectorAll(
    '.image-project',
  ) as NodeListOf<HTMLElement>;
  const nomeDoProjeto = document.querySelectorAll(
    '.name-project',
  ) as NodeListOf<HTMLElement>;
  const description = document.querySelectorAll(
    '.description',
  ) as NodeListOf<HTMLElement>;
  const technologies = document.querySelectorAll(
    '.technologies',
  ) as NodeListOf<HTMLElement>;
  const linkDoProjeto = document.querySelectorAll(
    '.gitHub-link',
  ) as NodeListOf<HTMLElement>;

  return dados.forEach((dado, index) => {
    const { nameProject, descricao, tech, gitHubLink } = dado;
    imagemDoProjeto[index].setAttribute('src', dado.image_url);
    imagemDoProjeto[index].setAttribute('alt', nameProject);
    nomeDoProjeto[index].innerHTML = nameProject;
    description[index].innerHTML = descricao;
    technologies[index].innerHTML = tech;
    linkDoProjeto[index].setAttribute('href', gitHubLink);
  });
}

renderProjects();
