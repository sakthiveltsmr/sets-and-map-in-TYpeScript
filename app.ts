//sets
let myset = new Set([1, 2, 3, 4, 4, 4]);

//return the size of set
console.log(myset.size);

//return set data

console.log(myset);

//add the set data

myset.add(10);
myset.add(12);

console.log(myset);

//check  the value present or not

console.log(myset.has(3));

//delete a value from set

myset.delete(3);
console.log(myset);

//clear whole set
myset.clear();
console.log(myset);
