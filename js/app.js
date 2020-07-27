//select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show today's date
let options = { weekday:"long", month:"short", day:"numeric"};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

// add to do function
function addToDo(toDo){
    const item = ` <li class = "item">
                        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                        <p class="text">${toDo}</p>
                        <i class="fa fa-trash-o" job="delete" id="0"></i>
                    </li>
                `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

// add an item to the list user the enter key

// document.addEventListener("keyup",function(event){
//     if(event.keyCode == 13){
//         const toDo = input.value;
//         if(toDo){
//             addToDo(toDo.id, false,false);
//             LIST.push(
//                 {
//                     name: toDo,
//                     id: id,
//                     done: false,
//                     trash: false,
//                 }
//             );
//             input.value = "";
//             id++;
//         }
        
//     }
// }

    //     if(trash){
    //         return;
    //     }
    
    //     const DONE = done ? CHECK : UNCHECK;
    //     const LINE = done ? LINE_THROUGH : "";

// //clear localStorage
// clear.addEventListener('click',function(){
//     localStorage.clear();
//     location.reload();
// });



// //target an element created dynamically
// list.addEventListener("click", function(event){
//     let element = event.target;
//     const elementJOB = event.target.attributes.job.value;
//     if(elementJOB == "complete"){
//         completeToDo();
//     } else if (elementJOB == "delete"){
//         removeToDo ();
//     }

// });

// //save to-do-list to localStorage
// let data = localStorage.getItem("TODO");
// if(data){
//     LIST = JSON.parse(data);
//     loadToDO(LIST);
//     id = LIST.length;

// }else{
//     LIST = [];
//     id = 0;
// }

// function loadToDO( array){
//     array.forEach(function(item){
//         addToDo(item.name,item.id,item.done,item.trash);
//     });
// }



// // Store a to-do
// let LIST = [];

// let id = 0;

// LIST = [{}, {}, ...];

// LIST[0] ->
// {
//     name: "Drink Coffee",
//     id: 0,
//     done: false,
//     trash: false,
// }

// //to-do is Done

// function completeToDo(element){
//     element.classList.toggle(CHECK);
//     element.classList.toggle(UNCHECK);
//     element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
//     LIST[element.id].done = LIST[element.id].done ? false : true;
// }

// //remove a to-do
// function removeToDo(element){
//     element.parentNode.parentNode.removeChild(element.parentNode);
//     LIST[element.id].trash = true;
// }

// // const element = document.getElementById("element");