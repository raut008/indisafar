# Basic JSDoc Comments for JavaScript

Here is a list of **basic JSDoc comments** that you can use in your project to document your JavaScript code. These comments will help improve the readability and maintainability of your code and assist in generating documentation.

## Basic JSDoc Comments for Common Use Cases:

### 1. Documenting Functions

```javascript
/**
 * Function description here.
 *
 * @param {type} paramName - Description of the parameter.
 * @param {type} paramName2 - Description of the second parameter.
 * @returns {returnType} Description of what the function returns.
 */
function functionName(paramName, paramName2) {
  // function logic
}
```

- **Example**:

```javascript
/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b
}
```

### 2. Documenting Variables

```javascript
/** @type {type} */
let variableName = value
```

- **Example**:

```javascript
/** @type {string} */
let name = 'John Doe'
```

### 3. Documenting Objects

```javascript
/**
 * @type {Object}
 * @property {string} name - The name property.
 * @property {number} age - The age property.
 */
const person = {
  name: 'Alice',
  age: 30,
}
```

### 4. Documenting Classes

```javascript
/**
 * Class description here.
 *
 * @class
 */
class ClassName {
  /**
   * Constructor description.
   *
   * @param {type} paramName - Description of the parameter.
   */
  constructor(paramName) {
    // constructor logic
  }
}
```

- **Example**:

```javascript
/**
 * Represents a car.
 *
 * @class
 */
class Car {
  /**
   * Creates a new Car instance.
   *
   * @param {string} make - The make of the car.
   * @param {string} model - The model of the car.
   */
  constructor(make, model) {
    this.make = make
    this.model = model
  }
}
```

### 5. Documenting Methods Inside Classes

```javascript
/**
 * Method description here.
 *
 * @param {type} paramName - Description of the parameter.
 * @returns {returnType} Description of the return value.
 */
ClassName.prototype.methodName = function (paramName) {
  // method logic
}
```

- **Example**:

```javascript
/**
 * Starts the car engine.
 *
 * @returns {boolean} True if the engine starts successfully.
 */
Car.prototype.startEngine = function () {
  // Start engine logic
  return true
}
```

### 6. Documenting Async Functions

```javascript
/**
 * Fetches data asynchronously from the given URL.
 *
 * @async
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} The fetched data.
 */
async function fetchData(url) {
  const response = await fetch(url)
  return await response.json()
}
```

### 7. Documenting Deprecated Methods

```javascript
/**
 * @deprecated Use `newFunction()` instead.
 */
function oldFunction() {
  // old function logic
}
```

### 8. Documenting Errors Thrown

```javascript
/**
 * Divides two numbers.
 *
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the denominator is zero.
 */
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by zero')
  }
  return numerator / denominator
}
```

### 9. Providing an Example

```javascript
/**
 * Concatenates two strings.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} The concatenated string.
 * @example
 * concatenate("Hello", " World"); // returns "Hello World"
 */
function concatenate(str1, str2) {
  return str1 + str2
}
```

### 10. Documenting Return Types

```javascript
/**
 * Returns the name of a user.
 *
 * @returns {string} The user's name.
 */
function getUserName() {
  return 'John Doe'
}
```

### 11. Documenting Arrays

```javascript
/**
 * Filters numbers greater than 10 from an array.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} A new array with numbers greater than 10.
 */
function filterNumbers(arr) {
  return arr.filter((num) => num > 10)
}
```

### 12. Documenting Functions with Multiple Return Types

```javascript
/**
 * Gets the status of a task.
 *
 * @returns {boolean|string} The status can either be a boolean indicating success or a string error message.
 */
function getTaskStatus() {
  return 'Error: Task not found'
}
```

## Additional Tags:

- **`@type {type}`**: Specifies the type of a variable, object, or property.
- **`@throws {ErrorType}`**: Describes errors the function might throw.
- **`@param {type} name - description`**: Describes the parameters of a function.
- **`@returns {type}`**: Describes the return value of a function.
- **`@example`**: Provides an example of how to use the function or method.
- **`@deprecated`**: Marks a function or method as deprecated.
- **`@async`**: Marks a function as asynchronous.

## Tips for Writing Good JSDoc:

1. **Be Consistent**: Use consistent descriptions and formatting in your comments.
2. **Be Clear**: Provide concise descriptions that are easy to understand.
3. **Use Examples**: When possible, add example code to demonstrate how to use the function or method.
4. **Document Edge Cases**: If your function handles edge cases, mention them in the documentation.

By using these basic JSDoc comments in your project, you will be able to maintain clear and structured documentation for your functions, variables, classes, and other JavaScript entities.
