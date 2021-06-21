function CelsiustoFahrenheit(numCelsius) {
    var numFahrenheit = (numCelsius * (9 / 5)) + 32;
    return numFahrenheit;
}
CelsiustoFahrenheit(2);

function FahrenheitToCelsius(numFahrenheit) {
    var numCelsius = ((numFahrenheit - 32) * 5) / 9;
    return numCelsius;
}
FahrenheitToCelsius(35);