function randomPointOnCircle(radius){
  let angle = Math.random() * 2 * Math.PI;
  return{
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}

// console.log(randomPointOnCircle(2));

let {name} = {name:"Faraji", age: 23};

// console.log(name);

function city(object){
  return object.address?.city;
}

console.log(city({address:{city:"Agadir"}}));
console.log(city({name:"Vera"}));
