class Country {
    public string Regime {get; private set;}
    public string Place {get; private set;}
    public string Name { get {return Regime + " of " + Place;}}

    public Country() {
        var random = new Random();
        int regimeIndex = random.Next(Regimes.Length);
        Regime = Regimes[regimeIndex];
        int placeIndex = random.Next(Places.Length);
        Place = Places[placeIndex];
    }

    static string[] Regimes = new string[] {
        "the Republic",
        "the Monarchy",
        "the People's Republic",
        "the Oligarchy",
        "the Dictatorship",
        "the Anarchy",
        "the Federation"
    };

    static string[] Places = new string[] {
        "Grambodia",
        "Lubando",
        "Churrunk",
        "Sord",
        "Mebdanon",
        "Esbrakini",
        "Wimland",
        "Prabreich"
    };
}