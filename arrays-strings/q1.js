/* Write a program to print to duplicate elements of an array .

Sample_input : [1,1,2,3,3,4,5,6,6]

Sample_ouptut : 1,3,6 

*/

function findDuplicates(arr) {
    const uniqueElements = new Set(arr);
    const filteredElements = arr.filter(element => {
        if (uniqueElements.has(element)) {
            uniqueElements.delete(element);
        } else {
            return element;
        }
    });

    return [...new Set(filteredElements)]
}

const arr = [1,1,2,3,3,4,5,6,6];
const duplicateElements = findDuplicates(arr);
console.log(duplicateElements);