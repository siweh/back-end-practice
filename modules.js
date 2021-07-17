// GLOBALS - NO WINDOW !!

// Modules
const names = require('./names');
const sayHi = require('./utils');
require('./add-nums');

console.log(names);

sayHi('Pearl', 'Ndaba');
sayHi(names.member1, 'Mani');
sayHi(names.member2, 'Kuli');