function isPrime(n){
    if (n<=1){
      return "not a prime number..!"
    }
    for(let i=2;i<=Math.sqrt(n);i++){
      if(n%i==0){
        return "not a prime"
      }
    }
    return "prime"
  }
  console.log(isPrime(5));
  