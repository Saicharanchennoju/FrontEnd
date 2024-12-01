function Reverse(a){
    let reverse = "";
    for(let i = a.length-1;i>=0;i--){
      reverse = reverse + a[i];
    }
    return reverse;
  }
  
  console.log(Reverse("Hello"));