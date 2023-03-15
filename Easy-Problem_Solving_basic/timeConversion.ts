function timeConversion(s: string): string {
  // Write your code here
  let index = s.split(":")[0];
  let format = s.slice(-2);
  let firstIndex;

  if (format === "AM") {
    if (index == "12") {
      firstIndex = "00";
    } else if (index.length === 1) {
      firstIndex = "0" + index;
    } else {
      firstIndex = index;
    }
  } else {
    if (index === "12") {
      firstIndex = "12";
    } else {
      firstIndex = Number(index) + 12;
    }
  }
  let arr = [...s];
  index.length === 2 ? arr.splice(0, 2) : arr.splice(0, 1);
  arr.splice(-2);
  return firstIndex + arr.join("");
}
