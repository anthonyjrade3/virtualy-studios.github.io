let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
});