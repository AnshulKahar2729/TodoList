const todoArr = [];  // this is where we will store all tasks.

const addBtn = document.getElementById("addBtn");
const inputElement = document.getElementById("input");
const todoListDiv = document.getElementById("todoListDiv");  // this is where we will display all stored tasks.

function displayTodo(){
    // What this loop is doing ? 
    // It stores all the task from todoArr and store all of them in HTMLContainer in HTML Format.
    let HTMLContainer = "";
    for(let i = 0; i<todoArr.length; i++)
    {
        HTMLContainer += 
            `<p id="task${i+1}">
                TASK ${i+1} : ${todoArr[i]} 
                <button onclick="
                  todoArr.splice(${i}, 1);
                  displayTodo();  <!-- We need to display the updated todo list. -->
                "> DELETE </button>
            </p>`;
    }
    todoListDiv.innerHTML = HTMLContainer;
}

function addTodo(){
    
    let inputName = inputElement.value; // we store the whatever we type in input field.
    todoArr.push(inputName);  // now we push inputName into the empty array.
    inputElement.value=""; // then make the input field blank again.

    displayTodo();
}

addBtn.addEventListener("click", addTodo);
