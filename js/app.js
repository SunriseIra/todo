let form = document.querySelector(".form_todo")
let todolist = document.querySelector(".todolist")
let input = document.querySelector('.todo_input');
const addButton = document.querySelector(".todo_button_add");
const clear = document.querySelector(".clear");
const save = document.querySelector('.save');
const todo_completed = document.querySelector('.todo_completed');

// console.log(form);
window.localStorage.getItem('form');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let liText = input.value;
    // console.log(liText)
    if(liText == ""){
        alert("please add Some Text");
    } else {
        const newTask = createNewItem(input.value);
        todolist.appendChild(newTask);
    input.value = '';
     input.focus();
     clear.classList.remove("d-none");
     save.classList.remove('d-none');
    }
    clear.addEventListener("click", function () {
        todolist.innerHTML = "";
        todo_completed.innerHTML = "";
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
    compl.innerHTML = `<img src="done.png">`;
    // rest.innerHTML = `<img src="rest.png">`;

    task.className = "listli";
    task.dataset.name = inputValue;
    // delet.className = 'delete';
    // edite.className = 'edite';
    // compl.className = 'done';
    // rest.className = 'rest';

    task.appendChild(text);
    task.appendChild(delet);
    task.appendChild(edite);
    task.appendChild(compl);
    // task.appendChild(rest);
   
    // let del = document.querySelector('.delete'); 

    delet.addEventListener('click', function () {
        task.parentNode.removeChild(task);
    })
    edite.addEventListener("click", function () {
        task.contentEditable = true;
        task.focus();
      });
    compl.addEventListener('click',function () {
    task.classList.add("d-none");

    task.classList.add("complete");

    complited (task);
    task.classList.remove("complete");
      })
    rest.addEventListener('click',function () {
        task.classList.remove("complete");
      });
      // complited (task);

          return task;
}

function complited (elem) {
  elem.preventDefault;

  elem.classList.add('d-none');
  // console.log(elem)

  if(elem.classList.contains("complete")){
    todo_completed.classList.remove('d-none');
    let completedAll = document.querySelectorAll('.complete');
    let completed = Array.from(completedAll)

    console.log(elem)
    completed.forEach((elem) => {
      elem.classList.add("d-none");
      todo_completed.innerHTML += `
      <li class="list_compl" id ='${elem.dataset.name}'><span>${elem.textContent}</span>
      <button class="delete" id ='${elem.dataset.name}'><img src="delete.png"></button>
      <button class="edite" id ='${elem.dataset.name}'><img src="edit.png"></button>
      <button class="rest" id ='${elem.dataset.name}'><img src="rest.png"></button></li>`;
      buttoncl(elem);
    })
   
  }
 
}


function buttoncl (elem) {
  let list_complAll= document.querySelectorAll(".list_compl");
  let list_compl =Array.from(list_complAll)

    list_compl.forEach((elem) => {
      let delAll = document.querySelectorAll('.delete'); 
      let del = Array.from(delAll)

      del.forEach((lulu) => {
        lulu.addEventListener('click', function (ev) {
           if (elem.id === lulu.id){
            elem.classList.add('d-none');
              let parentAdd = ev.target.parentElement;
              // console.log(parentAdd)
          }
        })
      })
      
      let restAll = document.querySelectorAll('.rest'); 
      let rest = Array.from(restAll)
      rest.forEach((reres) => {
        reres.addEventListener('click', function (ev) {
          let hiddenAll = document.querySelectorAll('.listli.d-none')
          let hidden = Array.from(hiddenAll)

          hidden.forEach((rer) => {

            if (rer.dataset.name === reres.id && rer.dataset.name === elem.id){
              elem.classList.add('d-none')
              rer.classList.remove('d-none');
            }
          })
           
        })
      })
      let editeAll = document.querySelectorAll('.edite'); 
      let edite = Array.from(editeAll)


      edite.forEach((edit) => {
        edit.addEventListener('click', function (even) {
          // console.log(elem.id === edit.id)

           if (elem.id === edit.id){
            elem.contentEditable = true;
        elem.focus();
          }
        })
      })


    })

   


 
}

