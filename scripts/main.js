
//------------------------FOR EACH---------------------------------

// foreach -- console log each item in the array
let arrayOfEmojis =["😐", "😈", "👾", "👍", "🐿","🐳","🐙","🦖"]

//This for loop prints each emoji separately 
for (let index = 0; index < arrayOfEmojis.length; index++) {
    console.log(arrayOfEmojis[index])
}
//This forEach does the same thing a the for loop. Remember, a forEach is just a for loop with logic built in
arrayOfEmojis.forEach(emoji => {
    console.log(emoji)
});

//------------------------FILTER---------------------------------

//Filtering - return an array containing only even numbers
let myOriginalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//This for loop populates the newEvenArray with only even numbers
let newEvenArray = []
for (let index = 0; index < myOriginalNumbers.length; index++) {
    if(myOriginalNumbers[index] % 2 === 0){
       newEvenArray.push(myOriginalNumbers[index])
    }
}
console.log(newEvenArray)

//This for each does all the work of the previous for loop with only one line of code
let filteredArray = myOriginalNumbers.filter(number => number % 2 === 0)

//the filter does not CHANGE the original array, it makes a new array
console.log(filteredArray)
console.log(myOriginalNumbers)

//------------------------FIND---------------------------------

//Find - find the doughnut with a certain type
let doughnutList = [
    {
        name: "super sprinkle",
        type: "cake",
        flavor: "strawberry",
        glaze: "classic",
        topping: "sprinkles"

    },
    {
        name: "chocolate yum",
        type: "cake",
        flavor: "chocolate",
        glaze: "chocolate",
        topping: "chocolate cookie crumbles"

    },
    {
        name: "blueberry batter",
        type: "cake",
        flavor: "blueberry",
        glaze: "vanilla",
        topping: "freeze dried blueberries"

    }

]

//This find returns only the FIRST doughnut that matches the condition. Even though all doughnuts are of type cake it will only return one.
let bestDoughnut= doughnutList.find(doughnut => doughnut.type === "cake")
console.log(bestDoughnut)

//------------------------MAP---------------------------------

// map ----> map over the doughnuts and return an html string, put that string on the dom
let doughnutSection = document.getElementById("myDoughnuts")

//mapping over the array of objects and TRANSFORMING it to an array of html strings
let htmlStringArray = doughnutList.map(doughnut => {
    return `
    <h1>${doughnut.name}</h1>`
})
console.log(htmlStringArray)

//take the array of html strings and join them on the space. Results in string. 
let bigOlString = htmlStringArray.join(" ")

console.log(bigOlString)

doughnutSection.innerHTML = bigOlString


//------------------------REDUCE---------------------------------


// reduce ---> total the amount of doughnutSales for each doughnut type

let doughnutSales = [
    {
        storeName: "random store",
        yearlySalesTotal: [1001, 2098, 4736, 82638],
        storeLocation: "Downtown",

    },
    {
        storeName: "local store",
        yearlySalesTotal: [1836, 2838, 72742, 836364],
        storeLocation: "Downtown",

    },
    {
        storeName: "awesome store",
        yearlySalesTotal: [625474, 2098, 8474, 836374],
        storeLocation: "Downtown",

    }

]

//first we must loop over the whole donut sales array to access the yearly sales total of each
doughnutSales.forEach(store => {
    //reduce loops over the yearlySalesTotal array and adds all the values together
    let totalSales = store.yearlySalesTotal.reduce((currentValue, nextValue) => currentValue += nextValue, 0)
    //creating a new object with only the store name and total sales
    let newObject = {
       name: store.storeName,
       totalSales:totalSales
     }
   console.log(newObject)
})

let bunchOfStrings = ["one", "two", "three", "four"]

//you can also use reduce to join together strings
let oneString = bunchOfStrings.reduce((currentWord, nextWord) => currentWord + " " + nextWord,"")
console.log(oneString)



