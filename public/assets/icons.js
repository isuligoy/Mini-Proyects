// add-fontawesome.js
// (function () {
//     var link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href =
//         "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
//     link.integrity =
//         "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==";
//     link.crossOrigin = "anonymous";
//     link.referrerPolicy = "no-referrer";
//     document.head.appendChild(link);
// })();
(function () {
    // Primer enlace
    var link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "../../assets/icons/css/all.min.css";
    document.head.appendChild(link1);

    // Segundo enlace
    var link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "../../assets/icons/css/fontawesome.css";
    document.head.appendChild(link2);
})();
