//Dynamic typing
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean

/*
1. String
2. Number *
3. BigInt *
4. Boolean -
5. Symbol *
6. null // obj  
7. undefined // create a variable but assign it no value (let x) 
8. array // obj  
9. objects 
*/

/* Number from −2^53 to 2^53 (−9,007,199,254,740,992 to 9,007,199,254,740,992) 
> 42 / +0 
Infinity
> 42 / -0
-Infinity

NaN // Not-A-Number 
* Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
* Math operation where the result is not a real number (e.g. Math.sqrt(-1))
* Operand of an argument is NaN (e.g. 7 ** NaN)
* Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
* Any operation that involves a string and is not an addition operation (e.g. "foo"/3)
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true
Number.isNaN(NaN);  // true
*/

/*   BigInt
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
*/

// Symbol value represents a unique identifier. For example:
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")
console.log(Sym1 === Sym2) // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.
let Sym = Symbol("Sym");
console.log((Sym.description)) // Sym
console.log((Sym.toString())) // Symbol(Sym)

// Difference between null and undefined
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true


// object get set...
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type


//Keyed collections: Maps, Sets, WeakMaps, WeakSets
// Set 
// Map

// Structured data: JSON
// JSON.parse JSON.stringify


