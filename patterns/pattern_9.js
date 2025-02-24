function patternA(num) {
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num - i - 1; j++) {
      row.push(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row.push("*");
    }
    for (let j = 0; j < num - i - 1; j++) {
      row.push(" ");
    }
    console.log(row.join(" "));
  }
}

function patternB(num) {
  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(" ");
    }
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      row.push("*");
    }
    for (let j = 0; j < i; j++) {
      row.push(" ");
    }
    console.log(row.join(" "));
  }
}

patternA(5);

patternB(5);
