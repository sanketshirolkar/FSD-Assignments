/*Write a program to find the element with highest freqencyuency in an array.

Sample_input :[1,2,4,3,2,4,2,5,7,2]

Sample_output :2 
*/

let array=[1,2,4,3,2,4,2,5,7,2];
let freqency = 1;
let counter = 0;
let element;

for (let i=0; i < array.length; i++)
{
        for (let j=i; j<array.length; j++)
        {
                if (array[i] === array[j])
                 counter++;
                if (freqency < counter)
                {
                  freqency = counter; 
                  element = array[i];
                }
        }
        counter=0;
}
console.log(element+" ( " +freqency +" times ) ") ;