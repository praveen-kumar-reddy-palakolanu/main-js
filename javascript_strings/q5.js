function find(str){
    var name=str.trim().split(' ');
    if(name.length>1){
        return (name[0]+' '+ name[1].charAt(0)+'.');
    }
    return name[0];
}
console.log(find('Robin Singh'));
console.log(find('Praveen Reddy'));