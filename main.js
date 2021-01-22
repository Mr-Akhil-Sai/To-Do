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

  tile.appendChild(checkBox);
  tile.appendChild(label);
  tile.appendChild(deleteBtn);

  checkBox.addEventListener("click", () => checkBoxEvent(checkBox, label));
  deleteBtn.addEventListener("click", () => deleteTask(deleteBtn));
}

function checkBoxEvent(checkBox, label) {
  if (checkBox.checked) {
    label.classList.add("labelStrikeThrough");
    return;
  }
  label.classList.remove("labelStrikeThrough");
}

function deleteTask(deleteBtn) {
  deleteBtn.parentNode.remove();
}
