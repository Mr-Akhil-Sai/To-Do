function add(){

    let tasks = document.querySelector("#tasks");
    let inputTask = document.querySelector("#inputTask");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let lineBreak = document.createElement("br");

    checkbox.type = "checkbox";
    label.innerHTML = inputTask.value;
    
    if (inputTask.value){ 
        tasks.appendChild(checkbox);
        tasks.appendChild(label);
        tasks.appendChild(lineBreak);
        inputTask.value = "";
        console.log(inputTask.value)
    }
    else{
        alert("enter the task");
    }
}