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

    readyToSendForm = [];

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
     * @return {boolean} formulaire bien rempli
     */
    formController(){
        let formState = []
        this.inputs.forEach( input => formState.push(this.fieldController(input)))

        return formState.every(x => x)
    }

    /**
     * 
     * @param {HTMLInputElement} input 
     * @return {boolean} champs bien rempli
     */
    fieldController(input) {

        // récupère le tableau de directive des filtres regex
        let infoArray = this.inputType[input.getAttribute('type')].split(' '),
            state = []

        // pour chaque filtre ecrit l'état de validation du champs dans le dataset
        infoArray.forEach((element) => {
            let match = !!input.value.match(this.regexObject[element][0])
            input.dataset[element] = match
            state.push(match)
        });
        input.alert.displayManager()

        return state.every(x => x)
    }

    run() {

        // gestion de la soumission
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            this.readyToSendForm = this.formController()
            
            if (this.readyToSendForm) this.formObject = new FormEntity(document.querySelector('form'))
            console.log(this.formObject)
        })

        // gestion des controle
        this.inputs.forEach(input => {
            input.alert = new InputAlert(input)
            input.addEventListener(this.event, e => {
                e.stopPropagation();
                this.fieldController(input)
            })
        })
    }
}

// let formEntity = new FormEntity(document.querySelector('form'));
let formController = new FormController('form', 'keyup');
formController.run()
