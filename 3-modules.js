// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
  
const names = require('./4-name');
const sayHi = require('./5-utils');
const uncleBoby = require("./6-alternative-flavor")

require("./7-mind-grenade")

sayHi ("hamdi")
sayHi(names.john)
sayHi(names.peter) 
