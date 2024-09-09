"use strict"

/*

For the descriptions here, add an array that has the same length as the files. Below is a visualization of the structure:

P = Prints
L = Logos
W = Websites

                        Array
                         |
                      ___|___
                      |  |  |
                      P  L  W
                    / \
                   /  \
                  /   \
               Title  Description
 */


let urlDesign = "../../backend/backend.php?category=design&subCategory=prints,logos,websites";

const designOptionsBtns = document.querySelectorAll(".designOptions");

designOptionsBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {

        document.getElementById("selectedFilter").id = "";
        event.target.id = "selectedFilter";

        const selectedFilter = document.getElementById("selectedFilter").dataset.name;
        document.querySelector(".view").classList.toggle("view");

        const filterDesignContainer = document.querySelector(`.viewDesignContainer[data-name=${selectedFilter}]`)
        filterDesignContainer.classList.toggle("view");
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
    console.log(resource);

    for (const categoryName in resource) {
        console.log(categoryName);
        let parent = document.querySelector(`.viewDesignContainer[data-name="${categoryName}"]`);

        if (resource[categoryName].length !== 0) {
            resource[categoryName].forEach(image => {
                const phonePath = image.replace("pc", "phone");

                const designImageContainer = document.createElement("div");
                designImageContainer.className = "designImageContainer";

                const picture = document.createElement("picture");

                picture.innerHTML = `
                <source srcset="${phonePath}" media="(max-width: 768px)" />
                <img class="renderedImage" src="${image}" />`;

                const title = document.createElement("h3");
                title.className = "designTitle";
                title.textContent = "Test Title";

                const description = document.createElement("p");
                description.className = "designDescription";
                description.textContent = "This image turns me on!";

                designImageContainer.append(picture);
                designImageContainer.appendChild(title);
                designImageContainer.appendChild(description);


                parent.appendChild(designImageContainer);
            });
        } else {
            parent.innerHTML = "<h1 style='grid-column: 1 / 4; text-align: center;'>This sub-category is currently empty!</h1>";
        }
    }

}

load_images(urlDesign);