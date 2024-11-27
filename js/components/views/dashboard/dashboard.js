
const name_user = document.getElementById('saludo');

function salutePerson() {
  let userName = '';
  let userLastname = '';

  if (localStorage.getItem('navigation')) {
    let user = JSON.parse(localStorage.getItem('navigation'))
    userName = user.navigation.name;
    userLastname = user.navigation.lastname;
  }
console.log('iser', userName);

  return `Hola ${userName} ${userLastname},`
}

name_user.innerHTML = salutePerson();
