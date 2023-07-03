function find(str){
    var k=str.toLowerCase().replace(/\s/g,'-');
    k=k.replace(/[^a-z0-9\-]/g,'');
    return k;
}
console.log(find("Robin Singh from USA."));