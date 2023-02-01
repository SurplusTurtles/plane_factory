class Plane {
    role;
    sourceCountry;

    get Summary () {
        return `This is a ${this.role} aircraft manufactured by ${this.sourceCountry}.`;
    }

    constructor(){
        this.role = UnweightedRoll(CombatRole);
        this.sourceCountry = WeightedRoll(SourceCountry)[1];
    }
}