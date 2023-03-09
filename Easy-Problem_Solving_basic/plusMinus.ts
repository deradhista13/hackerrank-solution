function plusMinus(arr: number[]): void {
  let posNum = 0;
  let negNum = 0;
  let zeroNum = 0;

  if (0 < arr.length && arr.length <= 100) {
    posNum = arr.filter((e: number) => -100 <= e && e <= 100 && e > 0).length;
    negNum = arr.filter((e: number) => -100 <= e && e <= 100 && e < 0).length;
    zeroNum = arr.filter(
      (e: number) => -100 <= e && e <= 100 && e === 0
    ).length;
  }

  let ratio_posNum = (posNum / arr.length).toFixed(6);
  let ratio_negNum = (negNum / arr.length).toFixed(6);
  let ratio_zeroNum = (zeroNum / arr.length).toFixed(6);

  console.log(ratio_posNum);
  console.log(ratio_negNum);
  console.log(ratio_zeroNum);
}
