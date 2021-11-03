// animation burger menu en Jquery :
// $("#iconeMenuBurger").click(() => {
//     $("#menuDown").slideToggle();
//     console.log("Je clique sur le menu Burger");
// })

// animation Burger menu en Vanilla JS :

let menuDown = document.querySelector("#menuDown");
let burgerMenu = document.querySelector("#iconeMenuBurger");
let ligne1 = document.querySelector(".ligne1");
let ligne2 = document.querySelector(".ligne2");
let ligne3 = document.querySelector(".ligne3");

menuDown.style.height = "0";
menuDown.style.border = "none";
burgerMenu.addEventListener("click", () => {
    console.log("Je clique sur le menu Burger");
    if (menuDown.style.height === "200px") {
        menuDown.style.height = "0";
        menuDown.style.border = "none";
        ligne1.style.transform = "rotate(0deg)";
        ligne2.style.backgroundColor = "var(--col1)";
        ligne3.style.transform = "rotate(0deg)";
    } else if (menuDown.style.height === "0px") {
        menuDown.style.height = "200px";
        menuDown.style.border = "1px solid var(--col1)";
        ligne2.style.backgroundColor = "transparent";
        ligne1.style.transform = "translate(4px, 1px) rotate(40deg)";
        ligne3.style.transform = "translate(4px, 0px) rotate(-40deg)";
    }
})