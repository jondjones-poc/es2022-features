const houseOfTheDragon = {
  forename: 'Daemon ',
  surname: 'Targaryen',
  title: 'prince',
  allegiance: 'Targaryen'
}

const houseOfTheDragonExtended = {
  __proto__: houseOfTheDragon,
    hasOwnProperty: () => false,  // override hasOwnProperty
    race: 'Valyrian',
};

function hasOwnProperty() {

  console.log(houseOfTheDragon.hasOwnProperty('forename'));   // true
  console.log(houseOfTheDragon.hasOwnProperty('title'));      // true
}

function hasOwn() {

  console.log(Object.hasOwn(houseOfTheDragon,'forename'))         // true
  console.log(Object.hasOwn(houseOfTheDragon,'race'));            // false

  console.log(Object.hasOwn(houseOfTheDragonExtended,'forename')) // true
  console.log(Object.hasOwn(houseOfTheDragonExtended,'race'));    // false


  // hasOwnProperty overridden so always false
  console.log(houseOfTheDragonExtended.hasOwnProperty('race'));   // false
}
