




// window.onload = function() {
//   console.log("welcome");

//   eventHandler();
// }

//----------------------------------
// function eventHandler() {
//   console.log("welcome eventhandler"); 
//   let form = document.querySelector("form");
//   form.onSubmit = function(event) {
//     console.log("welcome onsubmit"); 
//     event.preventDefault();
//     finalResult();
//   }
// }

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", finalResult);
  console.log("submit");
  
});

function finalResult(event) {
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);
  const calc = document.querySelector("input[name ='calc']:checked").value;
    
  let result;
    if (calc === "add") {
      result = add(num1,num2);
    }
    else if (calc === "subtract") {
      result = subtract(num1, num2);
    }
    else if (calc === "multiply") {
      result = multiply(num1, num2);
    }
    else if (calc === "divide") {
    result = divide(num1, num2);
    }
    document.getElementById("output").innerText = result;
    console.log(result);
  }


function add(num1,num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

