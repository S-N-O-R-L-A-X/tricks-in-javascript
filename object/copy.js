function copy() {
    let arr = [];
    let obj = new Object();
    obj.case = "";
    // arr.push(obj);
    // arr.push(obj);
    // let arr=new Array(2).fill(obj);

    // arr[0].case='a';
    // console.log(arr);
    // arr=[];

    arr.push(obj);
    let o = JSON.parse(JSON.stringify(obj));
    arr.push(o);
    arr.push(JSON.parse(JSON.stringify(obj)));
    arr[0].case = 'a';
    console.log(arr);

    // arr=[];
    // let oo=Object.create(obj);
    // arr.push(oo);
    // arr.push(obj);
    // arr[0].case='a';
    // console.log(arr);
}

function test1(){
    let q1=new question();
    q1.print();
    q1.print2();
    let q2=new question("shit");
    q2.print();
    q2.print2();
    let sth={};
    sth.id=2;
    sth.ct="real"
    let q3=new question(sth);
    q3.print();
    q3.print2();
}

function deep() {
    let obj = new Object();
    obj.case = "a";
    let o = JSON.parse(JSON.stringify(obj));
    let arr = [];
    arr.push(obj);
    arr.push(o);
    arr[1].case = "c";
    console.log(o); //{ case: 'c' }
    console.log(obj); //{ case: 'a' }
    console.log(arr); //[ { case: 'a' }, { case: 'c' } ]
}
deep();