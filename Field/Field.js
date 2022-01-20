class Field {
    constructor(options) {
        this.label = document.createElement("label");
        this.label.innerHTML = options.name;
    }

    verify() {
        return this.reportValidity();
    }

    append() {
        let formfield = document.createElement("div");
        formfield.classList.add("form-field");
        formfield.appendChild(this.label);
        formfield.appendChild(this.element);
        document.querySelector("#form").appendChild(formfield);
    }
}