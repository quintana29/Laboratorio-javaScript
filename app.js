import {objQuestion1, objQuestion2,objQuestion3,objQuestion4,objQuestion5} from './controller/ctrQuestion.js';
import "./model/Question.js";
import {Check} from './model/Check.js';
import { ctrView } from './controller/ctrView.js';
import {Player} from '/model/Player.js'
import {ctrPlayer} from '/controller/ctrPlayer.js'


let ronda = 1;
let points = 0;
/**
 * Esta funcion permite iterar y controlar la ronda en la que se encuentra 
 * el juego, mostrando por pantalla las preguntas que son generadas de manera aleatoria,
 * se distribuye en casos y cada caso representa una ronda o categoria
 * @param {Integer} ronda Esta variable almacena la ronda actual 
 * en la que se encuentra el juego, permitiendo llevar un control de las iteraciones
 */
const render = (ronda) => {
    let randon = Math.floor((Math.random() * (5 - 1 - 1)) + 1);
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
            console.log(points)
            window.alert("Puntaje acumulado"+points);
            const name = window.prompt("Ingrese el nombre para su registro",0);
            const player = new Player(name,points);
            const rand = name+(Math.random() + 1).toString(36).substring(7);
            const ctrPlayers = new ctrPlayer(player);
            ctrPlayers.savePlayer(rand);
            window.alert("Su registro fue guradado con exito");
            location.href = "/index.html";
            break
        default:
            points = 0;
            window.alert("");
            location.href = "/index.html";
                break
    }

};
/**
 * Esta funcion me renderiza desde la vista,
 * para iniciar la ejecución y procesamiento de datos,
 * La funcion crea objetos para conectar con la parte visual
 * @param {event} _event Esta variable se escribe pero no se usa
 */
export const main = (_event) => {

    let randon = Math.floor((Math.random() * (5 - 1 - 1)) + 1);
    if (ronda === 1) {
        const quiz = new Check(objQuestion1);
        const view = new ctrView();
        view.printQuestion(quiz.question[randon].question);
        view.printOptions(quiz.question[randon].options, quiz.question[randon].answer);

    }
}
/**
 * Esta funcion permite validar si la respuesta que selecciono el usuario
 * es la correcta, tambien permite aumentar la ronda y los puntos o reiniciar el juego
 * @param {String} option Variable que almacena la opción elegida por el usuario
 * @param {String} response Variable que almacena la respuesta a la pregunta
 */
export const validarRespuesta = (option, response) => {

    if (option === response) {

        points += 25;
        ronda += 1;
        render(ronda)
    }else{
        points = 0;
        window.alert("Respuesta incorrecta, volver a intentar");
        location.href = "/index.html";
    }
}

