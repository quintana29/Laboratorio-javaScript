import {Question} from "../model/Question.js";
import {category1,category2,category3,category4,category5} from "../data/data.js"

export const objQuestion1 = category1.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);

export const objQuestion2 = category2.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);

export const objQuestion3 = category3.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);


export const objQuestion4 = category4.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);

export const objQuestion5 = category5.map(
    question =>
        new Question(question.category, question.question, question.option, question.answer)
);

