var formId = document.getElementById('form');
var nameId =document.getElementById('name');
var emailId =document.getElementById('email');
var passwordId =document.getElementById('password');
var passwordConfirmId =document.getElementById('password-confirm');
var passwordVisibility = document.getElementById('password-visibility');

// Submit to valid 

formId.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(nameId.value)
   var validName = checkName(nameId);
   var validEmail = checkEmail(emailId);
   var validPassword = checkPassword(passwordId);
   var validPasswordConfirm = checkPasswordConfirm(passwordConfirmId);
   var c = validName && validEmail && validPassword && validPasswordConfirm;
    if (c) {
        console.log('ok rồi cường ơi')
    }

   // Lang nghe su kien keyup

    formId.addEventListener('input', function (e) {
        var a = e.target.id;
        switch (a) {
            case 'name':
                checkName(nameId);
                break;
            case 'email':
                checkEmail(emailId);
                break;
            case 'password':
                checkPassword(passwordId);
                break;
            case 'password-confirm':
                checkPasswordConfirm(passwordConfirmId);
                break;
            default:
                break;
        }
    })

})

// Hiện mật khẩu
passwordVisibility.addEventListener('click', function () {
    passwordVisibility.classList.toggle('fa-eye-slash');
    if (passwordId.type === "password") {
        passwordId.type = "text";
      } else {
        passwordId.type = "password";
      }
})

// Check name

function checkName(input) {
    valid = false;
    if (!checkBlank(input)) {
        error(input,'Tên người dùng không được bỏ trống')
    }
    else if (!checkBetween(input,3,25)) {
        error(input,'Tên người dùng phải lớn hơn 3 và nhỏ hơn 25 ký tự')
    }
    else {
        success(input);
        valid = true;}
    return valid;
}

// Check Email
function checkEmail(input) {
    valid = false;
    if (!checkBlank(input)) {
        error(input,'Email không được bỏ trống')
    }
    else if (checkRegexEmail(input)) {
        error(input,'Vui lòng nhập vào email')
    }
    else {
        success(input);
        valid = true;}
    return valid;
}
// Check password
function checkPassword (input) {
    valid = false;
    if (!checkBlank(input)) {
        error(input,'Mật khẩu không được bỏ trống')
    }
    else if (checkRegexPassword(input)) {
        error(input,'Mật khẩu phải có ít nhất 8 ký tự, gồm 1 chữ thường, 1 chữ hoa, 1 ký tự đặc biệt (!@#$%^&*)')
    }
    else {
        success(input);
        valid = true;}
    return valid;
}

// Check password confirm
function checkPasswordConfirm(input) {
    valid = false;
    var pw1 = passwordId.value;
    var pw2 = passwordConfirmId.value;
    if (!checkBlank(input)) {
        error(input,'Vui lòng nhập trường này')
    }
    else if(!(pw1 == pw2)){
        error(input,'Mật khẩu không khớp!')
    } 
    else {
        success(input);
        valid = true;}
    return valid;
}

// Them class vao input sai
function error(input,message) {
    a = input.parentElement;
    a.classList.add('error');
    a.classList.remove('success')
    a.querySelector('small').textContent = message;
}

// Them class vao input dung
function success(input) {
    a = input.parentElement;
    a.classList.remove('error');
    a.classList.add('success')
    a.querySelector('small').textContent = "";
}

// Check rong
function checkBlank(input) {
    var a  = input.value.trim();
    if (a=="") {
        return false
    }
    else {return true
    }
}

// Check between min, max
function checkBetween(input,min, max) {
    var a  = input.value.length;
    if (a < min || a > max) {
        return false;
    }
    else return true;
}

// Check email
function checkRegexEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var b = input.value.trim();
    if (re.test(b)) {
        return false
    }
    else return true
}
// Check password Regex
function checkRegexPassword(input) {
    var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var b = input.value.trim();
    if (re.test(b)) {
        return false
    }
    else return true
}
