// business logic starts

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}
function remainder(number1, number2) {
  return number1 % number2;
}

// business logic codes end

// user interface logic
$(document).ready(function () {
  let workingNumber = "";
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";

  $("#cmd0").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "0";
    $("#txtScreen").val(workingNumber);
  });

  $("#cmd1").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "1";
    $("#txtScreen").val(workingNumber);
  });

  $("#cmd2").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "2";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd3").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "3";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd4").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "4";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd5").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "5";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd6").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "6";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd7").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "7";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd8").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "8";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmd9").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + "9";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmdDot").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber + ".";
    $("#txtScreen").val(workingNumber);
  });
  $("#cmdDel").click(function (event) {
    event.preventDefault();
    workingNumber = workingNumber.substring(0,workingNumber.length-1);
    $("#txtScreen").val(workingNumber);

  });

  $("#cmdClear").click(function (event) {
    event.preventDefault();
    let clear = "";
    firstNumber = "";
    workingNumber = "";
    operator = clear;
    $("#txtScreen").val(operator);

  });


    
  $("#cmdPlus").click(function (e) {
    operator = "+";
    firstNumber = workingNumber;
    workingNumber = "";
  });

  $("#cmdSubcract").click(function (e) {
    operator = "-";
    firstNumber = workingNumber;
    workingNumber = "";
  });
  $("#cmdMultiply").click(function (e) {
    operator = "*";
    firstNumber = workingNumber;
    workingNumber = "";
  });
  $("#cmdDivide").click(function (e) {
    operator = "/";
    firstNumber = workingNumber;
    workingNumber = "";
  });
  $("#cmdModulo").click(function (e) {
    operator = "%";
    firstNumber = workingNumber;
    workingNumber = "";
  });




  $("#cmdAnser").click(function () {
    secondNumber = workingNumber;
    let result;
    if (operator === "+") {
      result = add(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "*") {
      result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "-") {
      result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "/") {
      result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
    }
    if (operator === "%") {
      result = remainder(parseFloat(firstNumber), parseFloat(secondNumber));
    }
   
   

    $("#txtScreen").val(result);
    firstNumber = "";
    secondNumber = "";
    workingNumber = "";
  });
});
  

//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//alert(add(number1, number2));

//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//alert(subtract(number1, number2));

//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//alert(multiply(number1, number2));

//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//alert(divide(number1, number2));

//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//alert(remainder(number1 % number2));
