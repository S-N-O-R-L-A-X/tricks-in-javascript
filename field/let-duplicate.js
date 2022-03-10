
function f1(){
    let x=1;
    let x=2;
    console.log(x);
}

function f2(){
    let x=3;
    console.log(x);
}

f1();//syntaxError:Identifier 'x' has already been declared
f2();//will not be executed