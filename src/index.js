const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '':' '
};

function decode(expr) {
  let arr = [];
  let arr1 = [];
  let obj = { '11' : '-', '10':'.', '**':''}
  let b = '';
  let n = '';

  for(i=0; i<expr.length; i = i+10){
    arr.push(expr.slice(i, i+10 ));}
  for (let a of arr){
      b = a;
    for(i = 0; i < a.length; i++){
if (b[0] === '0'){ b = b.substring(1)}; };
for (u=0; u< b.length; u = u+2){
  n = n + obj[b[u]+b[u+1]]}
arr1.push(MORSE_TABLE[n]);
    n = ''; }
    let res = ''
   for(let el of arr1){res = res + el }
  return res;
  }
module.exports = {
    decode,
}
