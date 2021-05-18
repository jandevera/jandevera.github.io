window.addEventListener('load', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title');

    fetch(`/posts-md-version/${title}.md`)
        .then(res => {
            if (res.status === 404) {
                window.location.href = "/404.html";
            }

            return res.text();
        })
        .then(res => {
            document.querySelector('.content .col-12').innerHTML = marked(res);
            document.title = `${document.querySelector(".content .col-12 h1").textContent} - Jan de Vera`;
        });
});