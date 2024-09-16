function masked(string){
    let result = ""
    if(string.length > 4){
        for(let i = 0; i < string.length; i++){
            if(i<2 || i>(string.length-3)){
                result += "*"
            }else{
                result += string[i]
            }
        }
    }else{
        for(let i = 0; i < string.length; i++){
            if(i<1){
                result += "*"
            }else{
                result += string[i]
            }
        }
    }
    return result    
}

let inputs = ["U229", "dc3", "ii", "i"]

for(let input of inputs){
    console.log(masked(input))
}
