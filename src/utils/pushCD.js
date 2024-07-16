const pushCD = (randInt1, randInt2) => {
  const nums = [];
  if (randInt1 > randInt2) {
    for (let i = 1; i <= randInt2; i += 1) {
      if (randInt2 % i === 0 && randInt1 % i === 0) {
        nums.push(i);
      }
    }
  } else if (randInt2 > randInt1) {
    for (let i = 1; i <= randInt1; i += 1) {
      if (randInt2 % i === 0 && randInt1 % i === 0) {
        nums.push(i);
      }
    }
  } else {
    nums.push(randInt1);
  }
  return nums;
};

export default pushCD;
