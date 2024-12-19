document.addEventListener("scroll", function () {
    const contenidortaula = document.querySelector(".contenidortaula");

    if (window.scrollY > 10) { // Desplaçament mínim en píxels
        contenidortaula.classList.add("scroll");
    } else {
        contenidortaula.classList.remove("scroll");
    }
});