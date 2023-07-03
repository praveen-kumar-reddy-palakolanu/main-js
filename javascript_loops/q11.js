function gcd(a,b){
    while(a!=b){
        if(a>b)a=a-b;
        else b=b-a;
    }
    return a;
}
console.log(gcd(24,28));
console.log(gcd(11,23));