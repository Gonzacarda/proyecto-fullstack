function multiplicar (num1, num2){
    if (num1 == 0 || num2 == 0){
        return 0
    }else {
    return num1 * num2
    }
}

console.log (multiplicar (18, 749.94))

module.exports = multiplicar;