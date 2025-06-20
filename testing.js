// let equation = '';
// const resultDisplay = document.getElementById('result');

// // Get all buttons
// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.textContent;

//     if (value === '=') {
//       try {
//         resultDisplay.textContent = eval(equation);
//         equation = ''; // Reset
//       } catch {
//         resultDisplay.textContent = 'Error';
//         equation = '';
//       }
//     } else if (value === 'C') {
//       equation = '';
//       resultDisplay.textContent = '0';
//     } else {
//       equation += value;
//       resultDisplay.textContent = equation;
//     }
//   });
// });


const h1El = document.querySelector('h1');
const chngColorButton = document.querySelector('button');
const bodyElement = document.querySelector("body");

function change_color() {
  let l1 = Math.floor(Math.random() * 256);
  let l2 = Math.floor(Math.random() * 256);
  let l3 = Math.floor(Math.random() * 256);
  bodyElement.style.backgroundColor = `rgb(${l1}, ${l2}, ${l3})`;
  h1El.textContent = `rgb(${l1}, ${l2}, ${l3})`;
  alert("changed");
}

chngColorButton.addEventListener('click', change_color);