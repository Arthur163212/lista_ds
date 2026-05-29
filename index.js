let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let doneCount = document.getElementById("doneCount");
let darkModeBtn = document.getElementById("darkMode");
let clearAllBtn = document.getElementById("clearAll");

let count = 0;
let done = 0;

function updateCount() {
    taskCount.innerText = count;
    doneCount.innerText = done;
}

addBtn.addEventListener("click", function () {
    if (input.value === "") {
        alert("Digite um exercício!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = "🏋️ " + input.value;

    let buttonsGroup = document.createElement("div");
    buttonsGroup.classList.add("buttons-group");

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "✔ Feito";
    doneBtn.classList.add("done-btn");

    doneBtn.addEventListener("click", function () {
        let jaConcluido = li.classList.toggle("concluido");

        if (jaConcluido) {
            done++;
            doneBtn.innerText = "↩ Desfazer";
        } else {
            done--;
            doneBtn.innerText = "✔ Feito";
        }

        updateCount();
    });

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "✖ Remover";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
        if (li.classList.contains("concluido")) {
            done--;
        }
        li.remove();
        count--;
        updateCount();
    });

    buttonsGroup.appendChild(doneBtn);
    buttonsGroup.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(buttonsGroup);

    taskList.appendChild(li);

    count++;
    updateCount();
    input.value = "";
});

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");
});

clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    count = 0;
    done = 0;
    updateCount();
});