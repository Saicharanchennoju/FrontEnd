function factorial(n) {
    
    if (n < 0) {
        return "Factorial is not found!"
    }
 
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result = result*i;
    }

    return result;
}

console.log(factorial(5));