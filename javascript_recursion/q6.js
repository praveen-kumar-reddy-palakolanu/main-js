function find(n){
    if(n==1)return [0,1];
    else{
        var k=find(n-1);
        k.push(k[k.length-1]+k[k.length-2]);
        return k;
    }
}
console.log(find(10));
