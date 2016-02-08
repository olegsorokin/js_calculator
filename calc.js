
var box = document.getElementById('display'),
    x,
    number,
    len,
    newnumber,
    z = 0;

function addToScreen(x) {
    box.value += x;
    if (x === 'C') {
      box.value = '';
    }
}

function addToScreenX(x) {
    if ((box.value.charAt(box.value.length - 1)) >= 0) {
      box.value += x;
      z = 0;
    }
}

function answer() {
    x = box.value;
    x = window.eval(x);
    box.value = x;
    z = 0;
}

function backspace() {
    number = box.value;
    len = number.length - 1;
    newnumber = number.substring(0,len);
    box.value = newnumber;
}

function pick(x) {
    if (z === 0) {
      box.value += x;
      z = 1;
    }
}