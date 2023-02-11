class Conflict {
    public string Scale {get; private set;}
    public string Resolution {get; private set;}

    public Conflict() {
        var rand = new Random();
        int scaleIndex = rand.Next(Scales.Length);
        Scale = Scales[scaleIndex];
        int resolutionIndex = rand.Next(Resolutions.Length);
        Resolution = Resolutions[resolutionIndex];
    }

    static string[] Scales = new string[] {
        "war",
        "total war",
        "border conflict",
        "skirmish",
        "hybrid war",
        "maritime dispute",
        "policing action"
    };

    static string[] Resolutions = new string[] {
        "victory",
        "white peace",
        "truce",
        "stalemate",
        "disaster"
    };
}