export const getWinner = (playground) => {
  for (let i = 0; i < playground.length; i++) {
    const isXRowWin = playground[i].every((cell) => cell === "x");
    const isORowWin = playground[i].every((cell) => cell === "0");

    if (isXRowWin) {
      return "X";
    }

    if (isORowWin) {
      return "O";
    }
  }

  for (let col = 0; col < 3; col++) {
    let isXColumnWin = true;
    let isOColumnWin = true;

    for (let row = 0; row < 3; row++) {
      if (playground[row][col] !== "x") {
        isXColumnWin = false;
      }
      if (playground[row][col] !== "0") {
        isOColumnWin = false;
      }
    }

    if (isXColumnWin) {
      return "X";
    }

    if (isOColumnWin) {
      return "O";
    }
  }

  let isOLeftDiagonalWin = true;
  let isXLeftDiagonalWin = true;
  let isORightDiagonalWin = true;
  let isXRightDiagonalWin = true;

  for (let i = 0; i < 3; i++) {
    if (playground[i][i] !== "0") {
      isOLeftDiagonalWin = false;
    }

    if (playground[i][i] !== "x") {
      isXLeftDiagonalWin = false;
    }

    if (playground[i][2 - i] !== "0") {
      isORightDiagonalWin = false;
    }

    if (playground[i][2 - i] !== "x") {
      isXRightDiagonalWin = false;
    }
  }

  if (isOLeftDiagonalWin || isORightDiagonalWin) {
    return "O";
  }

  if (isXLeftDiagonalWin || isXRightDiagonalWin) {
    return "X";
  }
};
