let _menuToggle = document.querySelector('.toggle');
let _navigation = document.querySelector('.navigation');
let _main = document.querySelector('.main');


_menuToggle.onclick = () => {
    _menuToggle.classList.toggle('active');
    _navigation.classList.toggle('active');
    _main.classList.toggle('active')
}

Hire_meFun = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}