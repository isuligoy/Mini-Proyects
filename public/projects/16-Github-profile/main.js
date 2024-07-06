const allLink = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLink.forEach((elem) => {
    elem.addEventListener("click", function () {
        const linkId = elem.id;
        const hrefLinkClick = elem.href;
    });
});
