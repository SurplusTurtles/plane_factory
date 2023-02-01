class Plane {
    role;
    sourceCountry;

    get Summary () {
        return `This is a ${this.role} aircraft manufactured by ${this.sourceCountry}.`;
    }

    constructor(countryArray = SourceCountry, unweighted=true){
        this.role = UnweightedRoll(CombatRole);
        if (unweighted) {
            this.sourceCountry = UnweightedRoll(countryArray)
        }
        else {
            this.sourceCountry = WeightedRoll(countryArray)[1];
        }
        
    }
}

class Country {
    adjective;
    regime;
    place;

    get Name() {
        return `The ${this.adjective} ${this.regime}` + (this.place == ''? '': ` of ${this.place}` );
    }

    constructor() {
        this.adjective = UnweightedRoll(CountryAdjectives);
        this.regime = UnweightedRoll(CountryRegimes);
        if (Math.random() > .5) {
            this.place = UnweightedRoll(CountryPlaces);
        }
        else {
            this.place = '';
        }
        
    }
}