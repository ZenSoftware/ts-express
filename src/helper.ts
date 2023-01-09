export function isPrime(num: number) {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return {
    number: num,
    factors,
    isPrime: factors.length === 2,
  };
}
