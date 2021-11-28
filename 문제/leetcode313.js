var nthSuperUglyNumber = function(n, primes) {
  const dy = Array(n + 1).fill(1);
  const coef = Array(primes.length).fill(1);
  for (let i = 2; i <= n; i++) {
    let minValue = Infinity;

    for (let j = 0; j < primes.length; j++) {
      minValue = Math.min(minValue, dy[coef[j]] * primes[j]);
    }

    for (let j = 0; j < primes.length; j++) {
      coef[j] += dy[coef[j]] * primes[j] === minValue ? 1 : 0;
    }
    dy[i] = minValue;
  }
  return dy[n];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
