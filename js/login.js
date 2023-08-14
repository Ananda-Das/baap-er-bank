document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('object');
    const emailField = document.getElementById('email');
    const email = emailField.value;
    // console.log(email);

    const passwordFild = document.getElementById('password');
    const password = passwordFild.value;
    // console.log(password);
    if(email == 'sontan@baap.com' && password == 'admin'){
        console.log('vaild user');
    }else{
        console.log('invalid user');
    }
})