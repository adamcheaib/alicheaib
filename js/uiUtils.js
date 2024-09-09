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

function renderPcMenu(menuOptions, logoSrc = testLink) {}

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