let array = [90, 98, 89, 100, 100, 86, 94];
let array2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


function avg(array) {
    let sum = 0
    array.forEach(testScore => {
        sum += testScore
    })

    let avg = sum / array.length;
    return Math.round(avg)
}

console.log(avg(array))
console.log(avg(array2))
