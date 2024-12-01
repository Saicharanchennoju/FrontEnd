function fibonacci(n){
       if(n<=0){
         return;
       }
       let a=0,b=1;
       console.log(a);
       if(n==1)
         return;
         console.log(" "+b);
       for(let i=2;i<n;i++){
         const next = a+b;
         console.log(next);
         a=b;
         b=next;
       }
     }
    
     console.fibonacci(10)
    