function pattern(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += n + " ";
      n++;
    }
    console.log(row);
  }
}

pattern(5);
