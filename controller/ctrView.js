import { Check } from "/model/Check.js";
import {validarRespuesta} from '/app.js'
export class ctrView {
/**
 * Este constructor vacio permite crear nuevas 
 * instancias de la clase ctrView
 */
    constructor(){ }
    /**
     * Este metodo va a ir mostrando las posibles respuestas
     * a la pregunta, traidas desde el objeto Json, para posteriormente ser mostradas 
     * pantalla.
     * @param {Array} options Esta variable contiene posibles respuestas de la pregunta
     * @param {String} response Esta variable contiene la respuesta correcta de la pregunta
     */
    printOptions(options, response){
        
        let questionContainer = document.querySelector("#containerQuestion");
        const keyContainer = document.createElement("div");
        keyContainer.id = "containerButton"
        keyContainer.innerHTML = "";
        
            
        options.forEach(element => {

        const keyButton = document.createElement("button");
        keyButton.classList.add("button");
        keyButton.id = "option";
        keyButton.textContent = element;
        keyButton.addEventListener('click', () => validarRespuesta(element,response));

        keyContainer.append(keyButton);
        });
        questionContainer.append(keyContainer)    
        
    }
    /**
     * Este metodo se usa para mostrar por pantalla la descripción de la pregunta
     * @param {String} messages Esta variable contiene la descripción de la pregunta
     */

    printQuestion(messages){
        const tittle = document.getElementById('containerQuestion');
        tittle.textContent = messages;
    }

}