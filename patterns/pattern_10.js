function pattern(num) {
  for (let i = 0; i <= 2 * num - 1; i++) {
    let row = "";
    let stars = i;
    if (i > num) {
      stars = 2 * num - i;
    }
    for (let j = 0; j < stars; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

pattern(5);
