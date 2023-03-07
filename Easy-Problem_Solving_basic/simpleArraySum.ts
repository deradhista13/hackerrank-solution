function simpleArraySum(ar: number[]): number {
  let sum: number = 0;
  ar.forEach((x: number) => (x <= 1000 ? (sum += x) : (sum += 0)));
  return sum;
}
