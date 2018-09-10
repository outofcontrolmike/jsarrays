// Musketeers

const Musketeers = ["Athos", "Porthos", "Aramis"];

console.log(Musketeers.length);

for (i = 0; i < Musketeers.length; i++)
    {
        console.log(Musketeers[i]);
    }

Musketeers.unshift("D'Artagnan");
console.log(Musketeers[0]);
console.log(Musketeers);

Musketeers.forEach(myElement =>
    {
        console.log(`For Loop ${myElement}`);
    });

Musketeers.pop("")


