(function(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { // regExp for email validation
        return true;
    } else {
        return false;
    }
})('rraajjpoojary@gmail.com')