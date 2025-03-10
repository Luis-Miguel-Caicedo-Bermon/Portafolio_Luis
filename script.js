let color_fondo = "var(--color-fondo)";
let color_letra = "var(--color-letra)";

function cambiarTema() {
    let tema = document.querySelector('.tema');
    tema.setAttribute('name', tema.getAttribute('name') === "sun"?"moon":"sun");

    let letra_normal = getComputedStyle(document.documentElement).getPropertyValue("--letra-normal");
    letra_normal = letra_normal === "white"?"black":"white";
    document.documentElement.style.setProperty("--letra-normal",letra_normal);

    let color_fondo_actual = getComputedStyle(document.documentElement).getPropertyValue("--color-fondo");
    color_fondo_actual = color_fondo_actual === "#1C1C1C"?"#D4C8B0":"#1C1C1C";
    document.documentElement.style.setProperty("--color-fondo", color_fondo_actual);

    let color11 = getComputedStyle(document.documentElement).getPropertyValue("--color-uno");
    color11 = color11 === "#32d74b"?"#541E32":"#32d74b";
    document.documentElement.style.setProperty("--color-uno", color11);
    color1();

    let color22 = getComputedStyle(document.documentElement).getPropertyValue("--color-dos");
    color22 = color22 === "#007aff"?"#2F3A60":"#007aff";
    document.documentElement.style.setProperty("--color-dos", color22);

    let color33 = getComputedStyle(document.documentElement).getPropertyValue("--color-tres");
    color33 = color33 === "#D4A017"?"#4B4F55":"#D4A017";
    document.documentElement.style.setProperty("--color-tres", color33);

    // document.body.style.backgroundColor = 
    //     document.body.style.backgroundColor === "var(--fondo-oscuro)" ? "var(--fondo-claro)" : "var(--fondo-oscuro)";
    
    // let container = document.querySelector(".container");
    // container.style.backgroundColor = 
    //     container.style.backgroundColor === "var(--fondo-oscuro)" ? "var(--fondo-claro)" : "var(--fondo-oscuro)";
    
    // let letra = document.querySelectorAll(".letra");
    // letra.forEach(e => {
    //     e.style.color = 
    //     e.style.color === "var(--texto-oscuro)" ? "var(--texto-claro)" : "var(--texto-oscuro)";
    // });

    // let borde = document.querySelector('.borde');
    // borde.style.borderBottom  = 
    //     borde.style.borderBottom  === "var(--texto-oscuro) solid" ? "var(--texto-claro) solid" : "var(--texto-oscuro) solid";

    // let cambiar = document.querySelector(".cambiar");
    // cambiar.style.backgroundColor = 
    //     cambiar.style.backgroundColor === "var(--fondo-oscuro)" ? "var(--fondo-claro)" : "var(--fondo-oscuro)";
    
    // color_fondo = color_fondo === "var(--fondo-oscuro)" ? "var(--fondo-claro)" : "var(--fondo-oscuro)";
    // color_letra = color_letra === "var(--texto-oscuro)" ? "var(--texto-claro)" : "var(--texto-oscuro)";
}

function color1(){
    let color1 = getComputedStyle(document.documentElement).getPropertyValue("--color-uno");
    document.documentElement.style.setProperty("--color-letra", color1);
}
function color2(){
    let color2 = getComputedStyle(document.documentElement).getPropertyValue("--color-dos");
    document.documentElement.style.setProperty("--color-letra", color2);
}
function color3(){
    let color3 = getComputedStyle(document.documentElement).getPropertyValue("--color-tres");
    document.documentElement.style.setProperty("--color-letra", color3);
}

// posicion del cursor
document.addEventListener("mousemove", (event) => {
    let container = document.querySelector(".container");
    container.style.background = `radial-gradient(50px at ${event.pageX}px ${event.pageY}px, transparent 75%, ${color_letra}, transparent 80%)`;
    container.style.backgroundColor = color_fondo;
});
// let cont = 0;
// let lastScroll = window.scrollY;
// document.addEventListener("scroll", (e)=>{
//     let currentScroll = window.scrollY;
//     if (currentScroll < lastScroll) {
//         cont--;
//         document.querySelectorAll(".container")[cont].scrollIntoView({ behavior: "smooth" });
//     }
//     else{
//         cont++;
//         document.querySelectorAll(".container")[cont].scrollIntoView({ behavior: "smooth" });
//     }
//     lastScroll = currentScroll;
// })