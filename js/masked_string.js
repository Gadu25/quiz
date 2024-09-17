function masked(string){
    let result = ""
    if(string.length > 4){
        for(let i = 0; i < string.length; i++){
            if(i>1 && i<(string.length-2)){
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

let inputs = ["U229", "dc3", "ii", "i", "something"]

for(let input of inputs){
    console.log(masked(input))
}
