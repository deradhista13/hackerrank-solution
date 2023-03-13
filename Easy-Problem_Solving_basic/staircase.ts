function staircase(n: number): void {
  let i, j;
  let line;

  for (i = 0; i < n; i++) {
    line = "";
    for (j = 0; j < n - i - 1; j++) {
      line += " ";
    }
    for (; j < n; j++) {
      line += "#";
    }
    console.log(line);
  }
}
