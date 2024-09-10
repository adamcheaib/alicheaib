"use strict"
let url3D = "../../backend/backend.php?category=3d&subCategory=characters,models,products";

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


async function load_images(url) {
    renderLoadingScreen("wrapper");
    const response = await fetch(url);

    if (!response.ok) {
        removeLoadingScreen();
        alert("Ooops... Something went wrong!");
        return;
    }

    removeLoadingScreen();
    const resource = await response.json();

    for (const categoryName in resource) {
        let parent = document.querySelector(`.view3dContainer[data-name="${categoryName}"]`);

        if (resource[categoryName].length !== 0) {
            resource[categoryName].forEach(image => {
                const phonePath = image.replace("pc", "phone");

                const pictureContainer = document.createElement("picture");
                pictureContainer;
                pictureContainer.innerHTML = `
                <source srcset="${phonePath}" media="(max-width: 768px)" />
                <img class="renderedImage" src="${image}" />`;

                parent.appendChild(pictureContainer);
            });
        } else {
            parent.innerHTML = "<h1 style='grid-column: 1 / 4; text-align: center;'>This sub-category is currently empty!</h1>";
        }
    }

}

load_images(url3D);