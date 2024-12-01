function calculate(n){
    sum = 0;
    for(let i=0;i<n.length;i++){
      sum = sum+n[i];
    }
    return sum;
  }
  const array = [1,2,3,4,5];
  console.log(calculate(array));