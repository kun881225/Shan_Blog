
const cardNumberInput = document.querySelector('.cardNumberInput');
cardNumberInput.addEventListener('input', function() {
    const cardNumberBox = document.querySelector('.cardNumberBox');
    cardNumberBox.innerText = cardNumberInput.value;
})

const cardHolderInput = document.querySelector('.cardHolderInput');
cardHolderInput.addEventListener('input', function() {
    const cardHolderName = document.querySelector('.cardHolderName');
    cardHolderName.innerText = cardHolderInput.value;
})


const monthInput = document.querySelector('.monthInput');
monthInput.addEventListener('input', function() {
    const expMonth = document.querySelector('.expMonth');
    expMonth.innerText = monthInput.value;
})

const yearInput = document.querySelector('.yearInput');
yearInput.addEventListener('input', function() {
    const expYear = document.querySelector('.expYear');
    expYear.innerText = yearInput.value;
})


const cvvInput = document.querySelector('.cvvInput');
cvvInput.addEventListener('mouseenter', function() {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    front.style.transform = 'perspective(500px) rotateY(180deg)';
    back.style.transform = 'perspective(500px) rotateY(360deg)';
})

cvvInput.addEventListener('mouseleave', function() {
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    front.style.transform = 'perspective(500px) rotateY(0deg)';
    back.style.transform = 'perspective(500px) rotateY(180deg)';
})

cvvInput.addEventListener('input', function() {
    const cvvBox = document.querySelector('.cvvBox');
    cvvBox.innerText = cvvInput.value;
})