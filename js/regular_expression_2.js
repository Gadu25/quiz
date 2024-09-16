const regex = /(\d{1,2})\/(\d{1,2})/g;

const replacement = '$1m $2d';

let inputs = ["1/1", "11/21"]

const result = text.replace(regex, replacement);

console.log(result);