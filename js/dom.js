/*1. выбор элементов на странице */
/*1.1. выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/*1.2 выбор одного элемента по селектору  */
const menu = document.querySelector(".menu");
console.log(menu);
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


/*2 - прочитать или изменить содержимое тега */
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.outerText);
console.log(h1.outerText);

h1.textContent = 'Новый заголовок <i class="bi bi-umbrella-fill"></i>';
h1.innerHTML = 'Новый заголовок <i class="bi bi-umbrella-fill"></i>';

/* h1.innerHTML= "";  -самый простой способ очитски */

/* работа со стиялми (атрибут style) */
h1.style.color = "red";
h1.style.fontSize = "48px";
console.log(h1.style);
/*4 работа с классами (атрибут class) */
menu.classList.add("border"); //добавили класс
const h2 = document.querySelector(".blue");
h2.classList.remove("blue"); //удалить класс
console.log(menu.classList.contains("border")); // проверить если такой класс у элемента 

/*5 - работа с атрибутами */
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href")); // узнать значение атрибутов
firstLink.setAttribute("href","https://midis.ru/"); //установить атрибут 
firstLink.setAttribute("target","_blank");
firstLink.removeAttribute("target"); // удалить атрибут

//6 - создание нового элемента (тега)
const image = document.createElement("img"); // создаю элемент
image.setAttribute("src","img/3.jpg"); // добавляю атрибут
image.classList.add("border"); // добавляю класс
const block = document.getElementById("block"); // беру элемент в который будет добавлен новый элемент
block.classList.add("border");// добавляю новый элмент в конец блока
block.before(image);

//7 - работа с предками
console.log(firstLink.closest("li"));

//8 работа с потомками
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

//9 - события 

const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click", function(){circle.style.background ="blue";})

