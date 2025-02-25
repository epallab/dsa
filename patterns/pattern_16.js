function pattern(num) {
  let ch = 65;
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(ch) + " ";
    }
    ch++;
    console.log(row);
  }
}

pattern(5);
