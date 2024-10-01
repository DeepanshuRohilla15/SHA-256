// Assignment 1.

/*
    Give me an input string that outputs a SHA-256 hash that starts with 00000 .
    How will you do it?
*/

const crypto = require('crypto');

function Hashing(prefix)
{
    let input= 0;
    while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {hash : hash};
        }
        input++;
    } 
}

const result = Hashing('00000');
console.log(`Hash: ${result.hash}`);