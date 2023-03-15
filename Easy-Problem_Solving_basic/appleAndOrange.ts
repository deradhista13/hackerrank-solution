function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Write your code here

  let appleCount = 0;
  let orangeCount = 0;
  let dist1 = 0;
  let dist2 = 0;
  for (let i = 0; i < apples.length; i++) {
    dist1 = apples[i] + a;
    if (dist1 >= s && dist1 <= t) {
      appleCount++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    dist2 = oranges[j] + b;
    if (dist2 >= s && dist2 <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
