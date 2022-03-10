
function f1(){
    let x = 5;
    if (true) {
        let x = 10;//let create a block field
        console.log(`inner:${x}`);//inner:10
    }
    console.log(`outer:${x}`); // outer:5
}

function f2(){
    let x=2;
    console.log(x);//2
}

f1();
f2();