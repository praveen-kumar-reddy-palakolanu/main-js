function find(n){
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var isValid=false;
    if(mastercardRegEx.test(n)){
        isValid= true;
    }
    if(isValid){
       return "Thank You";
    }
    else{
        return "Enter Correct Number";
    }
}
console.log(find("5100251576741100"));
console.log(find("5200600030000000"));
console.log(find("3782822463000699"));
