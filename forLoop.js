// OPTION 1
/* var total = 0;
var summands = [1, 2, 3, 4, 5];
summands.forEach(function(summand) {
  total += summand;
});
alert(total);  // 15
 */

//OPTION 2
// var total = 0;
// var summands = [1,2,3,4,5];
// for(let summand in summands){
// total +=summands[summand];
// }
// console.log(total);

// //OPTION 3
// var total = 0;
// var summands = [1,2,3,4,5];
// for(i=0; i<summands.length;i++){ 
// total +=summands[i];
// }
// console.log(total);

//OPTION 4
var total = 0;
for(var index =1;index<=5;index++){
    total += index;
}
console.log(total)