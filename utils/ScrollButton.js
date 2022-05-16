const scrollButton = document.querySelector(".scroll-to-top");

document.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        scrollToTopButton.style.visibility = "visible";
    } else {
        scrollToTopButton.style.visibility = "hidden";
    }
});


scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});