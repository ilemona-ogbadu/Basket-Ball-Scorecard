let board = 0;


// let btn1 = 0;
// let btn2 = 0;
// let btn3 = 0;
let homeboard = document.querySelector(".board");
let homeboard1 = document.querySelector(".board1");
// let Btn1 = document.querySelector('.btn1');
// let Btn2 = document.querySelector('.btn2');
// let Btn3 = document.querySelector('.btn3');


// function increment() {
// 	count += 1;
// 	countEl.textContent = count;
// }
   // HOME
function btn1() {
 console.log(board)
 board+=1
 homeboard.textContent = board


}
function btn2() {
 console.log(board)
 board+=2
 homeboard.textContent = board


}
function btn3() {
 console.log(board)
 board+=3
 homeboard.textContent = board

}

function reset() {
 board = 0
 homeboard.textContent = board
 
}
// HOME

// -----------------------------------------------------
// GUEST
function btn4() {
 console.log(board)
 board+=1
 homeboard1.textContent = board
 
 
}
function btn5() {
 console.log(board)
 board+=2
 homeboard1.textContent = board
 
 
}
function btn6() {
 console.log(board)
 board+=3
 homeboard1.textContent = board
 
}

function reset1() {
 board = 0
 homeboard1.textContent = board
}
// GUEST