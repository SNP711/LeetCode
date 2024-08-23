/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    var str=x.toString()
    splited=str.split("")
    let sum =0
    for(i=0;i<splited.length;i++)
    {
        sum+=Number(splited[i])
    }
    if(x%sum==0){
return sum
    }
    else{
      return -1
    }

    
};