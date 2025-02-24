function pattern(num) {
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

pattern(5);
