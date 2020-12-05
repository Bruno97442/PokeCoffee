import { alertMsg } from "./config.js";

export class InputAlert {


    displayState = {
        alertBubble: false,
        Check: false,
        info: {}
    }

    /**
     * 
     * @param {HTMLDivElement} alertBubble 
     */
    alertBubble
    /**
     * 
     * @param {HTMLDivElement} alertCheck 
     */
    alertCheck
    /**
     * 
     * @param {HTMLInputElement} input 
     */
    constructor(input) {
        this.input = input

        this.alertMsg = alertMsg

    }

    datasetArray() {
        let obj = this.input.dataset, dataArray = []
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                dataArray = [...dataArray, [key, obj[key]]];

            }
        }
        return dataArray
    }
    /**
     * 
     * @param {Array} infoArray 
     */
    displayManager() {
        let infoArray = this.datasetArray()
        
        if (!infoArray.every(x => x[1] === "true")) {

            if(this.displayState.check)  this.alertCheck.remove()

            if (this.displayState.alertBubble === false) {
                this.displayState.alertBubble = true
                this.alertBubble = this.createBubble()
                infoArray.forEach(info => {
                    this.alertBubble.appendChild(this.createInfo(info[0], this.alertMsg[info[0]]))
                })
                this.input.after(this.alertBubble)

            } else {

                this.alertBubble.children
            }
            
            this.displayState.check = false


        } else {
            console.log(this.alertBubble)
            if (this.alertBubble !== undefined) this.alertBubble.remove() // à animer
            this.displayState.alertBubble = false

            if (!this.displayState.check) {
                this.alertCheck = this.createCheck()
                this.input.after(this.alertCheck)
                this.displayState.check = true
            }

        }



    }


    createBubble() {
        let alertBubble = document.createElement('div')
        alertBubble.classList = `alertbubble-${this.input.name}`
        alertBubble.style.position = "relative"
        alertBubble.style.margin = "0 0 -1rem 0"
        alertBubble.style.left = "0"
        alertBubble.style.top = "100%"
        alertBubble.style.backgroundColor = "#eb8c8c"
        alertBubble.textContent = "Uniquement..."

        return alertBubble
    }

    createInfo(className, message) {
        let alertSpan = document.createElement('span')
        alertSpan.classList = className
        alertSpan.style.display = "inline-block"
        alertSpan.style.padding = "0.2rem"
        alertSpan.textContent = message

        return alertSpan
    }

    createCheck() {
        let checkMark = document.createElement('span')
        checkMark.classList = "check"
        checkMark.style.position = "absolute"
        checkMark.style.display = "inline-block"
        checkMark.style.fontSize = "3rem"
        checkMark.style.color = "#0f0"
        checkMark.style.margin = "-1.5rem 0"
        checkMark.style.padding = "0.2rem"
        checkMark.innerHTML = '&check;'

        return checkMark
    }

}