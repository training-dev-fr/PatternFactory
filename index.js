const field = document.querySelector("#field");
const type = document.querySelector("#type");
const name = document.querySelector("#name");

document.querySelector("#addField").addEventListener("click", function() {
    let element = new FormFactory(field.value, { type: type.value, name: name.value });
    element.append();
});