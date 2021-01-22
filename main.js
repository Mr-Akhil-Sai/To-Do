function add(){

    let tasks = document.querySelector("#tasks");
    let inputTask = document.querySelector("#inputTask");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let crossButton = document.createElement("button");
    let lineBreak = document.createElement("br");


    crossButton.innerHTML = "<i class='lni lni-cross-circle'></i>";
    crossButton.onclick = del(label);
    checkbox.type = "checkbox";
    label.innerHTML = inputTask.value;
    
    if (inputTask.value){ 
        tasks.appendChild(checkbox);
        tasks.appendChild(label);
        tasks.appendChild(crossButton);
        tasks.appendChild(lineBreak);
        inputTask.value = "";
    }
    else{
        alert("enter the task");
    }
}
 
function del(){
    
}