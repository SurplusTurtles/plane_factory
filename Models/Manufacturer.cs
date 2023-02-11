class Manufacturer {
    public string Name {get; set;}
    public string Sector {get; set;}

    public Manufacturer() {
        var rand = new Random();
        int pIndex = rand.Next(Prefixes.Length);
        int sIndex = rand.Next(Suffixes.Length);
        Name = Prefixes[pIndex] + " " + Suffixes[sIndex];

        int sectorIndex = rand.Next(Sectors.Length);
        Sector = Sectors[sectorIndex];
    }


    static string[] Prefixes = new string[] {
        "Gasparov",
        "Meechim",
        "Fairfield",
        "Excelsior",
        "Grunnimon",
        "Embael",
        "Huibec",
        "Tian",
        "Czekol",
        "Juaga",
        "Kokoro",
        "Djun"
    };

    static string [] Suffixes = new string[] {
        "Industries",
        "Design Bureau",
        "Heavy Industry",
        "Aeronautics",
        "Inc.",
        "Research",
        "Labs",
        "Aerospace",
        "Combine",
        "Chaebol",
        "GmbH",
        "Zaibatsu"
    };

    static string[] Sectors = new string[] {
        "civilian",
        "military",
        "dual purpose"
    };
}