const factorial = (n) =>{
    let result = 1;

    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}


console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800


const factorial2 =(n) =>{
    if ( n === 1 || n === 0){
        return 1;
    }
    return n * factorial2(n - 1);

}

console.log(factorial2(4)); // 24
console.log(factorial2(5)); // 120
console.log(factorial2(10)); // 3628800
