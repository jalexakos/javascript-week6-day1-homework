// Exercise 1
function findWords(str1,arr){
    x = "No Matches"
    for(let i = 0; i < arr.length; i++){
        if(str1.search(arr[i]) !== -1){
            x = i
        }
    }
    return arr[x]
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// Exercise 2
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

console.log(findWords(dog_string,dog_names))
console.log(replaceEvens(given_arr))