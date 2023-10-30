let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")

headerMenu.addEventListener("click", function () {
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")

})
