$(document).ready(function() {
    GenerateOTP(1, 5);
    $('#login_page').hide();
});


var otp = document.getElementById("otp");
var output = "";
var store = [];
var count = 0;
var finalresult;

var u_name = false;
var u_email = false;
var u_password = false;
var u_phonenumber = false;
var u_otp = false;

function GenerateOTP(numberOfOTP, noOfDigit) {
    var str = "012rstu789z!@#ABCdefgDEFGH3456IJKLMNXYZabcOWhiPQRSTUVjklm^&nopqvwxy$%*";
    for (let i = 0; i < numberOfOTP; i++) {
        for (let j = 0; j < noOfDigit; j++) {
            value = str[Math.floor(Math.random() * str.length)];
            output = output + value;
            count++;
            if (count === noOfDigit) {
                var index = store.indexOf(output);
                if (index > -1) {
                    store.splice(index, 1);
                    i--;

                }
            }

        };
        store.push(output);
        $("#otp").html("Your OTP is:" + " " + output);
        finalresult = output;
        output = "";
        count = 0;
    };

};

var user_name;

function validateName() {
    user_name = document.getElementById("user_name").value;
    var nameRegex = /^[a-zA-Z\-]+$/;
    if (nameRegex.test(user_name)) {
        u_name = true;
    } else {
        alert("Enter Valid Username");
    }
}
var email;

function validateEmail() {
    email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
        u_email = true;
    } else {
        alert("Enter Valid Email");
    }
}
var pwd;

function validatePwd() {
    pwd = document.getElementById("pwd").value;
    var pwdRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pwdRegex.test(pwd)) {
        u_password = true;
    } else {
        alert("password should contain atleast one number and one special character");
    }
}
var mob;

function validatePhno() {
    mob = document.getElementById("mob").value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (phoneRGEX.test(mob)) {
        u_phonenumber = true;
    } else {
        alert("Enter Valid Mobile Number");
    }
}
var captcha;

function validateotp() {
    captcha = document.getElementById("captcha").value;
    if (captcha === finalresult) {
        u_otp = true;
    } else {
        alert("Enter Valid OTP");
    }
}


var information = {};

function validate() {
    validateName();
    validateEmail();
    validatePwd();
    validatePhno();
    validateotp();

    if (u_name && u_email && u_password && u_phonenumber && u_otp) {
        $('#login_page').show();
        $('#reg_page').hide();

        information.username = document.getElementById("user_name").value;
        information.email = document.getElementById("email").value;
        information.pwd = document.getElementById("pwd").value;
        information.mobile = document.getElementById("mob").value;
        information.otp = document.getElementById("captcha").value;

        document.getElementById("forminfo").reset();
        var myJSON = JSON.stringify(information);
        // module.exports.information = information;

    }

}

function Login() {
    for (let i = 0; i < Object.keys(information).length; i++) {
        if (user_name === information.username && pwd === information.pwd) {
            $('#login_page').hide();
            console.log('login sucess');
            return;
        } else {
            console.log('invalid credentials');

        }
    }
}