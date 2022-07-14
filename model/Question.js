export class Question {
    /**
     * 
     * @param {Integer} category categoria a la que pertenece la pregunta
     * @param {String} question Pregunta a procesar
     * @param {String[]} options Arreglo con las posibles respuestas
     * @param {Integer} answer Respuesta a la pregunta
     */
    constructor(category, question, options, answer) {
        this.category = category;
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    /**
     * 
     * @param {Integer} option Recibe la opción a validar
     * @returns {Boolean} Retorna un valor booleano despues de comparar si la opción enviada es correcta
     */
    compareAnswer(option) {
        return option === this.answer
    }
}

