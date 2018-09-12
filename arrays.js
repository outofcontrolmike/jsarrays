// Musketeers

const Musketeers = ["Athos", "Porthos", "Aramis"];

console.log(Musketeers.length);

// showing for loop for array 

for (i = 0; i < Musketeers.length; i++)
    {
        console.log(Musketeers[i]);
    }

// Adding D'Artagnan to array, decided to add to first index
Musketeers.unshift("D'Artagnan");
console.log(Musketeers[0]);
console.log(Musketeers);

// forEach Method
Musketeers.forEach(myElement =>
    {
        console.log(`For Loop ${myElement}`);
    });

// removing last element from array
Musketeers.pop(); 
console.log(Musketeers.length);
console.log(Musketeers[Musketeers.length-1]);

// for of loop

for (const myElement of Musketeers) {
    console.log(Musketeers);
}


 // Sum of values
const values = [3, 11, 7, 2, 9, 10];
console.log(values);
console.log(
    [3, 11, 7, 2, 9, 10].reduce((a, b) => a + b, 0));


// Maximum Value in array

//const values = [3, 11, 7, 2, 9, 10];
console.log(values);
console.log(Math.max(...values));





