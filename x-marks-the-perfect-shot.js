const finalPosition = function (moves) {
  let xPosn = 0;
  let yPosn = 0;
  for (let moveDirection of moves) {
    switch (moveDirection) {
    case 'north':
      yPosn++;
      break;
    case 'south':
      yPosn--;
      break;
    case 'west':
      xPosn--;
      break;
    case 'east':
      xPosn++;
      break;
    default:
      break;
    }
  }
  return [xPosn, yPosn];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));