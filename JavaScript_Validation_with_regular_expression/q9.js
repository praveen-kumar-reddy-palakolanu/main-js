function find(str){
    var kurl= /^(https:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&/ /=]*)$/;
    if(kurl.test(str)){
        return true;
    }
    else return false;
}
console.log(find("www.google.com"));
console.log(find("https://www.example.com"));