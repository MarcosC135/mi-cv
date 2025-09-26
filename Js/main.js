let enlaces_header = document.querySelector(".enlaces-header");
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    let isOpen = enlaces_header.classList.toggle("hamburgueropen");
    hamburguer.style.color = isOpen ? "#fff" : "#000";
});

enlaces_header.addEventListener("click", function () {
    enlaces_header.classList.remove("hamburgueropen");
    hamburguer.style.color = "#000";
});
