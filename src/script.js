const addBtn = document.getElementById('plus')
const taskList = document.getElementById('task_list')

addBtn.addEventListener('click',() => {
    addTask();
});

function addTask() {
    const task_text = document.querySelector("textarea")
    const task = document.createElement("div");
    task.classList.add('task_item')
    task.innerHTML=`
    <img id="plus" src="..\\assets\\images\\iconmonstr-circle-2.svg" alt="notdone">   
    <div class="task_text">${task_text.value}</div>
    <div class="button_">
    <img id="star" src="..\\assets\\images\\iconmonstr-star-1.svg" alt="star">
    <img id="trash" src="..\\assets\\images\\iconmonstr-trash-can-2.svg" alt="trash">
    </div>
    `
    task_text.value = ""
    task_list.appendChild(task)
}

