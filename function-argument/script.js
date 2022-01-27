//console.log("hello world")

function showeMessage(message, messageTwo, messageThree) {
    console.log(message)
    console.log(messageTwo)
    console.log(messageThree)
    
}
showeMessage("hello there", "hello isac", "hello bruh");

function sum(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log(result)
}
sum(10, 10)

//alert("isac")

function multi(number1, number2) {
    const result = number1 * number2;
    
    return result;

}
multi(5, 4);

const myOutput = multi(5, 4);
console.log('myOutput: ', myOutput)

//lesson task 13:00pm

// Create a function and call it calculateTheCommission
// This function takes an argument called amount
// It takes a percentage of 40
// Return commission
// Use this function to calculate the amount 2000
// Use a variable to assign the function to it and console this result
// Note: commission = amount * (percentage/ 100);

function calculateTheCommission(amount){
    // start from here
    const percentage = 40;
    const commission = percentage * (percentage/ 100);
    return commission + " NOK"
    }
    const myCalculatedcomission = calculateTheCommission(2000);
    console.log('myCalulatedComission: ', myCalculatedcomission);

    //3. fucntion to check the password
    // create a function call it checkPassword 
    //this fucntion takes a string psssword
    //if this string less then 10 return false else return true
    
    function checkPassword(passwordCheck) {
        const numberOfChars = passwordToCheck.length;
        if (numberOfChars >= 10) {
            return true
        } 
            return false;

        }

    

    const isPasswordValid = checkPassword("isac sitt password");

    console.log("isPasswordvalid: ", isPasswordValid);
   