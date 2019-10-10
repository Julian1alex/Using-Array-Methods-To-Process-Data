
// var sum = items.reduce(function(a, b){
// return {
//     sum: a + b.price, 0
//     avg: sum/price

// }
// },{


// })

// document.querySelector("#answer1").innerHTML = `The average of all prices is ${price.toFixed(2)}`

//2. Show me an array of items that cost between $14.00 and $18.00 USD?//

var arr = []

var saving = items.filter (function(result){
    if (result.price > 14.00 && 18.00 > result.price) {
    arr.push(result.title)
    }
})
var realsaving = arr.join("\n")
document.querySelector("#answer2").innerHTML =  `${realsaving}`

var arr = []

var gbp = items.filter (function(money){
    if (money.currency_code = "GBP") {
    arr.push(money.title && money.price)
    }
})
var realgbp = arr.join("\n")
document.querySelector("#answer3").innerHTML =  `${realgbp}`   

var arr = []

var wood = items.filter (function(material){
    if (material = "wood") {
    arr.push(material.title)
    }
})
var truewood = arr.join("\n")
document.querySelector("#answer4").innerHTML =  `${truewood}`   

