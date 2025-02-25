function pattern(num) {
  for (let i = 0; i < 2 * num - 1; i++) {
    let row = "";
    for (let j = 0; j < 2 * num - 1; j++) {
      let top = i;
      let left = j;
      let bottom = 2 * num - 2 - j;
      let right = 2 * num - 2 - i;
      row += num - Math.min(top, left, bottom, right);
    }
    console.log(row);
  }
}

pattern(4);
