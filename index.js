// let str ="abcadeecfb"
// const s = new Set();
// for(let i=0;i<str.length;i++){
//     s.add(str[i]);
// }
// console.log(...s)

let word ="abcadeecfb";
let count = new Map();
for(let i=0; i< word.length;i++)
{
    if(count.has(word[i])){
        count.set(word[i],Number(count.get(word[i]))+1);
    }
    else{
        count.set(word[i],1);
    }
}
count.forEach((value,key)=>
{
    console.log(key + " = " + value);
});