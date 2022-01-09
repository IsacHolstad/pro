var animal = "bruh";
console.log(animal);
//warm up
let fruits = ('Apple', 'Banana')
console.log(fruits.length)
//2
let first = fruits(0)
//apple
let last = fruits(fruits.length - 1)
//banana
fruits.forEach(function(item, index, array) {
    console.log(item, index)
})
//apple 0
//banana 1
let newLength = fruits.push('Orange')
//("Apple", "Banana", "Orange",)
let last = fruits.pop() //remove orange (from the enter) 
// ("apple", "banana")