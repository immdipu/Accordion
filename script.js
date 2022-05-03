'use strict'

const faq = document.querySelectorAll('.faq');
const answer = document.querySelectorAll('.answer');

for (const items of faq) {
    items.addEventListener('click', function () {
        items.classList.toggle('activate')
    })
}