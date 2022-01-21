// //concat method
    function func() 
    { 
        var arr = ['GFG', 'gfg', 'g4g'];  
        arr.push('GeeksforGeeks'); 
                console.log(arr);
    } 
//     func(); 


//remove method

var num=[1,2,3,4,5];
num.length=4;
console.log(num);
num.pop();
console.log(num);

// //max method
function getMax(a,b) {
    var max = arguments[0];
     for (var i = 0, j = arguments.length; i < j; i++){
          if (arguments[i] > max) {
               max = arguments[i];
           }
      }
    return max;
  }
  console.log(getMax(-6.5,4));


//min method
function getMin(a,b) {
  var min = arguments[0];
   for (var i = 0, j = arguments.length; i < j; i++){
        if (arguments[i] < min) {
             min = arguments[i];
         }
    }
  return min;
}
console.log(getMin(-6.5,4));


//sum of numbers
var nums = ['100','300','400','60','40'];
var num = 0; 

for(var i=0; i < nums.length; i++){
    num = parseInt(num) + parseInt(nums[i]);
}
console.log(num);