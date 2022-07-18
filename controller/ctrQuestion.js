import {Question} from "../model/Question.js";
/**
 * Esta clase se utiliza para guardar objetos de tipo Question
 */
import {category1,category2,category3,category4,category5} from "../data/data.js"
/**
 * Esta funcion me genera a partir de un objeto tipo Json
 * otro objeto de tipo Question
 */
export const objQuestion1 = category1.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);
/**
 * Esta funcion me genera a partir de un objeto tipo Json
 * otro objeto de tipo Question
 */
export const objQuestion2 = category2.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);
/**
 * Esta funcion me genera a partir de un objeto tipo Json
 * otro objeto de tipo Question
 */
export const objQuestion3 = category3.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);
/**
 * Esta funcion me genera a partir de un objeto tipo Json
 * otro objeto de tipo Question
 */
export const objQuestion4 = category4.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);
/**
 * Esta funcion me genera a partir de un objeto tipo Json
 * otro objeto de tipo Question
 */
export const objQuestion5 = category5.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);

