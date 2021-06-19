function triangle(num1, num2, num3) {
    var semiP = (1 / 2) * (num1 + num2 + num3); //Calculating semiperimeter
    var area = Math.round(Math.sqrt(semiP * (semiP - num1) * (semiP - num2) * (semiP - num3))); //Heron's formula
    return console.log(area);
}
triangle(5, 7, 4)