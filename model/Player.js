export class Player {
    /**
     * 
     * @param {*} name 
     * @param {*} score 
     */

    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}