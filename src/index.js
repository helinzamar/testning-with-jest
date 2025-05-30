import * as stack from './stack.js';

window.onload = function () {
  var pop = document.getElementById('pop');
  var push = document.getElementById('push');
  var peek = document.getElementById('peek');
  var display = document.getElementById('top_of_stack');

  pop.addEventListener("click", function () {
    alert("Tog bort " + stack.pop());
  });

  push.addEventListener("click", function () {
    let x = prompt("Vad ska vi lägga på stacken?");
    stack.push(x);
    display.innerHTML = x;
  });

  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};
