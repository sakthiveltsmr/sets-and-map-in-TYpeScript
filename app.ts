// //sets
// let myset = new Set([1, 2, 3, 4, 4, 4]);

// //return the size of set
// console.log(myset.size);

// //return set data

// console.log(myset);

// //add the set data

// myset.add(10);
// myset.add(12);

// console.log(myset);

// //check  the value present or not

// console.log(myset.has(3));

// //delete a value from set

// myset.delete(3);
// console.log(myset);

// //clear whole set
// myset.clear();
// console.log(myset);

// //map

// //create map

// var map = new Map();

// //add the data from map

// map.set(1, "sakthi");
// map.set(2, "muthu");
// map.set(3, "sadheesh");

// console.log(map);

// //get the key value

// console.log(map.get(1));

// //check the key availale or not

// console.log(map.has(1));

// //find map size

// console.log(map.size);

// //delete the value
// map.delete(3);
// console.log(map);

//for each

// var number = [1, 2, 3, 4];
// number.forEach(arrayFunction);

// function arrayFunction(element,index,array) {
//   console.log("arr["+index"]="+element);
// }

//utility Types

// partial
// interface mark {
//   x: number;
//   y: number;
// }

// let mytotal: Partial<mark> = {
//   x: 33,
// };
// console.log(mytotal);

//Required

// interface mark {
//   x: number;
//   y: number;
// }
// let total: Required<mark> = {
//   x: 10,
//   y: 20,
// };

// console.log(total);

//Record

// let person: Record<number, string> = {
//   1: "sakkthi",
//   2: "muthu",
//   3: "thiru",
// };
// console.log(person);

//omit
interface person {
  name: string;
  age: number;
  location?: string;
}
const people: Omit<person, "age" | "location"> = {
  name: "sakthi",
};
console.log(people);
