class Cookie {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log(`You ate a ${this.color} cookie!`);
  }
  getColor() {
    return this.color;
  }

  setColor(newColor) {
    this.color = newColor;
  }
}

const myCookie = new Cookie('chocolate chip');
myCookie.eat(); // Output: You ate a chocolate chip cookie!
console.log(myCookie.color); // Output: chocolate chip
console.log(myCookie instanceof Cookie); // Output: true
console.log(typeof myCookie); // Output: object
console.log(myCookie.constructor === Cookie); // Output: true
console.log(Cookie.prototype.isPrototypeOf(myCookie)); // Output: true
console.log(Object.getPrototypeOf(myCookie) === Cookie.prototype); // Output: true
console.log(myCookie.hasOwnProperty('color')); // Output: true
console.log(myCookie.hasOwnProperty('eat')); // Output: false
console.log(Object.keys(myCookie)); // Output: ['color']
console.log(Object.getOwnPropertyNames(myCookie)); // Output: ['color']
console.log(Object.getOwnPropertyNames(Cookie.prototype)); // Output: ['constructor', 'eat']
myCookie.setColor('oatmeal raisin');
console.log(myCookie.getColor()); // Output: oatmeal raisin
console.log(myCookie.color); // Output: oatmeal raisin
console.log(myCookie); // Output: Cookie { color: 'oatmeal raisin' }
const anotherCookie = new Cookie('sugar');
console.log(anotherCookie); // Output: Cookie { color: 'sugar' }
anotherCookie.eat(); // Output: You ate a sugar cookie!
console.log(anotherCookie.getColor()); // Output: sugar
console.log(anotherCookie.color); // Output: sugar
anotherCookie.setColor('peanut butter');
console.log(anotherCookie.getColor()); // Output: peanut butter
console.log(anotherCookie.color); // Output: peanut butter
console.log(anotherCookie); // Output: Cookie { color: 'peanut butter' }

let num1 = 5;
let num2 = num1;
