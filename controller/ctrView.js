import { Check } from "/model/Check.js";
import {validarRespuesta} from '/app.js'
export class ctrView {

    constructor(){}
    
    printOptions(options, response){
        const container = document.querySelector("#container");
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

    printQuestion(messages){
        const tittle = document.getElementById('containerQuestion');
        tittle.textContent = messages;
    }
    printScore(messages){
        const score = document.getElementById('containerQuestion');
        score.textContent = messages;
    }

    clearView(){
        const questionContainer = document.querySelector("#containerQuestion");
        questionContainer = " ";
          
    }
}