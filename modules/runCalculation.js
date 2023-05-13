
// WORK ON SWITCH 
function mathOperator( data ) {



switch (data.operator) {
    
    case "+": return Number(data.Num1) + Number(data.Num2) 
        break;

    case "-": return data.Num1 - data.Num2
        break;

    case "*": return data.Num1 * data.Num2
        break;

    case "/": return data.Num1 / data.Num2
        break;

}
}

module.exports = mathOperator