let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function solveMeFirst(a: number, b: number) {
  return a + b;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = solveMeFirst(a, b);
  console.log(res);
}
