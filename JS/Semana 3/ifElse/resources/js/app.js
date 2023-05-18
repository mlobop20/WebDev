window.addEventListener('load', main)
function main() {

    function sumar(num1 = 0, num2 = 0) {
        var total = num1 + num2;
        return total;

    }


    var suma = sumar(2, 4) + sumar(2, 3);
    console.log(suma);



}

