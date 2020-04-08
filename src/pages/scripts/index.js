import '../index.css'

import '../../block/body/body.css'
import '../../block/main/main.css'
import '../../block/header/header.css'
import '../../block/content/content.css'
import '../../block/button/button.css'

const button = document.querySelector('.button');
button.onclick = function () {
    window.location = "https://ecomarket.ru/"
}

const logo = document.querySelector('.header__logo');
logo.onclick = function() {
    window.location = "https://ecomarket.ru/"
}