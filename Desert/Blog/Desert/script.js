let themeSwitch = document.querySelector('.themeSwitch');
let mobile = document.querySelector('.mobile');
let body = document.querySelector('body');

themeSwitch.onclick = function() {
  body.classList.toggle('dark')
}
mobile.onclick = function() {
  body.classList.toggle('dark')
}
