import {objQuestion1, objQuestion2,} from './controller/ctrQuestion.js';
import "./model/Question.js";
import {Check} from './model/Check.js';
//import { questionView } from '../view/View.js';
 //questionView();
//console.log(objQuestion1[0].compareAnswer('0'));

  
export const main = (_event) =>{
    const quiz = new Check(objQuestion1);
    //console.log(quiz)
    console.log(quiz.validateQuestion('0','0'));
    console.log(quiz);
};