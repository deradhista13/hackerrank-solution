function aVeryBigSum(ar: number[]): number {
  let sum = 0;
  let n = 10;

  if (1 <= n && n <= 10) {
    for (let i = 0; i < n; i++) {
      sum += 0 <= ar[i] && ar[i] <= Math.pow(10, 10) ? ar[i] : 0;
    }
  }
  return sum;
}
