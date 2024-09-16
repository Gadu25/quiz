function trim(str) {
    const regex = /^[\s_.,]+|[\s_.,]+$/g;
    return str.replace(regex, '');
}

let inputs = ["__ ,.1231aa,.    _ ,", "_ _abccc__ aaa,,_ .."]

for(let input of inputs){
    console.log(trim(input))
}