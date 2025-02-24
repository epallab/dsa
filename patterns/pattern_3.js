function pattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = num; j > i; j--) {
      row += "* ";
    }
    console.log(row);
  }
}

pattern(5);
