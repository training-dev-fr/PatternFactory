class Radio extends Field {
    constructor(options) {
        this.type = "text";
        this.name = "defaultName";
        this.required = false;
        options && Object.assign(this, options);
        this.create();
    }

    create() {
        this.element = document.createElement("input");
        this.element.type = this.type;
        this.element.name = this.name;
    }

    verify() {
        return this.reportValidity();
    }
}