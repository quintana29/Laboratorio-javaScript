//@ts-check
import { Question } from "./Question.js"
export class Check {

    category = 1;
    pointsAcumulator = 0;
    
    /**
     * 
     * @param { Question[] } Question 
     */
    constructor(Question) {
        this.question = Question;
    }
    set(category){
        this.category= category;
    }
    get(){
        return this.category;
    }

    getQuestion(x) {
        return this.question[x];
    }

    validateQuestion(x, response) {
        console.log(x);
        if (this.getQuestion(x).compareAnswer(response)) {
            this.pointsAcumulator += 25;
            this.category++;
        }

    }
    validarRespuesta(x, response){   
        console.log(x);
        console.log(response)
        if(x === response){
            console.log("True")
            this.pointsAcumulator += 25;
            
            /*let questionContainer = document.querySelector("#containerQuestion");
            let category = document.getElementById('category');
            category.textContent = category
            //category.innerHTML = ; */
            

            this.set(this.category+=1);
        }
    }
    finish(x){
        return this.question[x].category === this.category;
    }
}