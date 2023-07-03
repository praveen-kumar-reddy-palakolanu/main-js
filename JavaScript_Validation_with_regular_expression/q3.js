// function find(str){
//     var emailRegExp='[a-z0-9$^&*_-+]+@[a-z]+\.[a-z]{2,3}';
//     if(emailRegExp.text(str)){
//         console.log('vail Email Address');
//     }
//     else{
//         console.log("Invalid!!");
//     }
// }
// find('praveen123@gmail.com');

function find(str) {
    var emailRegExp = /[a-z0-9!#$^&*_-]+@[a-z]+\.[a-z]{2,3}/;
  
    if (emailRegExp.test(str)) {
      console.log('Valid Email Address');
    } else {
      console.log('Invalid! Email address');
    }
  }
  
find('praveen123@gmail.com');
find('z1234567@gmail.com');
find("qwert");
  