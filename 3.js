// 37  36  35  34  33  32  31
// 38  17  16  15  14  13  30
// 39  18   5   4   3  12  29
// 40  19   6   1   2  11  28
// 41  20   7   8   9  10  27
// 42  21  22  23  24  25  26
// 43  44  45  46  47  48  49

const input = 277678;

const lastSpiralLength = Math.ceil(Math.sqrt(input));
const lastSpiralMax = Math.pow(lastSpiralLength, 2);
const lengthMinus1 = lastSpiralLength - 1;
const stepsToLastSpiral = Math.floor(lastSpiralLength / 2);

let middleLastBound;
for (let i = 0; i < 4; i++) {
  const max = lastSpiralMax - (lengthMinus1 * i);
  const min = lastSpiralMax - (lengthMinus1 * (i + 1));
  if (max >= input && min <= input) {
    middleLastBound = max - (Math.floor(lastSpiralLength / 2));
    break;
  }
}

const stepsNumberToMiddleBound = Math.abs(input - middleLastBound);

console.log(stepsToLastSpiral + stepsNumberToMiddleBound);
