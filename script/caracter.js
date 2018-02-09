class Skills {
    constructor(skills = {}) {
        this.kindLooking = skills.kindLooking ? skills.kindLooking : 3;
        this.strongLooking = skills.strongLooking ? skills.strongLooking : 4;
        this.intelligenceLooking = skills.intelligenceLooking ? skills.intelligenceLooking : 4;
        this.goodLooking = skills.goodLooking ? skills.goodLooking : 3;
        this.sexiness = skills.sexiness ? skills.sexiness : 3;
        this.confidence = skills.confidence ? skills.confidence : 3;
    }
}

class State {
    constructor(state = {}) {
        this.health = state.health ? state.health : 5;
        this.mood = state.mood ? state.mood : 5;
        this.relax = state.relax ? state.relax : 5;
    }
}

export class Caracter {
    constructor(name) {
        this.name = name;
        this.skills = new Skills();
        this.state = new State();
    }
}
