function dividir (num1, num2){
    if (num2 != 0 ){
        return num1 / num2
    }else {
        return "No se puede dividir por 0"
    }
}


module.exports = dividir;