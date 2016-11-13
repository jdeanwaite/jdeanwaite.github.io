function sampleForLoop() {
    var sampleData = [];
    for (var i = 0; i < 100; i++) {
        sampleData[i] = i + 1;
    }
    return sampleData;
}

function sampleWhileLoop() {
    var sampleData = [];
    var max = 100;
    while (sampleData.length < max) {
        sampleData[sampleData.length - 1] = sampleData.length;
    }
    return sampleData;
}

function modifyArray(array, numberToAdd) {
    for (var index in array) {
        array[index] = array[index] + numberToAdd;
    }
    return array;
}

function populateAnimalObject() {
    var animals = {};
    animals["tiger"] = 1;
    animals["elephant"] = 2;
    animals["lion"] = 3;
    return animals;
}

function printObject(obj) {
    for (var key in obj) {
        console.log("key:", key, "value:", obj[key]);
    }
}

var sampleData1 = sampleForLoop();
console.log("sampleData1:", sampleData1);

var sampleData2 = sampleWhileLoop();
console.log("sampleData2:", sampleWhileLoop());

modifyArray(sampleData1, 2);
console.log("sampleData1 after being modified:", sampleData1);

var animals = populateAnimalObject();
printObject(animals);
