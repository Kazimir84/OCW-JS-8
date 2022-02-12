// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let h1 = document.body.querySelector('#main_header');
    h1.className = 'header';

// b) робить шириниу елементу ul 400px
let ul = document.body.querySelector('ul');
    ul.style.width = 400+'px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.body.querySelectorAll('.linkList');
    linkList.forEach(function (value, key, parent) {
        parent[key].style.width = 50+'%';
    });

let linkList2 = document.body.getElementsByClassName('linkList');
for (let i = 0; i < linkList2.length; i++) {
    let linkList2Element = linkList2[i];
    linkList2Element.style.width = 75+'%';
};

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.querySelectorAll('li.listElement2 a');
    listElement2.forEach((value, key, parent) => {
        console.log('Tекст який зберігається в елементі з класом listElement2: ', parent[0].textContent);
    });

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liAll = document.querySelectorAll('li');
    liAll.forEach(((value, key, parent) => {
        value.style.backgroundColor= 'grey';
    }));

// f) отримує всі елементи 'a' та додає їм клас anchor
let aAll = document.querySelectorAll('a');
    aAll.forEach((value => value.className = 'anchor'));

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let link3 = document.querySelectorAll('a');
    link3.forEach(value => {
        if (value.textContent === 'link3') {
            value.style.fontSize = 40+'px';
        };
    });

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aXXX = document.querySelectorAll('a');
    aXXX.forEach(value => {
        let XXX = value.textContent;
        value.className = `element_${XXX}`;
    });

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.querySelectorAll('.sub-header');
    let color = prompt('Write color in English pleas');
    subHeader.forEach(value => {
        value.style.backgroundColor = `${color}`;
    });

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorText = prompt('Write color of text in English pleas')
subHeader.forEach(value => {
        if (value.textContent === 'content 2 segment') {
            value.style.color = `${colorText}`
        };
    });

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentText = prompt('Write text content in English pleas')
let content_1 = document.querySelectorAll('.content_1');
    content_1.forEach(value => {
        value.textContent = `${contentText}`
    });

// l) отримати елементи p та змінити їм padding на 20px
let par = document.querySelectorAll('p');
    par.forEach(value => {
        value.style.padding = 20+'px';
    });

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.querySelectorAll('.text2');
    text2.forEach(value => {
        value.textContent = 'mon-year. Пример sep-2021';
    });