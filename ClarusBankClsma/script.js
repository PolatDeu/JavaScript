const navbarItem1 = document.getElementsByClassName("nav__item")[0];
console.log(navbarItem1);
const navbarItem2 = document.getElementsByClassName("nav__item")[1];
console.log(navbarItem2);
const navbarItem3 = document.getElementsByClassName("nav__item")[2];
console.log(navbarItem3);

const h1 = document.querySelector("h1");
console.log(h1);
const higlightSpan = h1.querySelectorAll(".highlight");

h1.firstElementChild.style.color='red';
h1.lastElementChild.style.color='blue';
console.log(higlightSpan);

h1.closest(".header").style.backgroundColor="";

window.onload = ()=>{console.log("Welcome Unsere Seite!")};
window.addEventListener("load",()=>{console.log('hallo aus anderen Ort')});

navbarItem1.addEventListener("click", ()=>{console.log('featur hat geckligt')});

navbarItem1.onclick= ()=>{console.log('Hallo von onclick')};

// const sayHello = function(){
//     alert("Hello vielmals")
// };
// sayHello fonksiyonunu indexte yazmadim

navbarItem2.addEventListener("mouseover", ()=> console.log('Hallo von Operations'));
// navbarItem2.addEventListener("mouseover", ()=> {navbarItem2.textContent="Over me"});
// navbarItem2.addEventListener("mouseout", ()=> {navbarItem2.textContent="Operations"});

//rgb(255,255,255)
const randomNumber = ()=>{
 return Math.floor(Math.random() *255);
}
const randomColor = ()=>{
 return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

// navbarItem3.addEventListener("click", ()=>{
//     navbarItem3.style.backgroundColor=randomColor();
// })
function changeColor(){
    navbarItem3.style.backgroundColor = randomColor();
    console.log(randomColor());
};
// navbarItem3.addEventListener("click", changeColor());

// navbarItem3.removeEventListener("click", changeColor());

document.querySelectorAll(".nav__link").forEach(
    function(elements){
        elements.addEventListener("click", function(element){
            element.preventDefault();
            const sectionId = this.getAttribute("href");
            document.querySelector(sectionId).scrollIntoView({
                behavior : "smooth"
            });
        });
    }
);
console.log(document.querySelectorAll(".nav__link"));