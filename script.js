function GetValue(e){
    e.preventDefault()
    let number1 = document.getElementById('n1').value;
    let number2 = document.getElementById('n2').value;
    let operator = document.getElementById('operator').value;

    let  result = evel('${number1}${operato}${number2}')
    document.getElementById("result").innerHTML = result;

}