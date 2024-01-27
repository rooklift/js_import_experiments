import ninemodule from "./modules/nine.mjs";		// Imports whatever the default export is.
let {nine, add_one} = ninemodule;					// Wrong! nine will not be a binding of the original.

add_one();
ninemodule.add_one();

console.log(nine);
