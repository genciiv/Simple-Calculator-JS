function equal() {
    var number_one = parseFloat(document.getElementById('number_one').value);
    var number_two = parseFloat(document.getElementById('number_two').value);
    var operator = document.getElementById('operators').value;

    if(operator === '+')
    {
        document.getElementById('result').value = number_one+number_two;
    }

    if(operator === '-')
    {
        document.getElementById('result').value = number_one-number_two;
    }

    if(operator === '/')
    {
        document.getElementById('result').value = number_one/number_two;
    }

    if(operator === '*')
    {
        document.getElementById('result').value = number_one*number_two;
    }

}