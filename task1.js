function sumFibonanciPrime(n) {
  var a = 0, b = 1, c = 0;
  var result = 0

  for (let i = 0; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;

    if (isPrime(a))
      result += a

    if (c > n) {
      break
    }
  }

  return result
}

function isPrime(n) {
  for(let i=2;i<n;i++) {
      if(n%i==0)
          return false;
  }
  return true;
}

console.log(sumFibonanciPrime(20));