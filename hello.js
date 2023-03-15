const sayHelloToConsole = function greeting (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log("Greeting: " + greeting);