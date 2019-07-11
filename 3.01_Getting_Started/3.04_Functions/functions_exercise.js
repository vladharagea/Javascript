//Let do exercise 
//Exercise 1:  Pyramid Star
//Define function with parameter and it will draw the following pyramid.
//      *
//     ***
//    *****
//   *******
//  ********* 
//if you will pass 5 number in the function then above output will print. if you will pass other number then it will different output but it always pyramid as shown above.
//e.g drawPyramid(5);

// let string = '';
// for (let i=0; i<5; i++){
//     string = string + '*';
//     console.log(string)
// };

// let resultStar = '';
// for(let i=0; i<=5; i++) 
// {
//     for(let j=5-i; j>0; j--)
//     {
//         resultStar=resultStar + ' ';
//     }
//     console.log(resultStar);
//     resultStar = '';
// }



// function xMasTree() {
//     let resultStar = '';
//     for(let i=0; i<=5; i++) {
//     for(let j=5-i; j>0; j--)
//     {
//         resultStar=resultStar + '*';
//     }
//     console.log(resultStar);
//     resultStar = '';
// }   let 
// //     let string = '';
// //     for (let i=0; i<5; i++){
// //     string = string +'*';
// //     console.log(string)
// // };
// }

// xMasTree();

function drawTree(h) {
    for(var i=0; i<=h; i++){
      var star = '';
      for(var k = 1; k <= h - i; k++){
        star += " ";
      };
      for(var j=0; j<=i; j++) {
          star += " *";
      };
      console.log(star);
    };
  };
  
  drawTree(8);