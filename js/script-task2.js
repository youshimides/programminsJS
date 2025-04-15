/* 4.10. Даны радиус круга и сторона квадрата. У какой фигуры площадь больше?*/
{
    let rcircle, rectangle;
    rcircle = parseInt(prompt("Введите  радиус круга"));
    rectangle = parseInt(prompt("Введите сторону квадрата"));
    if (rcircle > rectangle){
        alert("Радиус круга больше = " + rcircle);
    }
    else{
        alert("Сторона квадрата больше = "+ rectangle)
    }
}
/*4.44. Определить, верно ли, что при делении неотрицательного целого числа a на
положительное число b получается остаток, равный одному из двух заданных
чисел c или */
{
    
}
/* 5.32. Вычислить сумму 1 + 1/2 + 1/3 + ... 1/n */
{
let n, sum;
alert("1 + 1/2 + 1/3 + ... 1/n")
n = parseInt(prompt("Введите n"));
sum = 0;
    for (i = 1; i <= n; i++) {
        sum += 1 / i; 
    } 
alert("Сумма от 1 до " + n + " равна: " + sum);
}
/* 5.50. Даны числа a1, a2, ... a10.Определить их среднее арифметическое.*/
{
    sum = 0; 

    for (i = 1; i <= 5; i++) {
        if (i === 1) {
            a1 = parseInt(prompt("Введите a1:"));
            sum += a1;
        } else if (i === 2) {
            a2 = parseInt(prompt("Введите a2:"));
            sum += a2;
        } else if (i === 3) {
            a3 = parseInt(prompt("Введите a3:"));
            sum += a3;
        } else if (i === 4) {
            a4 = parseInt(prompt("Введите a4:"));
            sum += a4;
        } else if (i === 5) {
            a5 = parseInt(prompt("Введите a5:"));
            sum += a5;
        }
    }
    
    average = sum / 5; 
    
    alert("Среднее арифметическое равно: " + average); 

}