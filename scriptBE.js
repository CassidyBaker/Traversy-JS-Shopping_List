const timerID = setTimeout(changeH1, 4000);

function changeH1() {
  document.querySelector('h1').textContent = 'Changed it';
}

document.querySelector('#btn').addEventListener('click', () => {
  clearTimeout(timerID);
  console.log(`Cleared timeout ${timerID}`);
});

// Interval
//  Start interval off in click event listener. This fn calls the color changing function.

let intervalID;
let bd = document.body;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  if (bd.style.backgroundColor === 'red') {
    bd.style.backgroundColor = 'blue';
    bd.style.color = 'white';
  } else {
    bd.style.backgroundColor = 'red';
    bd.style.color = 'black';
  }
}

function stopColor() {
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopColor);
