function createHeader() {
    header.innerHTML = `
        <div class="logo">
            <img src="./assets/logo/circle.svg" alt="circle-logo" />
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>
        <a href="/contact" class="btn-contact">Contact Us</a>
      `;
  
    return header;
  }
  
  function loadHeader() {
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
      headerContainer.appendChild(createHeader());
    }
  }
  
  // Asegurar que el header se carga cuando el DOM está listo
  document.addEventListener("DOMContentLoaded", loadHeader);