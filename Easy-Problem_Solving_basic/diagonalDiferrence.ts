function diagonalDifference(arr: number[][]): number {
  let ltr = 0;
  let rtl = 0;
  let x = 0;
  let y = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    ltr += -100 <= arr[i][x] && arr[i][x] <= 100 ? arr[i][x] : 0;
    rtl += -100 <= arr[i][y] && arr[i][y] <= 100 ? arr[i][y] : 0;
    x++;
    y--;
  }

  return Math.abs(ltr - rtl);
}
