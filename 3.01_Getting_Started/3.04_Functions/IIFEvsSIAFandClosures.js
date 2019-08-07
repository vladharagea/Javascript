//IIFE vs SIAF 

//Imediately Invoked Function Expression vs Self Invoked Anonymous Functions

function printSmt(str) {
    console.log(str);
}

printSmt('Ba by lo nia'); // this is a  IIFE;


(function () {
    console.log('Priiiint')
})()    // this is a SIAF;


//====================================================Closures==========================================//
//Vague definition of a closure: a function that contains at least one variable, and one nested scope.


function outer () {
    var b = 10
    function inner (){
        var a = 20
        console.log(a+b)
    }
    return inner;
}

var X = outer() // X equals to whatever outer() returns X = inner()
var Y = outer() // X equals to whatever outer() returns X = inner()
console.log(X)
console.dir(outer)
X(); // inner()
X();
X();

Y();
