var mainTitle = document.querySelector("#here-logo");
if (window.innerWidth <= 555) {
    mainTitle.textContent = "Almagest's Website";
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 555) {
        mainTitle.textContent = "Almagest's Website";
    } else {
        mainTitle.textContent = "Almagest";
    }
});
