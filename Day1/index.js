
//  const addf =require('./add.js')
// console.log("Hello from index.js");
// const text=addf(5,6);
// const text2=addf(5,16);
// console.log(text);
// console.log(text2);

// require("./Batman.js");
// require("./Superman.js");


const superHero = require("./super-hero");
console.log(superHero.getName());
superHero.setName("Superman");
console.log(superHero.getName());

const NewSuperHero = require("./super-hero");
console.log(NewSuperHero.getName());


