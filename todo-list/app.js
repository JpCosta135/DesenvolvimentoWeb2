const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const form = document.querySelector("#todo-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === "") {
        return null;
    } else {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.textContent = input.value;
        const button = document.createElement("button");
        button.classList.add("btn-remover");
        li.appendChild(button);
        button.textContent = "\u00D7";
        button.addEventListener("click", (e) => {
            li.remove();

            event.stopPropagation();
        });
        list.appendChild(li);
        input.value = "";
        input.focus();
    }
});

list.addEventListener ("click", (event) => {

    event.target;
    event.target.classList.contains("todo-item");
    if (event.target.classList.contains("todo-item")) {
        event.target.classList.toggle("done");
    }

});

const contador = document.querySelector("#contador");
function atualizarContador() {
    document.querySelectorAll("todo-item:not(.done)")

}

console.log("teste");