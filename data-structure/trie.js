class TrieNode {
    children;
    end;
    constructor(){
        this.children=new Array(26);
        this.end=false;
    }
}

class Trie {
    root;
    constructor() {
        this.root=new TrieNode();
    }
    insert(str){
        let cur=this.root;
        for(let i=0;i<str.length;++i){
            const idx=str[i].charCodeAt(0)-'a'.charCodeAt(0);
            if(!cur.children[idx]){
                cur.children[idx]=new TrieNode();
            }
            cur=cur.children[idx];
        }
        cur.end=true;
    }

    build(dictionary) {
        dictionary.forEach((word)=>this.insert(word));
    }

    search(str,node) {
        for(let i=0;i<str.length;++i){
            const idx=str[i].charCodeAt(0)-'a'.charCodeAt(0);
            if(node[idx]===null){
                return false;
            }
            node=node[idx];
        }
        return true;
    }
}
