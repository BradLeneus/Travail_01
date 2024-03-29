function save() {
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;


    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom);

    window.location.replace(acceuil.html);
}



const addGroupBtn = document.getElementById("addGroupBtn");
const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTask");
const groupSelect = document.getElementById("groupSelect");
const taskList = document.getElementById("taskList");

const clearAll = document.getElementById("clearAll")

var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const listItem = document.createElement("li");

        listItem.textContent = taskText;




        taskList.appendChild(listItem);

        taskInput.value = "";

        const doneBtn = document.createElement("img");

        doneBtn.setAttribute("src", "./Images/icons8-checkmark-50.png");
        doneBtn.setAttribute('height', '18px');
        doneBtn.setAttribute('width', '18px');

        listItem.appendChild(doneBtn);

        doneBtn.addEventListener("click", () => {
            listItem.id = "taskDone"
        });

        const editBtn = document.createElement("img");

        editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
        editBtn.setAttribute('height', '18px');
        editBtn.setAttribute('width', '18px');

        listItem.appendChild(editBtn);

        editBtn.addEventListener("click", () => {
            taskInput.value = listItem.textContent
            listItem.remove()
        });

        const deleteBtn = document.createElement("img");

        deleteBtn.setAttribute("src", "./Images/icons8-delete-60.png");
        deleteBtn.setAttribute('height', '18px');
        deleteBtn.setAttribute('width', '18px');

        let selectedGroup = document.getElementById(groupSelect.value);
        let task = document.createElement('li');
        task.textContent = taskText;

        // Add the task to the task list and the selected group
        selectedGroup.appendChild(task.cloneNode(true));

        // Clear the task input
        taskInput.value = "";
        //noeud existant en tant que dernier enfant d'un noeud parent particulier.

        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {

            listItem.remove();

        });


    } else {
        alert("Veuillez entrer une tâche valide.");
    }
    localStorage.setItem(task.concat(i), (taskText), i++)
    clearAll.addEventListener("click", () => {
        localStorage.clear()
    })
}

function trierTâches() { // function that sorts the tasks alphabetically in the taskList
    // Get the taskList element
    let taskList = document.getElementById('taskList');

    // Convert the taskList children to an array
    let tasks = Array.from(taskList.children);

    // Sort the array based on the text content of the list items
    tasks.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim()));

    // Remove all tasks from the taskList
    while (taskList.firstChild) {
        taskList.firstChild.remove();
    }

    // Append the sorted tasks back to the taskList
    for (let task of tasks) {
        taskList.appendChild(task);
    }



}
