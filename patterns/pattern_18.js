function pattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let ch = 69 - i; ch < 70; ch++) {
      row += String.fromCharCode(ch) + " ";
    }
    console.log(row);
  }
}

pattern(5);
