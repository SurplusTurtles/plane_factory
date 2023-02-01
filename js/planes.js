class Plane {
    role;
    sourceCountry;

    get Summary () {
        return `This is a ${this.role} aircraft manufactured by ${this.sourceCountry}.`;
    }

    constructor(){
        this.setRole();
        this.setSourceCountry();
    }
    setRole() {
        this.role = UnweightedRoll(CombatRole);
    }
    setSourceCountry() {
        this.sourceCountry = WeightedRoll(SourceCountry)[1];
    }
}