const num1 = parseInt(document.querySelector("input#input1"));
const num2 = parseInt(document.querySelector("input#input2"));

const calcadd = document.querySelector("input#add").checked;
const calcsub = document.querySelector("input#subtract").checked;
const calcmult = document.querySelector("input#multiply").checked;
const calcdiv = document.querySelector("input#divide").checked;

window.onload = function() {
  eventHandler();
}

//----------------------------------
function eventHandler(event) {
  event.preventDefault();
  const checked = document.querySelector("input[name='calc']:checked").value;
}

window.addEventListener("load", eventHandler()) {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", finalResult())
}

function finalResult() {
  if (calcadd === true) {
    document.querySelector("output").innerText = addsum;
  }
  else if (calcsub === true) {
    document.querySelector("output").innerText = subsum;
  }
  else if (calcmult === true) {
    document.querySelector("output").innerText = multsum;
  }
  else if (calcdiv === true) {
    document.querySelector("output").innerText = divsum;
  }
}

function add(num1,num2) {
  return addsum = (num1 + num2);
}

function subtract(num1, num2) {
  return subsum = (num1 - num2);
}

function multiply(num1, num2) {
  return multsum = (num1 * num2);
}

function divide(num1, num2) {
  return divsum = (num1 / num2);
}