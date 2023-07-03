function find(a,b,c){
    if(a>0 && b>0 &&c>0){
        return console.log('The sign is +');
    }
    else if(a<0 && b<0 &&c<0){
        return console.log('The sign is -');
    }
    else if(a>0 && b<0 &&c<0){
        return console.log('The sign is +');
    }
    else if(a<0 && b>0&&c<0){
        return console.log('The sign is +');
    }
    else{
        return console.log('The sign is -');
    }
}
console.log(find(1,2,3));
console.log(find(-1,-2,-3));
console.log(find(10,-20,-30));
