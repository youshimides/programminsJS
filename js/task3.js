const testtext = document.getElementById("test-text");
const menu = document.querySelector(".test-text");
testtext.innerHTML = "привет <b>мир!</b> Меня зовут <i>khami<i>";
testtext.style.color="blue";
testtext.style.backgroundColor = "aqua";
testtext.style.border =" 2px solid blue";

//2
const mail = document.getElementById("email");
mail.setAttribute("value", "mail@mail.ru");
mail.setAttribute("disabled", "disabled");

const checkbox = document.getElementById("remember");
checkbox.setAttribute("checked", "checked");

const btn = document.getElementById("btn");
btn.setAttribute("value", "войти");

//3
const link = document.createAttribute("a");
link.textContent = "Ссылка"
link.setAttribute("href", "https://midis.ru/")
link.setAttribute("target", "_blank");

const block = document.getElementById("block");
block.append(link);