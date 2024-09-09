"use strict"

const modelsOptionsBtns = document.querySelectorAll(".modelsOptions");

modelsOptionsBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {

        document.getElementById("selectedFilter").id = "";
        event.target.id = "selectedFilter";

        const selectedFilter = document.getElementById("selectedFilter").dataset.name;
        document.querySelector(".view").classList.toggle("view");

        const filter3dContainer = document.querySelector(`.view3dContainer[data-name=${selectedFilter}]`)
        filter3dContainer.classList.toggle("view");
    })
});

fetch("/backend/backend.php?category=3d&subCategory=characters,models").then(r => r.json()).then(console.log);

async function load_images(link) {

}
