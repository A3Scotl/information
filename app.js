
document.addEventListener("DOMContentLoaded", () => {
  var showAll = document.getElementById("show-all");
  showAll.classList.add('isselected');
  const projectsContainer = document.querySelector('.projects');
    projectsContainer.innerHTML = '';
     // Reset the container to empty
    fetch('./json-data/java-app.json')
     .then(response => response.json())
     .then(javaAppData => {
        fetch('./json-data/web-clone.json')
         .then(response => response.json())
         .then(webCloneData => {
            const allProjects = [...javaAppData,...webCloneData]; // Combine the data
            allProjects.forEach(project => {
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
      });
});
document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector('.projects');
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      projectsContainer.innerHTML = ''; // Reset the container to empty
      buttons.forEach(btn => btn.classList.remove('isselected'));
      let fetchData;
      switch (button.id) {
        case 'show-web-clone':
          fetchData = fetch('./json-data/web-clone.json');
          button.classList.add('isselected');
          break;
        case 'show-java-app':
          button.classList.add('isselected');
          
          fetchData = fetch('./json-data/java-app.json');
          break;
      }

      fetchData.then(response => response.json())
        .then(data => {
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
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  var showAll = document.getElementById("show-all");
  showAll.addEventListener("click", () => {
    const projectsContainer = document.querySelector('.projects');

    // Remove isselected class from all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('isselected'));

    // Add isselected class to the showAll button
    showAll.classList.add('isselected');

    // Reset the container to empty
    projectsContainer.innerHTML = ''; 

    // Fetch data and render projects
    fetch('./json-data/java-app.json')
    .then(response => response.json())
    .then(javaAppData => {
        fetch('./json-data/web-clone.json')
        .then(response => response.json())
        .then(webCloneData => {
            const allProjects = [...javaAppData,...webCloneData]; // Combine the data
            allProjects.forEach(project => {
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
      });
  });
});