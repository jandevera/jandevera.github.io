window.addEventListener('load', function () {
    // set year of footer
    document.querySelector("body > footer small").innerHTML = `&copy; ${new Date().getFullYear()} Jan de Vera`;

    // set sticky footer
    document.querySelector("body > footer").style.position = document.body.offsetHeight > window.innerHeight ? "static" : "fixed";
    document.querySelector("header button").onclick = () => {
        let headerMenu = document.querySelector("header ul");

        if (headerMenu.classList.contains("show-menu-on-mobile")) {
            headerMenu.classList.remove("show-menu-on-mobile");
        } else {
            headerMenu.classList.add("show-menu-on-mobile");
        }
    }

    // check footer status on resize
    window.addEventListener("resize", () => {
        document.querySelector("body > footer").style.position = document.body.offsetHeight > window.innerHeight ? "static" : "fixed";
    });
});