/* 7 kyu
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s){
    let array= [];

    let newString = "";
    let newString2 = "";

    for (let i=0; i<s.length; i++){
      if(i==0 || i%2==0){
        newString+=s.charAt(i).toUpperCase();
        newString2+=s.charAt(i)
      }
      else{
        newString+=s.charAt(i);
        newString2+=s.charAt(i).toUpperCase();
      }
    }

    array.push(newString);
    array.push(newString2);

    return array;
  };