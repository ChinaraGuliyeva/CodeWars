/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway*/

function noBoringZeros(n) {
    if(n==0){
      return n
    }
    else {
      let arr=n.toString().split('');
      arr.reverse();
      let amount=0;
      for (let i=0; i<arr.length; i++){
          if (arr[i]==0){
            amount+=1;
          }
          else {
            break
          }
        }
        arr.reverse();
        let num=arr.length-amount;
        console.log(num);
        return +(arr.slice(0, num).join(''));
  }
  }