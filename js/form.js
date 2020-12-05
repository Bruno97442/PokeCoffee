import { inputType, regexObject } from "./config.js";
import { FormEntity } from "./FormEntity.js";
import { InputAlert } from "./InputAlert.js";

class FormController {

    /**
     * @var {HTMLFormElement} form 
     */
    _form;
    get form() {
        return this._form;
    }
    set form(value) {
        this._form = value;
    }

    /**
     * @var {string} formSelector
     */
    _formSelector;
    get formSelector() {
        return this._formSelector;
    }
    set formSelector(value) {
        this._formSelector = value;
    }

    readyToSendForm = false;

    formObject




    /**
     * 
     * @param {string} formSelector 
     */
    constructor(formSelector = "form", event = 'keyup') {
        this.form = document.querySelector(formSelector);
        this.event = event;
        this.inputs = Array.from(this.form.querySelectorAll(`${formSelector} input[name]`))

        this.regexObject = regexObject
        this.inputType = inputType


    }

    /**
     * 
     * @param {HTMLInputElement} input 
     */
    fieldController(input) {
        
        let infoArray = this.inputType[input.getAttribute('type')].split(' ')
        infoArray.forEach((element) => {
            input.dataset[element] = !!input.value.match(this.regexObject[element][0])
        });
        input.alert.displayManager()
    }

    run() {



        let event = this.event;

        this.form.addEventListener("submit", e => {
            e.preventDefault();
            if (this.readyToSendForm) this.formObject = new FormEntity(document.querySelector('form'))

        })

        // 
        this.inputs.forEach(input => {
            input.alert = new InputAlert(input)
            input.addEventListener(event, e => {
                e.stopPropagation();
                this.fieldController(input)

            })
        })
    }

}

let formEntity = new FormEntity(document.querySelector('form'));
let formController = new FormController('form', 'keyup');
formController.run()

console.log(formEntity)