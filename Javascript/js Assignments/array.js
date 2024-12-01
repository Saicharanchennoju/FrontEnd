function largestnumber(a){
    if(a.length==0){
      return null;
    }
    let largest=a[0];
    for(let i=1;i<a.length;i++){
      if(a[i]>largest){
        largest = a[i];
      }
    }
    return largest;
  }
  
  const array1 = [1,2,3,4,5,6]
  console.log(largestnumber(array1));
  