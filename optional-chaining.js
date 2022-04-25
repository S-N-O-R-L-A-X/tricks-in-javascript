function option(thing = undefined) {
    this.content = thing?.id || 'aaaa';
    
    console.log(this.content);
    
}

function question(thing=undefined){
    this.content=thing?.id||'aaaa';
    this.content2=thing?.ct??'bbbb';
    this.print=()=>{
        console.log(this.content);
    }
    this.print2=()=>{
        console.log(this.content2);
    }
}

option(); //aaaa
option({id:3}); //3