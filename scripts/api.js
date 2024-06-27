const projectsContainer = document.getElementById('projects');

const renderProject = (project) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const projectNameElement = document.createElement('h2');
  projectNameElement.textContent = project.name;

  const projectDescriptionElement = document.createElement('p');
  projectDescriptionElement.textContent = project.description;

  const projectUrlElement = document.createElement('a');
  projectUrlElement.href = project.html_url;
  projectUrlElement.textContent = 'View on GitHub';

  projectElement.appendChild(projectNameElement);
  projectElement.appendChild(projectDescriptionElement);
  projectElement.appendChild(projectUrlElement);

  return projectElement;
};

const renderProjects = (projects) => {
  projects.forEach((project) => {
    projectsContainer.appendChild(renderProject(project));
  });
};

const githubApiRequest = async () => {
    const response = await fetch('https://api.github.com/users/voutouz/repos');
    const projects = await response.json();
    return projects.filter((project) => !project.fork);
  };

githubApiRequest()
  .then((projects) => {
    renderProjects(projects);
  })
  .catch((error) => {
    console.error('Error fetching GitHub projects:', error);
  });