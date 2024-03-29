// 35- Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["cat", "rabbit", "dog"];
animals.map(function (items) { return console.log(items); });
for (var i = 0; i < animals.length; i++) {
    if (animals[i] === "cat") {
        console.log(" A ".concat(animals[i], " can be an independent yet affectionate pet."));
    }
    else if (animals[i] === "rabbit") {
        console.log(" A ".concat(animals[i], " is a cute and low-maintenance pet."));
    }
    else if (animals[i] === "dog") {
        console.log(" A ".concat(animals[i], " would make a great animal."));
    }
    else {
        console.log("undefined animal.");
    }
}
console.log("Any of these animals would make a great pet!");
