class Select extends Field {
    constructor(options) {
        super(options);
        this.name = "defaultName";
        this.listOption = [];
        this.required = false;
        options && Object.assign(this, options);
        this.create();
    }

    create() {
        this.element = document.createElement("select");
        this.element.name = this.name;
        for (let option of this.listOption) {
            let optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.innerHTML = option.label;
            this.element.appendChild(optionElement);
        }
    }

    verify() {
        return this.reportValidity();
    }
}