const obj ={
    x:2,
    outputX:function(){
        console.log(this.x);
    },
}

obj.outputX(); // 2

const outerOutputX=obj.outputX;
outerOutputX(); //undefined

const bindedOuterOutputX=outerOutputX.bind(obj);
outerOutputX(); //undefined
bindedOuterOutputX(); //2