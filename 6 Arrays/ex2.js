const numbers = [1,2,3,4];

console.log(includes(numbers,-1));

function includes(array, searchElement) {
    if (searchElement in array){
        return true
    }
    return false
    
}