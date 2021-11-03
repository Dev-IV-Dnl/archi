// animation burger menu en Jquery :
// $("#iconeMenuBurger").click(() => {
//     $("#menuDown").slideToggle();
//     console.log("Je clique sur le menu Burger");
// })

// animation Burger menu en Vanilla JS :

let menuDown = document.querySelector("#menuDown");
let burgerMenu = document.querySelector("#iconeMenuBurger");
let ligne1Burger = document.querySelector(".ligne1Burger");
let ligne2Burger = document.querySelector(".ligne2Burger");
let ligne3Burger = document.querySelector(".ligne3Burger");

menuDown.style.height = "0";
menuDown.style.border = "none";
burgerMenu.addEventListener("click", () => {
    console.log("Je clique sur le menu Burger");
    if (menuDown.style.height === "200px") {
        menuDown.style.height = "0";
        menuDown.style.border = "none";
        ligne1Burger.style.transform = "rotate(0deg)";
        ligne2Burger.style.backgroundColor = "var(--col1)";
        ligne3Burger.style.transform = "rotate(0deg)";
    } else if (menuDown.style.height === "0px") {
        menuDown.style.height = "200px";
        menuDown.style.border = "1px solid var(--col1)";
        ligne2Burger.style.backgroundColor = "transparent";
        ligne1Burger.style.transform = "translate(4px, 1px) rotate(40deg)";
        ligne3Burger.style.transform = "translate(4px, 0px) rotate(-40deg)";
    }
})