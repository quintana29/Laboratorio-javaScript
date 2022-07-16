import {objQuestion1, objQuestion2,objQuestion3,objQuestion4,objQuestion5} from './controller/ctrQuestion.js';
import "./model/Question.js";
import {Check} from './model/Check.js';
import { ctrView } from './controller/ctrView.js';
import {Player} from '/model/Player.js'
import {ctrPlayer} from '/controller/ctrPlayer.js'


let ronda = 1;
let points = 0;

const render = (ronda) => {
    let randon = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    switch (ronda) {
        case 2:
            const quiz2 = new Check(objQuestion2);
            const view2 = new ctrView();

            view2.printQuestion(quiz2.question[randon].question);
            view2.printOptions(quiz2.question[randon].options, quiz2.question[randon].answer);
            break;

        case 3:
            const quiz3 = new Check(objQuestion3);
            const view3 = new ctrView();

            view3.printQuestion(quiz3.question[randon].question);
            view3.printOptions(quiz3.question[randon].options, quiz3.question[randon].answer);
            break;

        case 4:
            const quiz4 = new Check(objQuestion4);
            const view4 = new ctrView();
            view4.printQuestion(quiz4.question[randon].question);
            view4.printOptions(quiz4.question[randon].options, quiz4.question[randon].answer);
            break;
        case 5:
            const quiz5 = new Check(objQuestion5);
            const view5 = new ctrView();
            view5.printQuestion(quiz5.question[randon].question);
            view5.printOptions(quiz5.question[randon].options, quiz5.question[randon].answer);
            break;
        case 6:
            const name = window.prompt("Ingrese el nombre para su registro",0);
            break
    }

};
export const main = (_event) => {

    let randon = Math.floor((Math.random() * (5 - 1 + 1)) + 1);
    if (ronda === 1) {
        const quiz = new Check(objQuestion1);
        const view = new ctrView();
        view.printQuestion(quiz.question[randon].question);
        view.printOptions(quiz.question[randon].options, quiz.question[randon].answer);

    }
}
export const validarRespuesta = (option, response) => {

    if (option === response) {

        points += 25;
        ronda += 1
        const view = new ctrView();
        //view.printScore(points);
        render(ronda)
        console.log(points);
    }else{
        points = 0;
        window.alert("Respuesta incorrecta, volver a intentar");
        location.href = "/index.html";
    }
}

