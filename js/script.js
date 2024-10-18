let numberHolder = []

function calculate(thisid){
    let output = document.getElementById("output");
    let output1 = document.getElementById("output1");
    let newString = output.innerHTML.slice(0, -1)
output1.innerHTML = " ";
   



switch(thisid){
    case "0":
        output.innerHTML += "0";
        break;
    case "1":
        output.innerHTML += "1";
        break;
    case "2":
        output.innerHTML += "2";
        break;
    case "3":
        output.innerHTML += "3";
        break;
    case "4":
        output.innerHTML += "4";
        break;
    case "5":
        output.innerHTML += "5";
        break;
    case "6":
        output.innerHTML += "6";
        break;
    case "7":
        output.innerHTML += "7";
        break;
    case "8":
        output.innerHTML += "8";
        break;
    case "9":
        output.innerHTML += "9";
        break;
    case "DEL":
        output.innerHTML = newString;
        break;
    case ",":
        output.innerHTML += ",";
        break;
    case "+":
        output.innerHTML += "+";
        break;
    case "-":
        output.innerHTML += "-";
        break;
    case "X":
        output.innerHTML += "*";
        break;
    case "/":
        output.innerHTML += "/";
        break;
    case "%":
        output.innerHTML += "%";
        break;
    case "()":
        output.innerHTML += "()";
        break;
    case "AC":
        output.innerHTML = " ";
        break;
    case "=":
        console.log(eval(output.innerHTML)) ;
        output.innerHTML = (eval(output.innerHTML));
        break;
}
}
