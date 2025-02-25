function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let ch = 65; ch < 65 + (num - i + 1); ch++) {
      console.log(ch);
      console.log(65 + (num - i + 1));
      row += String.fromCharCode(ch) + " ";
    }
    console.log(row.trim());
  }
}

pattern(5);
