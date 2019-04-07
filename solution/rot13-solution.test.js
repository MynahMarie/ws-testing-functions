/* global require */
var test = require('tape');
var rot13 = require('./rot13-solution');
// var translate = require('./rot13-solution');

test('Tape is working', function(t) {
  t.equal(1, 1, 'Should return 1 when given 1');
  t.end();
});

test('Should return char with applied rot13', function(t) {
  var actual = rot13("a");
  var expected = "n";
  t.equal(actual, expected, 'Should return "n" when given "a"');

  actual = rot13("n");
  expected = "a";
  t.equal(actual, expected, 'Should return "a" when given "n"');
  t.end();
});

test('Should return the same string when given non-alphabetical chars', function(t) {
  var actual = rot13('!');
  var expected = '!';
  t.equal(actual, expected, 'Should return the same character');
  t.end();
});

test('Should return a relevant message when given an invalid input', function(t) {
  var actual = rot13(1);
  var expected = 'Invalid input!';
  t.equal(actual, expected, 'Should return "Invalid input!" when given a number');

  actual = rot13(["h", "e", "l", "l", "o"]);
  t.equal(actual, expected, 'Should return "Invalid input!" when given an array');

  actual = rot13({ word: "hello" });
  t.equal(actual, expected, 'Should return "Invalid input!" when given an object');
  t.end();
})

test('Should return string with applied rot13', function(t) {
  var actual = rot13("abc");
  var expected = "nop";
  t.equal(actual, expected, 'Should return "nop" when given "abc".');

  actual = rot13("nop");
  expected = "abc";
  t.equal(actual, expected, 'Should return "abc" when given "nop".');

  actual = rot13("xyz");
  expected = "klm";
  t.equal(actual, expected, 'Should return "klm" when given "xyz".');

  actual = rot13("uryyb!");
  expected = "hello!";
  t.equal(actual, expected, 'Should return "hello!" when given "uryyb!".');

  actual = rot13("Pbqvat Vf Sha!");
  expected = "Coding Is Fun!";
  t.equal(actual, expected, 'Should return "Coding Is Fun!" when given "Pbqvat Vf Sha!".');
  t.end();

});

// Examples:
//     // Check the boundaries
//     rot13("a") -> "n"
//     rot13("A") -> "N"
//     rot13("n") -> "a"
//     rot13("N") -> "A"
//     rot13("abc") -> "nop"
//     rot13("NOP") -> "ABC"
//
//     // Special chars and digits should return unchanged
//     rot13("!") -> "!"
//     rot13("abc123") -> "nop123"
//
//     // Any other type of input should be considered invalid
//     rot13(1) -> "Invalid input!"
//     rot13(['a', 'b', 'c']) -> 'Invalid input!'
//
//     // Words should be converted to cyphers and back
//     rot13("uryyb!") -> "hello!"
//     rot13("hello123") -> "uryyb123"
//     rot13("Pbqvat Vf Sha!") -> "Coding Is Fun!"
//     rot13("xyz") -> "klm";
