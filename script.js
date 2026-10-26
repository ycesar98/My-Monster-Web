const arkon = document.querySelector(".arkon");

arkon.addEventListener("click", function () {
    arkon.classList.add("activado");
    setTimeout(function () {
        arkon.classList.remove("activado");
    }, 2000);
});