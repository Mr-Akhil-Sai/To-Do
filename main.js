


function styles(crossButton, checkbox, label){
    crossButton.style.position = "absolute";
    crossButton.style.right = "10%";
    crossButton.style.border = "none";
    crossButton.style.marginTop = ".1em";
    checkbox.style.marginRight = ".5em";
    checkbox.style.fontSize = "2rem";
    label.style.fontSize = "1.5rem";
}


function add(){    
    let tasks = document.querySelector("#tasks");
    let inputTask = document.querySelector("#inputTask");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let crossButton = document.createElement("button");
    let lineBreak = document.createElement("br");
    
    
    crossButton.innerHTML = "<i class='lni lni-cross-circle'></i>";
    checkbox.type = "checkbox";
    label.innerHTML = inputTask.value;

   
    if (inputTask.value){ 
        
        tasks.appendChild(checkbox);
        tasks.appendChild(label);
        tasks.appendChild(crossButton);
        styles(crossButton, checkbox, label);
        tasks.appendChild(lineBreak);
        inputTask.value = "";
        if(checkbox.checked){
            label.style.textDecoration= "line-through";
            console.log("hi")
        }
        
        crossButton.onclick = function(){ 
           tasks.removeChild(checkbox);
           tasks.removeChild(label);
           tasks.removeChild(crossButton);
        }
    }
    
    else{
        alert("enter the task");
    }
}