//Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const multiply = nums.map((currentElement) => {
    return currentElement * 2
})

//Exercise 2
//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
//const [firstTopping, secondTopping] = pizzaToppings;

//console.log(firstTopping);
//console.log(secondTopping);

//Exercise 3
//const car = {
  //  make: 'Audi',
    //model: 'q5',
  //};

 //const { make, model } = car;
 
 //console.log(make);
 //console.log(model);

 //Exercise 4
 const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
 const duplicateArray = [...pizzaToppings];
 
 console.log(duplicateArray);

//Exercise 5
const car = {
    make: 'Audi',
    model: 'q5',
  };

const clonedCar = {...car};
console.log('Clone: ', clonedCar);

//Exercise 6
 
const propertyName = 'username';

const userProfile = {
    [propertyName]: 'john_doe'
}

console.log(userProfile);

//Exercise 8
function describeAnimal(noun = 'dog', adjective = 'spotted'){
    console.log(`The ${noun} is ${adjective}.`)
}

describeAnimal();

describeAnimal('monkey', 'orange');
describeAnimal('goat', 'horned');

//Exercise 9

let pizza = 'tasty';

pizza === 'tasty'? console.log('yum'): console.log('yuck');


const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

//Exercise 11
const adventurer = {
    name: 'Alice',
  };
  
  let cat; adventurer.cat?.name;
  
  console.log(cat);