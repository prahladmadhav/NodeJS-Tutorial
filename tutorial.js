const sum = (num1,num2) => num1 + num2;
const PI = 3.1415;
class SomeClass{
    constructor(){
        console.log("Class Created");
    }
}
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeClass = SomeClass;

// module.exports = {sum:sum, PI:PI, SomeClass:SomeClass}; //Same Result