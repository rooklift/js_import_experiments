import ninemodule from "./modules/nine.mjs"				// Imports whatever the default export is.
import {nine, add_one} from "./modules/nine.mjs"		// Imports specific named exports.
import * as ninemodule_alt from "./modules/nine.mjs"	// Imports the named exports in an object.

add_one();
ninemodule.add_one();
ninemodule_alt.add_one();

console.log(nine);
