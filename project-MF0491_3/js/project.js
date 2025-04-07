window.addEventListener("load", async () => {
    try {
        // API endpoint
        const apiUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

        // Get UUID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectUUID = urlParams.get("uuid");

        // Get data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Error getting projects");
        }
        const projects = await response.json();

        if (projectUUID) {
            // Find the corresponding project based on the UUID obtained from the URL
            const project = projects.find(p => p.uuid === projectUUID);
            
            if (!project) {
                alert("The project doesn't exist");
                return;
            }

            // Insert the data into the template
            document.querySelector(".project-title").textContent = project.name;
            document.querySelector(".project-subtitle").textContent = project.description;
            document.querySelector(".project-date span").textContent = project.completed_on;
            document.querySelector(".project-image").style.backgroundImage = `url('${project.image}')`;
            document.querySelector(".project-text").innerHTML = project.content;
        }

        // Filter other projects (excluding the current one if it exists)
        let otherProjects = projects.filter(p => p.uuid !== projectUUID);

        // If there are less than 3 projects, alert the user
        if (otherProjects.length < 3) {
            alert("There aren't enough projects to show.");
            return;
        }

        // Take 3 random projects
        otherProjects = otherProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Select the container where the projects will be added
        const projectsList = document.querySelector(".projects-list");

        // Clear any existing content
        projectsList.innerHTML = "";

        // Dynamically generate and add project cards
        otherProjects.forEach(p => {
            const projectCard = document.createElement("article");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <figure style="background-image: url('${p.image}');"></figure>
                <div class="card-content">
                    <h2 class="card-title">${p.name}</h2>
                    <p class="card-text">${p.description}</p>
                    <a href="./project.html?uuid=${p.uuid}" class="card-link">Learn more</a>
                </div>
            `;

            projectsList.appendChild(projectCard);
        });
    } catch (error) {
        console.error("There was an error:", error);
    }
});