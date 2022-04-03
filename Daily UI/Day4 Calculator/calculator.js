let input = '';
let answer = '';


function clearAll() {
    input = '';
    answer = '';
    document.querySelector('.answer').value = answer;
    document.querySelector('.value').value = input;
}

function cal(a) {
    if (a=="euql") {
        answer = eval(input);
        document.querySelector('.answer').value = '= ' + answer;
        input = '';
        answer = '';
    }
    else {
        input += a;
        document.querySelector('.value').value = input;
    }
}


