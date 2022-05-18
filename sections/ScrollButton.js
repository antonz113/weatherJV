const scrollButton = document.querySelector(".scroll-to-top");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

document.addEventListener("scroll", () => {
    const viewportHeight = window.innerHeight;
    if (window.scrollY > viewportHeight / 2){
        scrollButton.style.visibility = "visible";
    } else {
        scrollButton.style.visibility = "hidden";
    }
});