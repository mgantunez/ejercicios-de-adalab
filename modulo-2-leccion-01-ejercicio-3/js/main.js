'use strict';

const h1 = '<h1>Lorem ipsum</h1>';

const image = '<img src="http://via.placeholder.com/350x150" alt="Imagen de ejemplo con las medidas">';

const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

const div = document.querySelector('.js_div');

div.innerHTML = h1 + paragraph + image;