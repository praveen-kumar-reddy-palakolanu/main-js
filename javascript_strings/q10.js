function convert(str){
    var word='';
    for(var i=0;i<StereoPannerNode.length;i++){
        var ch=str.charAt(i);
        if(ch== ch.toUppercase()){
            word+=ch.toLowerCase();
        }
        else{
            word+=ch.toUpperCase();
        }
    }
    return word;
}
console.log(convert("PrAvEeN"));