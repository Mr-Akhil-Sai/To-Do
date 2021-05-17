let inputField = document.querySelector("#inputField");
let addBtn = document.querySelector("#addBtn");
let tasks = document.querySelector("#tasks");
addBtn.addEventListener("click", addTask);

function addTask() {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  inputField.value ? buildTile(tile, inputField.value) : "";

  inputField.value ? tasks.appendChild(tile) : "";

  inputField.value = "";
}

function buildTile(tile, labelText) {
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  let label = document.createElement("label");
  label.innerText = labelText;

  let deleteBtn = document.createElement("div");
  deleteBtn.innerHTML = `<i class="lni lni-cross-circle"></i>`;

  let editBtn = document.createElement("div");
  editBtn.innerHTML = `<i class="lni lni-pencil"></i>`;
  editBtn.classList.add("editBtn");

  appendingElementsToTile(checkBox, label, editBtn, deleteBtn, tile);

  checkBox.addEventListener("click", () => checkBoxEvent(checkBox, label));
  editBtn.addEventListener("click", () =>
    editTask(label, editBtn, tile, checkBox, deleteBtn)
  );

  deleteBtn.addEventListener("click", () => deleteTask(deleteBtn));
}

function checkBoxEvent(checkBox, label) {
  if (checkBox.checked) {
    label.classList.add("labelStrikeThrough");
    return;
  }
  label.classList.remove("labelStrikeThrough");
}

function editTask(label, editBtn, tile, checkBox, deleteBtn) {
  let newTask = document.createElement("input");
  let okBtn = document.createElement("div");
  okBtn.innerHTML = `<i class="lni lni-checkmark-circle"></i>`;

  editBtn.remove();
  tile.remove();
  label.remove();

  tile.appendChild(checkBox);
  tile.appendChild(newTask);
  tile.appendChild(okBtn);
  tile.appendChild(deleteBtn);
  tasks.appendChild(tile);
  newTask.focus();
  okBtn.addEventListener("click", () =>
    editedTask(tile, checkBox, label, newTask, editBtn, deleteBtn, okBtn)
  );
}

function deleteTask(deleteBtn) {
  deleteBtn.parentNode.remove();
}

function editedTask(tile, checkBox, label, newTask, editBtn, deleteBtn, okBtn) {
  label = document.createElement("label");
  label.innerText = newTask.value;
  newTask.remove();
  okBtn.remove();
  appendingElementsToTile(checkBox, label, editBtn, deleteBtn, tile);
  tasks.appendChild(tile);

  checkBox.addEventListener("click", () => checkBoxEvent(checkBox, label));

  deleteBtn.addEventListener("click", () => deleteTask(deleteBtn));
}

function appendingElementsToTile(checkBox, label, editBtn, deleteBtn, tile) {
  tile.appendChild(checkBox);
  tile.appendChild(label);
  tile.appendChild(editBtn);
  tile.appendChild(deleteBtn);
}
