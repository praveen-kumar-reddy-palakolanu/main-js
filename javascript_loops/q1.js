function find(a,b){
    if(a>0 && b>0 && a>b)return a;
    else if(a>0 && b>0 &&a<b)return b;
    else if( a==b && a>0 && b>0)return 'Both are same.';
    else return 'Enter valid input.';
}
console.log(find(20,10));
console.log(find(222,-99));
console.log(find(35,70));
console.log(find(55,55));
