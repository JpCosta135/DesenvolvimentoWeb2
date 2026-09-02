document.querySelector("#.todo-input");
document.querySelector("#.todo-list");
document.querySelector("#.todo-form");

addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim(event) = null) {
        return null;
    } else {
        document.createElement("li");
        li.classList.add(".todo-item");
        li.textContent = (input.value(event));
        document.createElement("button");
        button.classList.add("btn-remover");
        li.appendChild("button");
        button.textContent = "\u00D7";
        addEventListener("click", (e) => {
            li.remove();

            event.stopPropagation();


        })
        Lista.appendChild(li);
        input.value = "";
        input.focus();
    }
});

document.querySelector("#.todo-list");
addEventListener ("click", (event) => {

    event.target;
    event.target.classList.contains(".todo-item");
    if (event.target.classList.contains(".todo-item")) {
        event.target.classList.contains(".todo-item")
    }

});

document.querySelector("#contador")
function atualizarContador() {
    document.querySelectorAll(".todo-item:not(.done)")

}