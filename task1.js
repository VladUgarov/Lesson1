let num = prompt("Введите число", "");
let not = prompt("Введите систему счисления", "");

if ( !parseInt(num) || !parseInt(not)) {
    console.log("Некорректный ввод!")
} else {
    console.log(parseInt(num,10).toString(Number(not)))
}