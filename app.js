fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.querySelector('.projects');
    data.forEach(project => {
      const projectHTML = `
        <div class="project">
          <img class="project-img" src="${project.image}" alt="project-img">
          <div class="project-name">
            <b>${project.name}</b>
          </div>
          <div class="project-description">
            ${project.description}
          </div>
        </div>
      `;
      projectsContainer.innerHTML += projectHTML;
    });
  });