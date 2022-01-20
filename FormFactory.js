class FormFactory {
    constructor(type, options) {
        switch (type) {
            case "input":
                return new Input(options);
            case "select":
                return new Select(options);
            case "checkbox":
                return new Checkbox(options);
            case "radio":
                return new Radio(options);
            case "textarea":
                return new TextArea(options);
            default:
                throw new Error("unknow field");
        }
    }
}