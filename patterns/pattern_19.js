function pattern(num) {
  let iniS = 0;
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += "*";
    }
    for (let j = 0; j < iniS; j++) {
      row += " ";
    }
    for (let j = 1; j <= num - i; j++) {
      row += "*";
    }
    iniS += 2;
    console.log(row);
  }
  iniS = 2 * num - 2;
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    for (let j = 0; j < iniS; j++) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    iniS -= 2;
    console.log(row);
  }
}

pattern(5);
