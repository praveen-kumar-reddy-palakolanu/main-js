function find(input){
    var ssRegex=/^\d{3}-\d{2}-\d{4}$/;
    if(ssRegex.test(input))return true;
    else return false;
}
console.log(find("019-70-6981"));
console.log(find("pr-av-een"));