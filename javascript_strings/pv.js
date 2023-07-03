function removeDup(arr){
    // arr.sort();
    // var kcount=0;
    // var store=[];
    // for(var i=0;i<arr.length;i++){
    //     if(arr[i]==arr[i+1]){
    //         store.push(arr[i]);
    //         kcount++;
    //     }
    // }
    // return store +" "+kcount;
    var secondArray=[]
    var countValue=[]
    for(var i=0;i<arr.length;i++)
    { 
        var count=0
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                count++
            }

        }
        countValue.push(count+1);
        if(count==0)
        {
            secondArray.push(arr[i])
        }
    }
    for(var i=0;i<countValue.length;i++){
        if(countValue[i]>=2){
            countValue.pop(countValue[i]);
        }
    }
    return secondArray +" "+countValue
}
console.log(removeDup([3,5,7,7,8,2]));