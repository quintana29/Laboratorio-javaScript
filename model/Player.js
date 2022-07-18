export class Player {
    /**
     * Este constructor inicializa la clase Player 
     * con nuevos parametros
     * @param {String} name Esta variable almacena el nombre del jugador
     * @param {Integer} score Esta variable almacena el puntaje total del jugador
     */
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    /**
     * Esta funcion retorna el nombre de un jugador almacenada en el objeto
     * @returns Retorna el nombre del jugador 
     */
    getName() {
        return this.name;
    }
    /**
     * Este metodo permite asignar un nombre al objeto Player
     * @param {String} name Esta variable almacena el nombre del jugador
     */
    setName(name) {
        this.name = name;
    }
}