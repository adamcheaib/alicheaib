"use strict";

let urlArtwork = "../../backend/backend.php?category=artwork";

async function loadImages(url) {
    renderLoadingScreen("wrapper");
    const response = await fetch(url);

    if (!response.ok) {
        removeLoadingScreen("wrapper");
        alert("Ooops... Something went wrong!");
        return;
    }

    const resource = await response.json();
    let imageIndex = 0;
    let columnOrder = ["left", "left", "center", "right", "right"];
    let columnIndex = 0;

    resource.forEach(imagePath => {
        let phonePath = imagePath.replace("pc", "phone");
        const pictureContainer = document.createElement("picture");
        let columnClass = columnOrder[columnIndex];
        let parent = document.querySelector("." + columnOrder[columnIndex]);

        pictureContainer.innerHTML = `
            <source srcset="${phonePath}" media="(max-width: 768px)" />
            <img class="${columnClass}Images renderedImage" src="${imagePath}" />`;

        columnIndex++;
        if (columnIndex === columnOrder.length) columnIndex = 0;

        pictureContainer.querySelector("img").onclick = appendImagesToCarousel;
        parent.appendChild(pictureContainer);
    });

    const allAppendedImages = document.querySelectorAll(".renderedImage");
    allAppendedImages.forEach(image => {
        image.dataset.imageindex = imageIndex;
        imageIndex++;
    })
    console.log(document.querySelectorAll(".renderedImage"));

    removeLoadingScreen();
    renderCarousel();
}

loadImages(urlArtwork);