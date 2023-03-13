function miniMaxSum(arr: number[]): void {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let c = 0;
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
      if (c < 5 && j !== i) {
        sum = sum + arr[j];
      }
      if (c == 5) break;
      c++;
    }
    if (sum > max) max = sum;
    if (min > sum) min = sum;
  }
  console.log(min, max);
}
