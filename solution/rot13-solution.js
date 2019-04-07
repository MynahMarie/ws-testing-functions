/* global module */
/* ********** Function Rot13 *****************

Signature:
    String -> String (lower case)

Definition:
    Consumes a string and produces a string where each alphabetical
    character has been translated to a character located 13 places later in the alphabet
    and other characters remain unchanged.

Examples:
    // Check the boundaries
    rot13("a") -> "n"
    rot13("A") -> "N"
    rot13("n") -> "a"
    rot13("N") -> "A"
    rot13("abc") -> "nop"
    rot13("NOP") -> "ABC"

    // Special chars and digits should return unchanged
    rot13("!") -> "!"
    rot13("abc123") -> "nop123"

    // Any other type of input should be considered invalid
    rot13(1) -> "Invalid input!"
    rot13(['a', 'b', 'c']) -> 'Invalid input!'

    // Words should be converted to cyphers and back
    rot13("uryyb!") -> "hello!"
    rot13("hello123") -> "uryyb123"
    rot13("Pbqvat Vf Sha!") -> "Coding Is Fun!"
    rot13("xyz") -> "klm";

Stub:
    function rot13(str) {
      return str;
    }

Template:
    function rot13(str) {
      while ...str
        if ...str !alphabetical
            str
        else
            ...str
      return result
    }
*********************************************** */

/* Taken from Stub
function rot13(str) {
  return str;
}
*/

// function rot13(cypher) {
//   var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   var output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
//
//   if (typeof(cypher) != 'string') {
//     return 'Invalid input!';
//   }
//
//   return cypher.split('').map(function(letter) {
//     var idx = input.indexOf(letter);
//     return idx > -1 ? output[idx] : letter;
//   }).join('');
// }

function translate(letter) {
  var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

  var idx = input.indexOf(letter)
  return idx > -1 ? output[idx] : letter;
}

function rot13(cypher) {
  return typeof(cypher) === 'string' ?
    cypher.split('').map(translate).join('') : 'Invalid input!';
}

// Don't change code below this line
if (module !== 'undefined') {
  module.exports = rot13;
}
