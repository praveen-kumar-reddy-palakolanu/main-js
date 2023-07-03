function find(str){
    var dateRegex=/(\d{1,2}\/\d{1,2}\/\d{2,4}|\d{4}-\d{1,2}-\d{1,2})/g;
    if(dateRegex.test(str)){
        return true;
    }
    else return false;
}
console.log(find(5/30/2023));