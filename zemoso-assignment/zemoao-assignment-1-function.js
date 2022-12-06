//Q1
const sum = function summation(num1,num2){
    return num1+num2;
}

function calculateTotal(num3 , functionvariable){
    const sumValue = functionvariable(4,2);
    return num3*sumValue;
}

const value = calculateTotal(3,sum);
console.log(value);


//Q2

const arrowFunction = (fname,lname) => {
    return fname.charAt(0)+lname.charAt(0);
};

console.log(arrowFunction("Roger","Waters"));