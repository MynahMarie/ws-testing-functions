# An Introduction to Function Design Patterns through Pseudocode

### What is Pseudocode?

Pseudocode is a way of breaking down a programatic problem by reformulating it in human readable
language while still using the structural conventions of a normal programming language.

For example:

Lets say you are working on a problem that is asking you to apply the ROT13 algorithm in order to
decipher a string. The pseudocode you could write for this could look something like this:

```
!!!
function rot13(str) {
    // Create var containing an empty string that will hold the result
    // Loop over each character of the string
    // Check if character is alphabetical, if not append it to the result string unchanged
    // If yes, find its unicode and add 13 (applying % 26)
    // Convert the unicode to the new character
    // Store the newly found character into the result variable
    // Once the loop is done, return the result
}
```

### Exercise 1:

Write pseudocode that will break down each of the presented problems in clear steps:

- Write pseudocode for a `fizzbuzz` function that returns `Fizz` if the given number is a multiple of 3,
`Buzz` if the number is multiple of 5 and `FizzBuzz` if number is multiple of 3 and 5 and returns the
number otherwise.
- Write pseudocode for a `rot13` function. If you don't know what ROT13 is, you can read about it
  [here](https://en.wikipedia.org/wiki/ROT13).

### How can this be helpful for designing effective functions?

Pseudocode can help us structure our thoughts in order to design functions that cover all the
desired cases that we need. Combined with the TDD methodology, it can become a powerful tool to create
scalable and reusable code that is well designed and easy to modify.

Let's consider again the ROT13 example but this time we will write the pseudocode by applying a function
design methodology:

```
!!!

/* Rot13

Signature:  
    String -> String

Definition:
    Consumes a string and produces a new string where each alphabetical character has been
    translated to a character located 13 places later in the alphabet and other characters remain
    unchanged.

Examples:
    rot13("abc") -> "nop"
    rot13("nop") -> "abc"
    rot13("uryyb!") -> "hello!"
    rot13("pbqvat vf sha!") -> "coding is fun!"
    rot13("!@#$") -> "!@#$"
    rot13("NOP") -> "abc"

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
    }
```

The pseudocode above might seem a bit cryptic but if we look carefully we can see that it actually
contains most of the information we need in order to build our function.

* The `Signature` gives us what the function should consume (in this case a string) and what it should
  give us back (in this case, a string in lower case)
* The `Definition` gives us clarity on the exact purpose of the function we are tying to create.
* The `Examples` give us a sense of all the data we should use in order to test all the possible
  execution paths of our function.
* The `Stub` gives us the minimum code that we need in order to write the first tests and have the
  function run.
* The `Template` gives us a squeleton that our function definition should follow.

### Exercise 2:

Convert all the pseudocode written earlier for each problem into pseudocode following the function
design methodology introduced.

### Time to Write Some Tests!

Now that we know:
  * what our function should be doing and
  * the kind of data we are expecting
  * cases we need to test our function with

we are ready to start writing actual code :D

We start by creating 2 files, `rot13.js` and `rot13.test.js`

In `rot13.test.js`, we start by writing 2 simple tests, 1 that checks that `tape` is actually working:

```
var test = require('tape');

test("Check if tape is working", function(t) {
    t.equal(1, 1, "Tape is working");
    t.end()
}
```
Running the test shows that our test engine is working and we can carry on.

In `rot13.js`, we start by copying our Stub that we defined in the pseudocode:

```
function rot13(str) {
    return str;
}
```

Now that our function is defined, we can export it and then import it in our test file. We are now ready to write our first
test that will directly test our new function. To choose which test we will write, we can look back at the example data defined
earlier.

```
test("Non-alphabetical strings should return unchanged", function(t) {
    var actual = rot13("!");
    var expected = "!"

    t.equal(actual, expected, "Should return the string unchanged");
    t.end();
}

test("Alphabetical characters should returned rotated of 13 places in the alphabet", function(t) {
    var actual = rot13("a");
    var expected = "n";
```

Running this code, we can see that 1 out of 2 tests fail but the most important thing to notice is that the tests are running. That means that our function definition as well as our tests are well formed.

### Exercise 3:

Clone this repo and complete the rot13.js and rot13.test.js by adding the appropriate tests and refactoring the code to make all tests pass. The examples you provided in your pseudocode should represent the boundaries your functions will cover and should guide you for writing the appropriate tests.
