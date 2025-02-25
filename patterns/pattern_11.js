function pattern(num) {
  let start = 0;
  for (let i = 0; i < num; i++) {
    let row = [];
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      row.push(start);
      start = 1 - start;
    }
    console.log(row.join(" "));
  }
}
function patternB(num) {
  for (let i = 0; i < num; i++) {
    let start = i % 2 === 0 ? 1 : 0;
    let rowStr = "";

    for (let j = 0; j <= i; j++) {
      rowStr += start + " ";
      start = 1 - start; // Toggle between 0 and 1
    }

    console.log(rowStr.trim()); // Trim extra space
  }
}

patternB(5);

pattern(5);
