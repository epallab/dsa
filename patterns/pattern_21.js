function pattern(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num; j++) {
      if (i === 0 || j === 0 || i === num - 1 || j === num - 1) row += "*";
      else row += " ";
    }
    console.log(row);
  }
}

pattern(5);
