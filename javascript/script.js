const toggleButton = document.getElementById('toggle-button');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const body = document.body;

toggleButton.addEventListener('click', function () {

    if (body.classList.contains('open')) {
        body.classList.remove('open');
    } else {
        body.classList.add('open');
    }
});

overlay.addEventListener('click', function () {
    body.classList.remove('open');
});



