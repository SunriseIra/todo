let form = document.querySelector(".form_todo")
let todolist = document.querySelector(".todolist")
let input = document.querySelector('.todo_input');
const addButton = document.querySelector(".todo_button_add");
const clear = document.querySelector(".clear");

// console.log(form);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if(input.value == ""){
        alert("please add Some Text");
    } else {
        const newTask = createNewItem(input.value);
        todolist.appendChild(newTask);
    //  console.log(input.value);
     input.value = "";
     input.focus();
     clear.classList.remove("d-none");

    }
    clear.addEventListener("click", function () {
        todolist.innerHTML = "";
      });
})

function createNewItem(inputValue) {
    let task = document.createElement("li");
    let text = document.createElement('span');
    let delet = document.createElement("button");
    let edite = document.createElement('button');
    let compl = document.createElement('button');
    let rest = document.createElement('button');
    text.textContent = inputValue;
    delet.innerHTML = `<img src="delete.png">`;
    edite.innerHTML = `<img src="edit.png">`;
    compl.innerHTML = `<img src="/done.png">`;
    rest.innerHTML = `<img src="/rest.png">`;

    task.appendChild(text);
    task.appendChild(delet);
    task.appendChild(edite);
    task.appendChild(compl);
    task.appendChild(rest);

    delet.addEventListener('click', function () {
        task.parentNode.removeChild(task);
    })
    edite.addEventListener("click", function () {
        task.contentEditable = true;
        task.focus();
      });
      compl.addEventListener('click',function () {
        task.classList.add("complete");
      })
      rest.addEventListener('click',function () {
        task.classList.remove("complete");
      })
    return task;
}