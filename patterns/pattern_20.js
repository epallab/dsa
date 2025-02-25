function pattern(num) {
  let spaces = 2 * (num - 1);
  for (let i = 1; i <= 2 * num - 1; i++) {
    let row = "";

    let stars = i;
    if (i > num) stars = 2 * num - i;

    // stars
    for (let j = 1; j <= stars; j++) {
      row += "*";
    }
    // spaces
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    // stars
    for (let j = 1; j <= stars; j++) {
      row += "*";
    }
    console.log(row);
    if (i < num) spaces -= 2;
    else spaces += 2;
  }
}

pattern(5);
