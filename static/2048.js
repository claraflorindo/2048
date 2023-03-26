var board; //board will hold the state of the game
var score = 0; //score will keep track of the current score
var rows = 4; //rows and columns specify the size of the game board.
var columns = 4;

//set the function setGame() to be called when the window finishes loading.
window.onload = function () {
  setGame();
};

//setGame() initializes the game board by creating a 4x4 grid of tiles with a value of 0.
//It creates a div element for each tile, assigns an id to it based on its position on the board,
//and adds the tile to the board container element in the HTML.
//It then calls setTwo() function twice to randomly set two tiles with the value of 2.
function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById("board").append(tile);
    }
  }
  setTwo();
  setTwo();
}
// updateTile(tile, num) updates the style and content of a tile based on its value.
//If the value of the tile is greater than 0,
//it sets the inner text to the value and adds a class to the tile based on the value.
function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num > 0) {
    tile.innerText = num.toString();
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
}

//This code adds an event listener to the document for the keyup event.
//It listens for arrow key presses and calls the appropriate slide function
document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
    setTwo();
  } else if (e.code == "ArrowRight") {
    slideRight();
    setTwo();
  } else if (e.code == "ArrowUp") {
    slideUp();
    setTwo();
  } else if (e.code == "ArrowDown") {
    slideDown();
    setTwo();
  }
  document.getElementById("score").innerText = score;
});

function filterZero(row) {
  return row.filter((num) => num != 0);
}

function slide(row) {
  row = filterZero(row);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
      if (score > 2048) {
        alert("You Win!");
      }
    }
  }
  row = filterZero(row);
  while (row.length < columns) {
    row.push(0);
  }
  return row;
}

function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    board[r] = row.reverse();
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function setTwo() {
  if (!hasEmptyTile()) {
    return;
  } // para saber si hay un tile vacio
  let found = false;
  while (!found) {
    // mientras no se haya generado el 2 seguimos buscando un tile vacio
    let r = Math.floor(Math.random() * rows); // genera un random row y un random column
    let c = Math.floor(Math.random() * columns);
    if (board[r][c] == 0) {
      // comprueba q la posicion random este vacia
      board[r][c] = 2; // si esta vacia la ponemos a 2
      let tile = document.getElementById(r.toString() + "-" + c.toString()); // cambiar el estilo del tile al .x2
      tile.innerText = "2";
      tile.classList.add("x2");
      found = true;
    }
  }
}

function hasEmptyTile() {
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
}

function lookupWord() {
  const facts = document.getElementById("fact");
  const url = "https://cat-fact.herokuapp.com/facts";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      facts.value = data[0].text;
    })
    .catch(() => {
      facts.value = "No fun fact found";
    });
}

const textarea = document.getElementById("myTextarea");
textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; /* Reset the height to auto */
  textarea.style.height = `${textarea.scrollHeight}px`; /* Set the new height based on the content */
});

register = document.getElementById("registerbutton");
register.addEventListener("click", function (event) {
  check(event);
});

function check(event) {
  event.preventDefault();

  let password1 = document.getElementById("floatingPassword");
  let password2 = document.getElementById("floatingPassword2");
  if (password1.value != password2.value) {
    let error = document.getElementById("alertParent");
    let alert = document.createElement("div");
    alert.classList.add("alert-danger");
    alert.textContent = "Error, the passwords don't match";
    error.appendChild(alert);
  } else {
    let form = document.getElementById("registerform");
    form.action = "/register";
    form.method = "POST";
    form.submit();
  }
}
