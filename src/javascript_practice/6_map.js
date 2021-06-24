const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];

// //One way - using .forEach()
// let instructor_names = [];

// instructors.forEach(instructor => {
//     instructor_names.push(instructor.name);
// });

// console.log(instructor_names);

// //Better way using .map()
// const instructorNames = instructors.map(instructor => instructor.name);
// console.log(instructorNames);

// //different but same result as above(proving naming convention in .map())
// const instructorNamesTwo = instructors.map(i => i.name);
// console.log(instructorNamesTwo);

const instructorInfo = instructors.map((i) => {
    return [i.name, i.specialty]
});
console.log(instructorInfo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});

console.log(reformattedArray);