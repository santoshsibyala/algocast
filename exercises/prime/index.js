function isPrime(n) {
    if(n <= 1) {
        return false;
    }
    for(var i= 2; i< Math.floor(n/2);i++) {
        if(n %i === 0) {
            return false;
        }
    }
    return true;
}

function primeNumbersList(n) {
    
}

console.log(isPrime(10000000000000));