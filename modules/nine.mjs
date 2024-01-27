let nine = 9;

function add_one() {
	nine += 1;
}

// These exports create bindings you can import like:
//		import { nine, add_one } from "nine.mjs"

export { nine, add_one };

// The default export creates something you can import like:
//		import foo from "nine.mjs"

export default { nine, add_one };

// The two ways of exporting have basically nothing to do with each other?