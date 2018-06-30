// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function GetSum( a,b ) {
    let total = 0;
    if ( a === b ){
    return a;
    }
    if ( a > b){
    for (let i = b; i <= a; i++){
      total += i;
      }
     return total;
    }
       if (b > a){
    for (let i = a; i <= b; i++){
      total += i;
      }
      return total;
    }
 }