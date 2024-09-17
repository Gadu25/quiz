let number = "8605139944"

const regxForPhNum = /^9\d{9}$/;

if(regxForPhNum.test(number)){
    console.log("Number is valid")
}else{
    console.log("number is Invalid")
}