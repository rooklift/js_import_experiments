import ninemodule from "./modules/nine.mjs"			// Imports whatever the default export is.
import {nine, add_one} from "./modules/nine.mjs"	// Imports specific named exports.

add_one();
ninemodule.add_one();

console.log(nine);
