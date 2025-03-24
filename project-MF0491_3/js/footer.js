function createFooter() {
    footer.innerHTML = `
        <section class="footer-left">
            <div class="logo">
                <img src="./assets/logo/circle.svg" alt="circle-logo" />
            </div>
            <address>2972 Westheimer Rd. Santa Ana,<br>Illinois 85486</address>
        </section>
        <section class="footer-right">
            <ul>
                <li><a href="#">Team</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </section>
    `;

    return footer;
}

function loadFooter() {
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.appendChild(createFooter());
    }
}
  
// Asegurar que el footer se carga cuando el DOM está listo
document.addEventListener("DOMContentLoaded", loadFooter);