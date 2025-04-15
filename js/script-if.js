{
// let x,y,min;
// x = parseInt(prompt("Введите первое число"));
// y = parseInt(prompt("Введите второе число"));
// z = parseInt(prompt("Введите третьe число"));
// min = x;
// if(y < min){
//     min - y;
// }if (z < min){
//     min = z;
// }
// //
// // if (x <= y && x < z);{
// //     min = x;
// // }
// // else if(y <= x && y < z){
// //     min = y;
// // }
// // else {
// //     min = z;
// //  }
// alert("min = " + min)
}

{
    /*Вывести нечетные числа от 0 до 10*/
    for (let i = 1; i < 10; i = i+2){
        console.log(i);
    }
}

{
    /*найти количество нечетных чисел в последовательности. Последовательность
    чисел вводится с клавиатуры и заканчивается вводом 0 */
    let count = 0, x;
    x = parseInt(prompt("Введите число"))
    while(x != 0){
        if(x % 2 != 0){
            count++;
        }
        x = parseInt(prompt("Введите чиcло"))
    }
    alert("кол-во нечетных чисел" + count)
}
{
    /*найти кол-во нечетных цифр в натуральном числе */
    let count = 0, d, x;
    x = parseInt(prompt("Введите натуральное число"))
    while (x != 0){
        d = x % 10;
        if(d % 2 != 0){
            count++;
        }
        x = Math.floor(x/10);
    }
    alert("кол-во нечетных цифр" + count); 
}