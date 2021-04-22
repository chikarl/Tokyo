
const numbers = [1,2,3,4 , 1 ];

const count = countOccurrences(numbers, 1)

console.log(count);

function countOccurrences(array, seachElement){
   /* let count = 0 
    for (let element of array)
        if (element === seachElement)
            count++;
    return count;*/

    return array.reduce((accumelator, current) => {
        const occurrence = (current === seachElement) ? 1:0;
        console.log(accumelator, current, seachElement);
        return accumelator + occurrence;
    }, 0);

}