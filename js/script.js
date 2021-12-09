const person = {
    name: "tani",
    year: 15,
};




const defaults = {
    name: "user",
    year:18,
    host: "localhost",
}

const user = {...defaults, ...person}
const us = {}
for(key in defaults){
    us[key] = defaults[key]
}
for(key in person){
    us[key] = person[key]
}
console.log(us);
console.log(user);






function count(...arguments) {
    console.log(arguments);

}

count(12, 4, 5, 10, 20);



const mass = [2,3, "text"];
const mass2 = [22,55, "som"];
const shallowCopy = [...mass, ...mass2];
console.log(shallowCopy);
                                           