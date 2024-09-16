function abbreviation(string){
    let tempArr = string.split(" ")
    let result = ""

    for(let word of tempArr){
        result += word[0].toUpperCase()+"."
    }

    return result
}

let inputs = ["christopher robin", "Albus Percival Wulfric Brian Dumbledore", "sybil P trelawney"]

for(let input of inputs){
    console.log(abbreviation(input))
}