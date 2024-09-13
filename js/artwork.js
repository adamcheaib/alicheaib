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
            <img data-imageindex="${imageIndex}" class="${columnClass}Images renderedImage" src="${imagePath}" />`;

        imageIndex++;
        columnIndex++;
        if (columnIndex === columnOrder.length) columnIndex = 0;

        console.log(pictureContainer);
        pictureContainer.querySelector("img").onclick = appendImagesToCarousel;
        parent.appendChild(pictureContainer);
    });

    removeLoadingScreen();
    renderCarousel();
}

loadImages(urlArtwork);