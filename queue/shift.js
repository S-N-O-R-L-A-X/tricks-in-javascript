/**
 * unshift在javascript中是O(n)的，这给队列的使用带来了麻烦。在不需要写一个队列的时候，可以用下标进行操作。
 */

let q = [], pointer = 0;
q.push(root);
while (pointer < q.length) {
    const len=q.length;
    while(pointer < len) {
        /* do sth ...*/
    }
}