function find(str){
    var aRegex=/^[A-Za-z0-9]+$/;
    if(aRegex.test(str)){
        return true;
    }
    else{
        return false;
    }
}
console.log(find("12345qwer"));
console.log(find("3782@put"));