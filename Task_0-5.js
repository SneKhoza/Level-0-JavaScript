function triangle(num1, num2, num3) {
    const semiP = (1 / 2) * (num1 + num2 + num3); // Calculating semiperimeter
    const area = Math.round(
        Math.sqrt(semiP * (semiP - num1) * (semiP - num2) * (semiP - num3))
    ); // Heron's formula
    return area;
}
console.log(triangle(5, 7, 4));