function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(n){n.preventDefault();const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");Array.from({length:12},(e,n)=>n+1).forEach(n=>{const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n        <img width="200" height="300" src="build/img/thumb/${n}.jpg" alt="imagen galeria">\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)})}function mostrarImagen(e){document.createElement("picture").innerHTML=`\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n    <source srcset="build/img/grande/${e}.webp" type="image/webp">\n    <img width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen galeria">\n    `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const o=document.querySelector("body");o.appendChild(t),o.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()})),document.addEventListener("DOMContentLoaded",(function(){navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=galeria.js.map