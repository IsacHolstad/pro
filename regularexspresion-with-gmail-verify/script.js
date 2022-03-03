
//A regular expression is a way of
//describing something you're searching for
//in an abstract way. */
//


//
// In JavaScript, a regular expression is another data
// type just like
// numbers or strings and it looks like this.





const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');

    if (validateEmail(email)) {
        $result.text(email + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(email + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

$('#email').on('input', validate);