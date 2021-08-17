function celsiusToFahrenheit(numCelsius) {
    const numFahrenheit = numCelsius * (9 / 5) + 32;
    return `${numFahrenheit} \u2109`;
}
console.log(celsiusToFahrenheit(2));

function fahrenheitToCelsius(numFahrenheit) {
    const numCelsius = ((numFahrenheit - 32) * 5) / 9;
    return `${numCelsius} \u2103`;
}
console.log(fahrenheitToCelsius(35));