function find(str,n){
    if(str.length>n){
        return str.substring(0,n);
    }
    return str;
}
console.log(find('Robin Singh',4));