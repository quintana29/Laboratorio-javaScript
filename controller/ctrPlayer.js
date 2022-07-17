//@ts-check
import { Player } from '/model/Player.js';

export class ctrPlayer{

    constructor(Player){

        this.player = Player;
    }

    savePlayer(key){
    localStorage.setItem(key, JSON.stringify(this.player) )
    }
}