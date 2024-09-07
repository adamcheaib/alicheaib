"use strict"

const modelsOptionsBtns = document.querySelectorAll(".modelsOptions");

modelsOptionsBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        // Add a loading screen here for the category change!
        document.getElementById("selectedFilter").id = "";
        event.target.id = "selectedFilter";

        const selectedFilter = document.getElementById("selectedFilter").dataset.name;
        document.querySelector(".view").classList.toggle("view");

        const filter3dContainer = document.querySelector(`.view3dContainer[data-name=${selectedFilter}]`)
        filter3dContainer.classList.toggle("view");
    })
})