// create random number
const randomnumber = () => {
    const random = Math.round(Math.random()*10000)
    return random 
}
// check random number 4 digit or not
// if random number is not 4 digit then again generat new random number
const checkrandomnumber = () => {
    const random = randomnumber() + ''
    if(random.length == 4){
        return random
    }
    else{
        return checkrandomnumber()
    }
}
// display the random number
const setRandomInputNumber = () => {
    const r_number = checkrandomnumber()
    document.getElementById("random_display").value = r_number
    // console.log(r_number)
}


// Input calculator type and set value in display field
document.getElementById("calculator").addEventListener('click', function(event){
    const buttonNumber = event.target.innerText // get every button number in a calculator
    const input_field = document.getElementById("display_button_number")
    if (isNaN(buttonNumber)) {
        if(buttonNumber === 'C'){
            input_field.value = ''
        }
        else if(buttonNumber === '<'){
            let str = input_field.value
            str = str.substring(0, str.length - 1);
            input_field.value = str
        }
    }
    else{
        input_field.value += buttonNumber
    }

})

// check two pin are match or not
document.getElementById("submit").addEventListener('click', function(){
    const randompin = document.getElementById("random_display").value
    const userpin = document.getElementById("display_button_number").value

    if(randompin === userpin){
        console.log("match")
        document.getElementById("wrong_pin").style.display = 'none'
        document.getElementById("right_pin").style.display = 'Block'
    }
    else{
        console.log("not match")
        document.getElementById("wrong_pin").style.display = 'Block'
        document.getElementById("right_pin").style.display = 'none'
    }
})