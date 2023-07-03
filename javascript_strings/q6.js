function find(input){
    var avg,k,p,q;
    k=input.split("@");
    p=k[0];
    avg=p.length/2;
    p=p.substring(0,(p.length-avg));
    q=k[1];
    return p+'...@'+q;
}
console.log(find("praveen@xiffity.com"));