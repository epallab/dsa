function pattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

pattern(5);
