const CombatRole = [
    "Ground Attack",
    "Close Air Support",
    "Air superiority"
]

const SourceCountry = [
    // In this array the SFP and MS each have twice the probability of NFR
    [2, "The Moist States"],
    [1, "North Frumbian Republic"],
    [2, "South Frumbian Principality"]
]

function UnweightedRoll(sourceArray) {
    //Select a data row from a source array with an equal probability for each row

    //Generate a number greater than or equal to zero and less than 1
    var randomNumber = Math.random();
    //We want the max number of rows available to scale the random number
    var maxNumber = sourceArray.length;
    //Using floor we convert it to the integer part only. We can get out 0, 1, 2...Length - 1 .
    var rowIndex = Math.floor(randomNumber * maxNumber);
    //The selectedRow can now be used as an index to take a selection from the table.
    var selectedRow = sourceArray[rowIndex];
    //For simplicity I'm writing the output to the console, but you could put it anywhere.
    return selectedRow;
}

function WeightedRoll(sourceArray) {
    //Select a row from a source array using weights specified in rows

    var WeightMap = []
    var boundary = 0;
    var selectedRow;

    // Add up the weights so that each source row has a range of numbers associated with it
    for (var sourceIndex = 0; sourceIndex < sourceArray.length; sourceIndex++ ) {
        var entryWeight = sourceArray[sourceIndex][0];
        if (!Number.isInteger(entryWeight)) {
            throw new Error("Weight supplied was not an integer");
        }
        // The weight map entry includes the source index, the lower bound for a winning row, and the upper bound for a winning roll
        WeightMap.push([sourceIndex, boundary, boundary -1 + entryWeight]);
        // Increase the lower boundary for the next entry
        boundary += entryWeight;
    }

    // Generate a random number between 0 and boundary-1
    var randomNumber = Math.floor(Math.random() * boundary);

    // Look through the WeightMap to find the index chosen
    for (var row of WeightMap) {
        if (row[1] <= randomNumber && randomNumber <= row[2]) {
            //Use the selected index to find the correct row in the source array
            selectedRow = sourceArray[row[0]];

            return selectedRow;
        }
    }
}