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
        ligne1Burger.style.transform = "rotate(0deg)";
        ligne2Burger.style.backgroundColor = "var(--col1)";
        ligne3Burger.style.transform = "rotate(0deg)";
    } else if (menuDown.style.height === "0px") {
        menuDown.style.height = "200px";
        ligne2Burger.style.backgroundColor = "transparent";
        ligne1Burger.style.transform = "translate(4px, 1px) rotate(40deg)";
        ligne3Burger.style.transform = "translate(4px, 0px) rotate(-40deg)";
    }
})



//event click pour faire apparaître Le voileRecherche :
let btnRecherche = document.querySelector("#btnRecherche");
let voileRecherche = document.querySelector("#voileRecherche");
let croixVoileRecherche = document.querySelector("#croixVoileRecherche");
let formRecherche = document.querySelector("#formRecherche");
let inputRecherche = document.querySelector("#inputRecherche");
let labelRecherche = document.querySelector("#labelRecherche");

btnRecherche.addEventListener("click", (e)=>{
    if(btnRecherche.classList == "btnRecherche") {
        voileRecherche.classList.remove("voileRechercheOff");
        voileRecherche.classList.add("voileRechercheOn");
        formRecherche.classList.remove("formRechercheOff");
        formRecherche.classList.add("formRechercheOn");
        inputRecherche.classList.remove("inputRechercheOff");
        inputRecherche.classList.add("inputRechercheOn");
        labelRecherche.classList.remove("labelRechercheOff");
        labelRecherche.classList.add("labelRechercheOn");
        croixVoileRecherche.classList.remove("croixVoileRechercheOff");
        croixVoileRecherche.classList.add("croixVoileRechercheOn");
        // inputRecherche.focus();
        e.stopPropagation();
    }
})

croixVoileRecherche.addEventListener("click", (e)=> {
    if(voileRecherche.classList =="voileRechercheOn") {
        voileRecherche.classList.remove("voileRechercheOn");
        voileRecherche.classList.add("voileRechercheOff");
        formRecherche.classList.remove("formRechercheOn");
        formRecherche.classList.add("formRechercheOff");
        inputRecherche.classList.remove("inputRechercheOn");
        inputRecherche.classList.add("inputRechercheOff");
        labelRecherche.classList.remove("labelRechercheOff");
        labelRecherche.classList.add("labelRechercheOn");
        croixVoileRecherche.classList.remove("croixVoileRechercheOn");
        croixVoileRecherche.classList.add("croixVoileRechercheOff");
    }
})

//Test header qui s'enfuit en scrollant vers le bas
let departScroll = window.pageYOffset;
let menu = document.querySelector("#menuDown");
let burger = document.querySelector("#iconeMenuBurger");

window.onscroll = function() {
    let currentScrollPos =  window.pageYOffset;

    if(departScroll > currentScrollPos) {
        menu.style.display = "flex";
        burger.style.display = "flex"
    } else {
        menu.style.display = "none";
        burger.style.display = "none";
    }
    departScroll = currentScrollPos;
}