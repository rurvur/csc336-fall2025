let tasks = [
    {
        name: "Give Rhys a 2",
        //It's good to set our expectations realistic :)
        date: "Whenever grades are posted",
        priority: 1
    },
]

function populateTaskList() {
    let taskDiv = document.querySelector("#task-list");

    taskDiv.innerHTML = "";
    //sorts tasks by their priority level, found from w3schools
    tasks.sort((a, b) => a.priority - b.priority);

    for (let task of tasks) {
        let taskHTML = createTask(task);
        taskDiv.innerHTML += taskHTML;
    }
}

function createTask(task) {
    return `
        <div>
            <h2>${task.name}</h2>
            <div class='stats'>
                <div>Due: ${task.date}</div>
                <div>Priority: ${task.priority}</div>
            </div>
        </div>
    `;
}

//kept returning null when I searched for the form so I added an onload function
window.onload = function () {
    let addTaskForm = document.getElementById("task-form");
    addTaskForm.addEventListener("submit", addNewTask);
    populateTaskList();
};

function addNewTask(e){
    e.preventDefault();

    let nameInput = document.querySelector("#nameInput").value;
    let deadlineInput = document.querySelector("#Deadline").value;
    let PriorityInput = document.querySelector("#Priority").value;
    
    //ensures all fields have input
    if (PriorityInput != null){
        alert("Make sure all fields have inputs!");
        return
    }
    if (nameInput != null){
        alert("Make sure all fields have inputs!");
        return
    }
    if (deadlineInput != null){
        alert("Make sure all fields have inputs!");
        return    
    }

    //checks to ensure priority is between 1 and 5
    if (checkPrior(PriorityInput) == false) {
        alert("Priorirty should be between 1 and 5!");
        return;
    }

    let newTask = {
        name: nameInput,
        date: deadlineInput,
        priority: PriorityInput
    }
    tasks.push(newTask);
    populateTaskList();
    return
}

function checkPrior(prio) {
    const num1 = Number(prio);

    if (num1 > 0) {
        if (num1 < 6) {
            return true;
        }
    } 
    return false;
}