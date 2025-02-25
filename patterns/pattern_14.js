function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let ch = 65; ch < 65 + i; ch++) {
      row += String.fromCharCode(ch) + " ";
    }
    console.log(row);
  }
}

pattern(5);
