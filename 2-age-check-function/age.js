//1. select the input and the btn

const input = document.querySelector("input");
const button = document.querySelector("button");

//2. track if the button is clicked
button.onclick = function (){ //anonymes function
    console.log("button clicked")
    // get the value of the input(check the age)
    const age = input.value;
    console.log(age, "age")
    const isAgeOk = isOldEnough(age);
    console.log(isAgeOk)
    if (isAgeOk){
        console.log("you are old enough to enter website")
        //redirect the user to accses another site
        document.location.href 
        ="welcomepage.html";
    } else {
        const errorBox = document.querySelector(".error-message");
        errorBox.innerHTML = "you are not old enough for this website"
        console.log("you are not old enough to enter website")

    }
};
function isOldEnough (ageTocheck){
    if(ageTocheck >= 13) {
        return true;
    }
    return false;
}


//this is important!!!!!!!



//THIS IS VERY USEFULL!!
