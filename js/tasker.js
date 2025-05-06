const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");
const sortdown = document.getElementById("sortdown");
const sortup = document.getElementById("sortup")

let tasks= document.querySelectorAll(".task");
console.log(tasks);

/*Добавление новой задачи */
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault(); // отменяет действие браузера по умолчанию - перезагрузку страницы
    console.log("click");
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);
    console.log(tasks);
});

/*-----*/
const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let tasks = document.querySelectorAll(".task"); //nodelist

    for (let task of tasks){
        // if(task.classList.contains("importent")){
        //     task.classList.remove("importent");
        // }
        // else{
        //     task.classList.add("importent")
        // }
        task.classList.toggle("importent");
    }
})

function compare(a,b) {
    if (a.innerHTML > b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return -1;
}
sortdown.addEventListener("click",function(){
    container.innerHTML = '';
    let newTasks = [...tasks].sort(compare);
    for (let i in newTasks){
        container.append(newTasks[i]) 
    }
})


function compareReverse(a,b) {
    if (a.innerHTML > b.innerHTML) return -1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return 1;
}
sortdown.addEventListener("click",function(){
    container.innerHTML = '';
    let newTasks = [...tasks].sort(compareReverse);
    for (let i in newTasks){
        container.append(newTasks[i])  
    } 
})