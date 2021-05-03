let num1 = prompt("Введите число", "");
if (!parseInt(num1)){
    console.log("Некорректный ввод!")
}
else{
    let num2 = prompt("Введите число", "");
    if (!parseInt(num2)){
        console.log("Некорректный ввод!")
    }
    else{
        let sum = Number(num1) + Number(num2)
        let division =  Number(num1)/Number(num2)
        console.log("Ответ:" + sum +", " + division)
    }
}



