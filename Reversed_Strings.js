/* 8 kyu

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'*/

function solution(str){
    let array=str.split('');
    let array2= [];
    for (let i=0; i<array.length; i++) {
      array2.unshift(array[i]);
    }
    let result=array2.join('');
    return result;
  }