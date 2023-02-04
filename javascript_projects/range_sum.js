function sumAll(arr) {
   x= arr.sort(function(a,b){return a-b})
   sumer=[]
   let i =x[0];
   while (i <= x[x.length-1]){
    sumer.push(i);       
    i++
   }
   let adder=0
   for(i=0; i<sumer.length; i++){
    adder += sumer[i]
   }
    return(adder)
    }
(sumAll([10,5]))

sumAll([12,4])

