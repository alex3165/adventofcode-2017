const input = `10 3 15 10 5 15 5 15 9 2 5 8 5 2 3 6`;
const formattedInput = input.split(' ').map(Number);

let next = formattedInput;
const combination = [];

while(!combination.includes(next.join(','))) {
  combination.push(next.join(','))
  
  let max = 0;
  let index = 0;
  next.forEach((el, id) => {
    if (el > max) {
      max = el;
      index = id;
    }
  });

  const nextCombination = [].concat(next);
  nextCombination[index] = 0;

  while(max) {
    if (index >= nextCombination.length - 1) {
      index = 0;
    } else {
      index++;
    }

    nextCombination[index] = nextCombination[index] + 1;
    max--;
  }

  next = nextCombination;
}

console.log(combination.length);
