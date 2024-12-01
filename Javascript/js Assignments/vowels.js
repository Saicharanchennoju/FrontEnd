function vowels(a){
    count = 0;
    const vowel = "aeiouAEIOU";
    for(let i=0;i<a.length;i++){
      if(vowel==a[i]){
        count++;
      }
    }
    return count;
  }
  
  console.log(vowels("Hello"));