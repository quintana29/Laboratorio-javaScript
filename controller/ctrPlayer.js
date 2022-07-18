//@ts-check
import { Player } from '/model/Player.js';

export class ctrPlayer{
/**
 * Este constructor se utiliza para inicializar la clase con un objeto de tipo Player
 * @param {Player} Player Esta variable contiene un objeto de tipo Player
 */
    constructor(Player){

        this.player = Player;
    }
    /**
     * Este metodo guarda en el LocalStorage un nuevo registro de jugador
     * @param {String} key Contiene una varible de tipo String,
     *  que sirve de identificador para el usuario 
     */
    savePlayer(key){
    localStorage.setItem(key, JSON.stringify(this.player) )
    }
}