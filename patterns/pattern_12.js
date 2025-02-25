function pattern(num) {
  let space = 2 * (num - 1);
  for (let i = 1; i <= num; i++) {
    let row = "";
    // number
    for (let j = 1; j <= i; j++) {
      row += `${j}`;
    }
    // space
    for (let j = 1; j <= space; j++) {
      row += " ";
    }
    // number
    for (let j = i; j >= 1; j--) {
      row += `${j}`;
    }
    console.log(row);
    space -= 2;
  }
}

pattern(5);
