const text = '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela';

const textContainer = document.querySelector('.text-container');


let index = 0;

function repeatText() {

    textContainer.textContent = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(repeatText, 150);