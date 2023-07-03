var arr=[];
function find(a,b){
    
    if(a==b){
        return arr;
    }
    arr.push(a)
    return find(a+1,b);
}
console.log(find(2,9));
console.log(find(1,5));
console.log(find(5,15));
// var arr=[]
// function arrayFinder(a,b)
// {
// if(a==b-1)
// {
//     return arr
// }
// else
// {
//     arr.push(a+1)
//     return arrayFinder(a+1,b)
// }
// }
// console.log(arrayFinder(2,6))