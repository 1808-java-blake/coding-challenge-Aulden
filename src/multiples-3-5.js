// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
  let set = new Set();
  let sum = 0;
  for(let i=3; i<number; i+=3){
    if(!set.has(i)){
      set.add(i);
    }
  }

  for(let i=5; i<number; i+=5){
    if(!set.has(i)){
      set.add(i);
    }
  }

  set.forEach((val) => {
    sum += val;
  });

  if(number === 0){
    return 0;
  }
  else if(!number || (typeof number) === "string"){
    return -1;
  }
  return sum;
}

module.exports = solution;
