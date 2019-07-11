// 


function drawPyramid(num) {
    let res;
    for(let j = 0; j < num; j++){
        res = '*';
        //Add the spaces
        for(let k = num - j; k > 0; k--){
            res = ' ' + res;
        }
        //Add the stars
        for(let i=0; i<j; i++){
            res+='**';
        }
        console.log(res)        
    }
}


drawPyramid(5);