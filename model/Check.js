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

    getQuestion(x) {
        return this.question[x];
    }

    validateQuestion(x, response) {
        if (this.getQuestion(x).compareAnswer(response)) {
            this.pointsAcumulator += 25;
            this.category++;
        }

    }
    finish(x){
        return this.question[x].category === this.category;
    }
}