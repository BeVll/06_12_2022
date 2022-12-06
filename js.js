function arrayToString(array){
    let str = "";

    for(let i = 0;i<array.length;i++){
        if(i != array.length - 1){
            str += array[i] + ", ";
        }
        else{
            str += array[i];
        }
    }
    return str;
}

function Task1(){
    console.log("============Task1============");
    // Спосіб 1
    let digits = [5, 2, 4, 9, 6];
    document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);
    console.log(Math.min.apply(null, digits));
    // Спосіб 2
    let min = digits[0];
    for(let i=0;i<digits.length;i++){
        if(min > digits[i]){
            min = digits[i];
        }
    }
    console.log(min);
    document.getElementById("result").innerHTML = "Result: " + min;
}
function Task2(){
    console.log("============Task2============");
    let arr = [];
    for(let i = 0;i<7;i++){
        arr[i] = Math.round(Math.random() + 10);
        console.log(arr[i]);
    }
    document.getElementById("array").innerHTML = "Array: " + arrayToString(arr);
    console.log("Збільшені у два раза:");
    for(let i = 0;i<7;i++){
        arr[i] = arr[i]*2;
        console.log(arr[i]);
    }
    document.getElementById("result").innerHTML = "Result: " + arrayToString(arr);
}
function Task3(){
    console.log("============Task3============");
    let arr=[];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random()*20-10));
    }
    document.getElementById("array").innerHTML = "Array: " + arrayToString(arr);
    console.log(arr);
    let count = 0;
    arr.forEach(element => {
        if(element < 0){
            count++;
        }
    });
    console.log("Кількість від'ємних: " + count);
    document.getElementById("result").innerHTML = "Result: " + count;
}
function Task4(){
    console.log("============Task4============");
    // Спосіб 1
    let digits = [9, 6, 4, 2, 1];
    document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);
    console.log(digits);
    let check = true;
    for(let i = 0;i<digits.length;i++){
        if(i > 0){
            if(digits[i] > digits[i-1] && digits[i] != digits[i-1]){
                check = false;
                break;
            }
        }
    }
    console.log("Упорядкований за спаданням: " + check);
    document.getElementById("result").innerHTML = "Result: " + check;
}

function Task6(){
    console.log("============Task6============");
    let digits = [5, 2, 4, 2, 6];
    document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);

    
    function checkMin(i, min){
        if(digits[i] < min){
            min = digits[i];
        }
        i++;
        if(i < digits.length){
            return checkMin(i, min)
        }
        else{
            return min;
        }
    }
    let min = checkMin(0, digits[0]);
    console.log(min);
    document.getElementById("result").innerHTML = "Result: " + min;
}
function Task7(){
    console.log("============Task7============");
    let digits = [5, 2, 4, 9, 6];
    console.log(digits);
    document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);
    
    function setX2(i){
        digits[i] = digits[i] * 2;
        i++;
        if(i < digits.length){
            return setX2(i)
        }
        else{
            return 0;
        }
    }
    setX2(0);
    console.log("Збільшений в 2 раза: " + digits);
    document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);
}
function Task8(){
    console.log("============Task8============");
    let task = () => {
        let arr=[];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random()*20-10));
        }
        document.getElementById("array").innerHTML = "Array: " + arrayToString(arr);
        console.log(arr);
        let count = 0;
        arr.forEach(element => {
            if(element < 0){
                count++;
            }
        });
        console.log("Кількість від'ємних: " + count);
        document.getElementById("result").innerHTML = "Result: " + count;
    }
    task();
}
function Task9(){
    console.log("============Task9============");
    let task9 = () => {
        let digits = [9, 6, 4, 2, 1];
        document.getElementById("array").innerHTML = "Array: " + arrayToString(digits);
        console.log(digits);
        let check = true;
        for(let i = 0;i<digits.length;i++){
            if(i > 0){
                if(digits[i] > digits[i-1] && digits[i] != digits[i-1]){
                    check = false;
                    break;
                }
            }
        }
        console.log("Упорядкований за спаданням: " + check);
        document.getElementById("result").innerHTML = "Result: " + check;
    }
    task9();
}
function Task11_12(){
    console.log("============Task11============");
    const inTer = setInterval(temper, 1000);
    let times = [];
    let temperatures = [];
    let time = 8;
    function temper(){
        if(time < 21){
            let temperatura = Math.round(Math.random()*40-5);
            times.push(time + ":00");
            temperatures.push(temperatura);
            console.log(time + ":00 - " + temperatura);
            if(temperatura < 0){
                setTable();
                clearInterval(inTer);
            }
            time++;
        }
        else{
            setTable();
            clearInterval(inTer);
        }
    }
    function setTable(){
        for(let i = 0;i<times.length;i++){
            let string = "<tr><td>" + times[i] + "</td><td>" + temperatures[i] + "</td></tr>";
            document.getElementById("tb1").innerHTML += string;
        }
    }
}
Task11_12();