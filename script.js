window.addEventListener('load', function () {
    let siteHeaderValue = `
        <header>
            <div class="container">
                <h1>Jan de Vera</h1>
                <button>
                    <span class="fa fa-bars"></span>
                </button>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </div>
        </header>
    `;
    let siteFooterValue = `
        <footer>
            <div class="container">
                <ul>
                    <li>
                        <a href="mailto:deveraj.slash@gmail.com">
                            <span class="fa fa-envelope"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/boringlyboring">
                            <span class="fa fa-facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/boringlyboring">
                            <span class="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/boringlyboring">
                            <span class="fa fa-instagram"></span>
                        </a>
                    </li>
                </ul>
                <small>&copy; ${new Date().getFullYear()} Jan de Vera</small>
            </div>
        </footer>
    `;
    let bodyContent = document.body.innerHTML;

    document.body.innerHTML = siteHeaderValue + bodyContent + siteFooterValue;
    document.querySelector("body > footer").style.position = document.body.offsetHeight > window.innerHeight ? "static" : "fixed";
    document.querySelector("header button").onclick = () => {
        let headerMenu = document.querySelector("header ul");

        if (headerMenu.classList.contains("show-menu-on-mobile")) {
            headerMenu.classList.remove("show-menu-on-mobile");
        } else {
            headerMenu.classList.add("show-menu-on-mobile");
        }
    }

    window.addEventListener("resize", () => {
        document.querySelector("body > footer").style.position = document.body.offsetHeight > window.innerHeight ? "static" : "fixed";
    });
});