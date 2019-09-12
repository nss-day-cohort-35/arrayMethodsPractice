//foreach -- console log each item in the array
// let arrayOfEmojis =["😐", "😈", "👾", "👍", "🐿","🐳","🐙","🦖"]
// for (let index = 0; index < arrayOfEmojis.length; index++) {
//     console.log(arrayOfEmojis[index])
// }

// arrayOfEmojis.forEach(emoji => {
//     console.log(emoji)
// });








//Filtering - return an array containing only even numbers
let myOriginalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let newEvenArray = []
for (let index = 0; index < myOriginalNumbers.length; index++) {
    if(myOriginalNumbers[index] % 2 === 0){
       newEvenArray.push(myOriginalNumbers[index])
    }
}
// console.log(newEvenArray)

let filteredArray = myOriginalNumbers.filter(number => number % 2 === 0 && number + 7 === 9 )
console.log(filteredArray)
console.log(myOriginalNumbers)






//Find - find the doughnut with a certain name, then certain type
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
let bestDoughnut= doughnutList.find(doughnut => doughnut.type === "cake")
console.log(bestDoughnut)

// map ----> map over the doughnuts and return an html string, put that string on the dom

let doughnutSection = document.getElementById("myDoughnuts")

let htmlStringArray = doughnutList.map(doughnut => {
    return `
    <h1>${doughnut.name}</h1>`
})

console.log(htmlStringArray)

let practiceArray = ["mo", "likes", "eMOjis"]
let withEmojis = practiceArray.join("👾")
console.log(withEmojis)
let bigOlString = htmlStringArray.join(" ")

console.log(bigOlString)

doughnutSection.innerHTML = bigOlString




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

doughnutSales.forEach(store => {
    let totalSales = store.yearlySalesTotal.reduce((currentValue, nextValue) => currentValue += nextValue, 0)
   let newObject = {
       name: store.storeName,
       totalSales:totalSales
   }
   console.log(newObject)
})

let bunchOfStrings = ["one", "two", "three", "four"]

let oneString = bunchOfStrings.reduce((currentWord, nextWord) => currentWord + " " + nextWord,"")
console.log(oneString)



