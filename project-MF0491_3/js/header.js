// Create Header
function createHeader() {
  return `
    <div class="logo">
      <a href="/index.html">
        <img src="/assets/logo/circle.svg" alt="circle-logo" />
      </a>
    </div>

    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <label for="nav-toggle" class="nav-toggle-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav class="menu">
      <ul>
        <li class="active"><a href="/index.html">Home</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#services">Services</a></li>
        <li class="btn-contact-menu"><a href="/pages/contact.html" class="btn-primary">Contact Us</a></li>
      </ul>
    </nav>
    <a href="/pages/contact.html" class="btn-primary btn-contact">Contact Us</a>
  `;
}

// Load Header
function loadHeader() {
  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = createHeader();

    // No-scroll on mobile menu
    const navToggle = document.getElementById("nav-toggle");
    if (navToggle) {
      navToggle.addEventListener("change", () => {
        document.body.classList.toggle("no-scroll", navToggle.checked);
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);
