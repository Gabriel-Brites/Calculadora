function somar() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) + parseInt(num2);
    document.querySelector(".resSoma").innerHTML = resultado;
}
function subtrair() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) - parseInt(num2);
    document.querySelector(".resSubtracao").innerHTML = resultado;
}
function multiplicar() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) * parseInt(num2);
    document.querySelector(".resMultiplicacao").innerHTML = resultado;
}
function dividir() {
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;

    var resultado = parseInt(num1) / parseInt(num2);
    document.querySelector(".resDivisao").innerHTML = resultado;
}