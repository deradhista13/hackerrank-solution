const rangeConstraint = (i: number, j: number): Boolean => {
  if (1 <= i && i <= 100 && 1 <= j && j <= 100) return true;
  else return false;
};

function compareTriplets(a: number[], b: number[]): number[] {
  let point: number[] = [0, 0];

  let maxLenght: number = a.length > b.length ? a.length : b.length;

  for (let i: number = 0; i <= maxLenght; i++) {
    if (a[i] > b[i] && rangeConstraint(a[i], b[i])) point[0] += 1;
    else if (a[i] < b[i] && rangeConstraint(a[i], b[i])) point[1] += 1;
  }
  return point;
}
