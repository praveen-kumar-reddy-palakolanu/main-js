function find(b,e){
    if(e==0)return 1;
    return b*find(b,e-1);
}
console.log(find(2,3));