//@ts-check
import { Player } from "/model/Player.js";

export class ctrPlayer{

    constructor(Player){

        this.player = Player;
    }

    savePlayer(){
        localStorage.setItem("Player", JSON.stringify(this.player) )
    }
}