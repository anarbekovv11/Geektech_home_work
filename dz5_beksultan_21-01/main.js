const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!input.value) return false;
    const task = input.value; 
    const task_el = document.createElement("div");
    const task_content_el = document.createElement("div");

    task_el.append(task_content_el);

    const task_input_el = document.createElement("input"); 
    task_input_el.value = task;
    
    task_content_el.append(task_input_el);

    const task_actions_el = document.createElement("div");

    const task_edit_el = document.createElement("button");
    task_edit_el.innerText = "Edit";
    const task_delete_el = document.createElement("button");
    task_delete_el.innerText = "Delete";
    

    task_actions_el.append(task_edit_el);
    task_actions_el.append(task_delete_el);
    task_el.append(task_actions_el);
    list_el.append(task_el);

    input.value = "";
    task_edit_el.onclick = () => {
      const edit = prompt("Поменять на");
      task_content_el.innerText = edit;
    };
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });