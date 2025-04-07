// Create Footer
function createFooter() {
    return `
        <section id="newsletter">
            <h3>Do you have any questions?</h3>
            <p>Let us help you!</p>
            <div class="email-box">
                <input name="email" type="email" placeholder="Enter your email">
                <button class="btn-primary">Subscribe</button>
            </div>
        </section>
        <section class="footer">
            <article class="footer-left">
                <div class="logo">
                    <img src="/assets/logo/circle.svg" alt="circle-logo" />
                </div>
                <address>2972 Westheimer Rd. Santa Ana,<br>Illinois 85486</address>
            </article>
            <article class="footer-right">
                <ul class="footer-links">
                    <li><a href="/pages/404.html">Team</a></li>
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/pages/404.html">About Us</a></li>
                    <li><a href="/pages/404.html">Press</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/pages/404.html">Privacy Policy</a></li>
                </ul>
            </article>
        </section>
        <button id="scrollTopBtn" title="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
    `;
}

// Load Footer
function loadFooter() {
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        footerContainer.innerHTML= createFooter();

        //Scroll up button
        const scrollBtn = document.getElementById("scrollTopBtn");

        // Show/hide button on scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        // Back to top
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

document.addEventListener("DOMContentLoaded", loadFooter);