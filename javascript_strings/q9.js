function find(str){
    var k=str.split(' ');
    for(var i=0;i<k.length;i++){
        var p=k[i];
        k[i]=p.charAt(0).toUpperCase()+p.slice(1);
    }
    var ans=k.join(' ');
    return ans;
}
console.log(find('js string exercises'));
