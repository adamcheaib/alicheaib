"use strict"

let testLink = "https://e7.pngegg.com/pngimages/640/776/png-clipart-testng-logo-software-testing-software-framework-computer-icons-automation-testing-angle-text.png";

const nav = document.createElement("nav");
nav.style.backgroundColor = "purple";
document.querySelector("#wrapper").prepend(nav);

function renderPhoneMenu(menuOptions, logoSrc = testLink) {
    const phoneMenuContainer = document.createElement("div");
    phoneMenuContainer.id = "phoneMenuContainer";

    phoneMenuContainer.style.display = "grid";
    phoneMenuContainer.style.gridColumns = "1fr";
    phoneMenuContainer.style.gridRows = "1fr";
    phoneMenuContainer.style.maxWidth = "1200px";
    phoneMenuContainer.style.marginInline = "auto";

    const siteLogo = document.createElement("img");
    siteLogo.id = "siteLogo";
    siteLogo.src = logoSrc;
    siteLogo.style.justifySelf = "center";
    siteLogo.style.alignSelf = "center";
    siteLogo.style.gridColumn = "1";
    siteLogo.style.gridRow = "1";
    siteLogo.style.justifySelf = "center";
    siteLogo.style.alignSelf = "center";
    siteLogo.style.width = "100px";
    siteLogo.style.height = "50px";
    phoneMenuContainer.appendChild(siteLogo);

    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.innerHTML = `<hr style="margin: 0 0 4px 0"><hr style="margin: 0 0 4px 0"><hr style="margin: 0 0 4px 0">`;

    hamburgerMenu.style.gridColumn = "1";
    hamburgerMenu.style.gridRow = "1";
    hamburgerMenu.style.width = "45px";
    hamburgerMenu.style.justifySelf = "end";
    hamburgerMenu.style.marginRight = "15px";
    hamburgerMenu.style.alignSelf = "center";
    phoneMenuContainer.appendChild(hamburgerMenu);

    const phoneMenuPopup = document.createElement("div");

    phoneMenuPopup.innerHTML = `
        <div id="phoneCloseContainer" style="width: 100vw; max-width: 300px; display: flex; justify-content: end">
            <svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="black"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        </div>
        
        <div id="phoneMenuButtons"></div>`;

    phoneMenuPopup.id = "phoneMenuPopup";
    phoneMenuPopup.style.height = "100vh";
    phoneMenuPopup.style.width = "100vw";
    phoneMenuPopup.style.display = "flex";
    phoneMenuPopup.style.flexDirection = "column";
    phoneMenuPopup.style.alignItems = "center";
    phoneMenuPopup.style.paddingTop = "200px";
    phoneMenuPopup.style.background = "rgba(255,255,255, 0.8)";
    phoneMenuPopup.style.position = "fixed";
    phoneMenuPopup.style.left = "200vw";
    phoneMenuPopup.style.top = "0";
    phoneMenuPopup.style.transition = "left 400ms";


    const closeBtn = phoneMenuPopup.querySelector("#closeBtn");
    closeBtn.onclick = () => phoneMenuPopup.style.left = "200vw";

    const phoneMenuButtons = phoneMenuPopup.querySelector("#phoneMenuButtons");

    menuOptions.forEach(btn => {
        const phoneMenuButton = document.createElement("div");
        phoneMenuButton.style.marginTop = "30px";
        phoneMenuButton.style.fontSize = "30px";
        let link = "/"
        if (btn !== "Home") link += `pages/${btn.toLowerCase()}/`;

        phoneMenuButton.innerHTML = `<a href=${link} style="text-decoration: none; color: black;">${btn}</a>`;
        phoneMenuButtons.appendChild(phoneMenuButton);
    });

    hamburgerMenu.onclick = function () {
        phoneMenuPopup.style.left = "0";
    }

    document.body.appendChild(phoneMenuPopup);
    document.querySelector("nav").appendChild(phoneMenuContainer);
}

function renderPcMenu(menuOptions, logoSrc = testLink) {
    const pcMenuContainer = document.createElement("div");
    pcMenuContainer.id = "pcMenuContainer";

    pcMenuContainer.style.width = "100%";
    pcMenuContainer.style.maxWidth = "1200px";
    pcMenuContainer.style.display = "flex";
    pcMenuContainer.style.justifyContent = "space-between";
    pcMenuContainer.style.alignItems = "center";
    pcMenuContainer.style.marginInline = "auto";

    const siteLogo = document.createElement("img");
    siteLogo.src = logoSrc;
    siteLogo.style.width = "100px";
    siteLogo.style.height = "50px";
    siteLogo.style.padding = "5px";
    pcMenuContainer.appendChild(siteLogo);

    const pcButtonsContainer = document.createElement("div");
    pcButtonsContainer.style.display = "flex";
    pcButtonsContainer.style.justifyContent = "space-evenly";
    pcButtonsContainer.id = "pcButtonsContainer";

    menuOptions.forEach(menuBtn => {
        const pcMenuBtn = document.createElement("a");
        pcMenuBtn.className = "pcMenuBtn";
        pcMenuBtn.innerHTML = `<p style="margin: 0; display: flex; align-items: center; justify-content: center; width: 100%">${menuBtn}</p>`;

        let link = "/";

        if (menuBtn !== "Home") link = `/pages/${menuBtn.toLowerCase()}`;


        pcMenuBtn.href = link;
        pcMenuBtn.style.backgroundColor = "purple"
        pcMenuBtn.style.padding = "10px";
        pcMenuBtn.style.boxSizing = "border-box";
        pcMenuBtn.style.display = "flex";
        pcMenuBtn.style.alignItems = "center;"
        pcMenuBtn.style.justifyContent = "center;"
        pcMenuBtn.style.textAlign = "center;"
        pcMenuBtn.style.fontSize = "13px";
        pcMenuBtn.style.width = "100px";
        pcMenuBtn.style.textDecoration = "none";
        pcMenuBtn.style.color = "white";

        if (window.location.href.includes(menuBtn.toLowerCase())) {
            pcMenuBtn.style.backgroundColor = "red";
            pcMenuBtn.className = "currentPage";
        }


        pcButtonsContainer.appendChild(pcMenuBtn);
        pcMenuBtn.onmouseenter = (event) => {
            if (event.target.className !== "currentPage") event.target.style.backgroundColor = "rebeccapurple";
        }
        pcMenuBtn.onmouseleave = (event) => {
            if (event.target.className !== "currentPage") event.currentTarget.style.backgroundColor = "purple";
        }
    });


    pcMenuContainer.appendChild(pcButtonsContainer);
    document.querySelector("nav").appendChild(pcMenuContainer);

    const navHeight = document.querySelector("nav").offsetHeight;
    document.querySelectorAll(".pcMenuBtn").forEach(pcMenuBtn => pcMenuBtn.style.height = navHeight + "px");

    let currentPage = document.querySelector(".currentPage");
    if (currentPage === null || currentPage === undefined) {
        const homeBtn = document.querySelector(".pcMenuBtn");
        homeBtn.className = "currentPage";
        homeBtn.style.backgroundColor = "red";

    }
}

function renderLoadingScreen(parentID) {
    const loadingContainer = document.createElement("div");
    loadingContainer.id = "loadingContainer";

    loadingContainer.style.height = "100vh";
    loadingContainer.style.width = "100vw";
    loadingContainer.style.position = "fixed";
    loadingContainer.style.top = "0";
    loadingContainer.style.background = "rgba(0,0,0, 0.6)";
    loadingContainer.style.display = "flex";
    loadingContainer.style.flexDirection = "column";
    loadingContainer.style.justifyContent = "center";
    loadingContainer.style.alignItems = "center";

    loadingContainer.innerHTML = `
            <img src="../../media/etc/loading.gif" />
            <h1 style="color: white;">Loading!</h1>
`; // Replace with an animation or something!
    document.getElementById(parentID).appendChild(loadingContainer);
}

function removeLoadingScreen(loadingID = "loadingContainer") {
    document.getElementById(loadingID).remove();
}

function renderCarousel(parent = "body") {
    const carouselOverlay = document.createElement("div");
    carouselOverlay.id = "carouselOverlay";

    const carouselLeftArrow = document.createElement("div");
    carouselLeftArrow.id = "carouselLeftArrow";

    const carouselRightArrow = document.createElement("div");
    carouselRightArrow.id = "carouselRightArrow";

    const carouselContainer = document.createElement("div");
    carouselContainer.id = "carouselContainer";
    const carouselWidth = 800;
    const carouselHeight = 800;

    carouselLeftArrow.onclick = () => {
        carouselContainer.scrollLeft -= carouselWidth;
    };

    carouselRightArrow.onclick = () => {
        carouselContainer.scrollLeft += carouselWidth;
    }


    carouselOverlay.style.display = "none";
    carouselOverlay.style.justifyContent = "space-evenly";
    carouselOverlay.style.alignItems = "center";
    carouselOverlay.style.position = "fixed";
    carouselOverlay.style.top = "0";
    carouselOverlay.style.left = "0";
    carouselOverlay.style.height = "100vh";
    carouselOverlay.style.width = "100vw";
    carouselOverlay.style.background = "rgba(0,0,0, 0.6)";

    carouselOverlay.onclick = hideCarousel;

    carouselContainer.style.height = carouselHeight + "px";
    carouselContainer.style.width = carouselWidth + "px";
    carouselContainer.style.display = "flex";
    carouselContainer.style.overflowX = "hidden";
    carouselContainer.style.backgroundColor = "red";
    carouselContainer.style.scrollSnapType = "x mandatory";
    carouselContainer.style.scrollBehavior = "smooth";

    carouselLeftArrow.innerHTML = "<h1  style='color: white;'><--</h1>";
    carouselRightArrow.innerHTML = "<h1 style='color: white;'>--></h1>";


    carouselOverlay.appendChild(carouselLeftArrow);
    carouselOverlay.appendChild(carouselContainer);
    carouselOverlay.appendChild(carouselRightArrow);

    document.querySelector(parent).appendChild(carouselOverlay);
}

function showCarousel(event) {
    const carouselOverlay = document.getElementById("carouselOverlay");
    carouselOverlay.style.display = "flex";
}

function hideCarousel(event) {
    const carouselContainer = document.getElementById("carouselContainer");
    const carouselOverlay = document.getElementById("carouselOverlay");
    if (event.target.id === "carouselOverlay") {
        carouselOverlay.style.display = "none";
    }
}

function appendImagesToCarousel(event) {
    const carouselContainer = document.getElementById("carouselContainer")
    carouselContainer.innerHTML = "";


    const subCategories = ["characters", "prints", "logos", "websites", "models", "products"];
    const clickedImage = event.target;
    const parentName = clickedImage.parentElement.parentElement.dataset.name;
    let allImagesInCategory;

    if (subCategories.includes(parentName)) {
        // Code here for sections that do belong in a subcategory!
        allImagesInCategory = [...document.querySelectorAll(`.view3dContainer[data-name="${parentName}"] > picture`)];
    } else {
        // Code here if this does not belong in a subcategory such as Artwork!
        allImagesInCategory = document.querySelectorAll(".renderedImage");
    }

    allImagesInCategory.forEach(createImagesForCarousel);

    showCarousel();
    const carouselContainerHeight = carouselContainer.offsetHeight;
    const carouselContainerWidth = carouselContainer.offsetWidth;

    const allCarouselImages = [...document.querySelectorAll(".carouselImage")];
    allCarouselImages.forEach(image => {
        image.style.minWidth = carouselContainerWidth + "px";
        image.style.height = carouselContainerHeight + "px";
    });

    const imageIndex = parseInt(event.target.dataset.imageindex);
    scrollCarouselToClickedImage(carouselContainerWidth, imageIndex);
}

function scrollCarouselToClickedImage(width, index) {
    const carouselContainer = document.getElementById("carouselContainer");
    carouselContainer.scrollLeft = width * index;
}

function createImagesForCarousel(picture) {
    const carouselContainer = document.getElementById("carouselContainer")
    let imgSrc;

    if (picture.tagName.toLowerCase() === "picture") imgSrc = picture.querySelector("img").src;
    else if (picture.tagName.toLowerCase() === "img") imgSrc = picture.src;

    const carouselImageDiv = document.createElement("div");
    carouselImageDiv.className = "carouselImage";
    carouselImageDiv.style.height = "100%";
    carouselImageDiv.style.background = `url(${imgSrc})`;
    carouselImageDiv.style.backgroundSize = "cover";
    carouselImageDiv.style.backgroundPosition = "center";
    carouselImageDiv.style.scrollSnapAlign = "center";

    carouselContainer.appendChild(carouselImageDiv);
}

function append3dImages(event) {
    // Fetches all the images from the 3D folder with the same name!
    // An array with the different paths can be utilized.

    // 3D bilderna ska alla ha en attribut med ett namn
    // Det finns en 3d-komponenter mapp där varje bild har namn-siffra ex. pokemon-1.png
    // Appendar bilder baserat på namnet.
}