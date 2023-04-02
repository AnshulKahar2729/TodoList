// Now since we need to store taskName as well as dueDate, therefore we will use array of objects.
const todoArr = [];  

const addBtn = document.getElementById("addBtn");
const todoListDiv = document.getElementById("todoListDiv");  // this is where we will display all stored tasks.

function displayTodo(){
    // What this loop is doing ? 
    // It stores all the task from todoArr and store all of them in HTMLContainer in HTML Format.
    let HTMLContainer = "";
    for(let i = 0; i<todoArr.length; i++)
    {
        let todoObj = todoArr[i];
        let taskName = todoObj.taskName;
        let dueDate = todoObj.dueDate;
        HTMLContainer += 
            `<div> TASK ${i+1} : ${taskName}</div>
            <div>${dueDate}</div>
            <button id="deleteBtn" onclick="
                todoArr.splice(${i}, 1);
                displayTodo();  <!-- We need to display the updated todo list. -->
            "> DELETE </button>`;
    }
    todoListDiv.innerHTML = HTMLContainer;
}

function addTodo(){
    const inputNameElement = document.getElementById("input-name");
    const inputDateElement = document.getElementById("input-date");
    const inputName = inputNameElement.value; // we store the whatever we type in input field.
    const inputDate = inputDateElement.value;

    todoArr.push({
        taskName:inputName,
        dueDate: inputDate
    });
    inputNameElement.value=""; // then make the input field blank again.

    // after adding todo to array now display it on the web page.
    displayTodo();
}

addBtn.addEventListener("click", addTodo);
