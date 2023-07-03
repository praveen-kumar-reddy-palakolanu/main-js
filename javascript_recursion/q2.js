function find(a,b){
    while(a!=b){
        if(a>b)a=a-b;
        else b=b-a;
    }
    return a;
}
console.log(find(12,16));
console.log(find(2,3));