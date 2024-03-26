const nameSubmitForm = document.querySelector('.nameSubmit');
const sendForm = document.querySelector('.sendForm');
const threat = document.querySelector('.threat');
const happy = document.querySelector('.happy');
const nameBtn = document.querySelector('.nameBtn');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const try_again = document.querySelector('.💀');

const body = document.body;
var userName = '';

function eDisplay(list) {
    const visibility = ['none' , 'block'];
    nameSubmitForm.style.display = visibility[list[0]];
    sendForm.style.display = visibility[list[1]];
    threat.style.display = visibility[list[2]]; 
    happy.style.display = visibility[list[3]]; 
}

nameBtn.addEventListener('click', () => {
    const input = document.querySelector('.nameInput');
    const label = document.querySelector('.label');
    if (input.value === '') {label.innerHTML = 'Seriously😒?';return;}
    userName = input.value;
    eDisplay([0,1,0,0]);
});

no.addEventListener('click', () => {
    body.style.backgroundColor='black';
    eDisplay([0,0,1,0]);
});

try_again.addEventListener('click', () => {
    body.style.backgroundColor='white';
    eDisplay([0,1,0,0]);
});

function sendName() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
        console.log('server received');
        }
    };
    xhttp.open("GET", `/getM/?name=${userName}`, true);
    xhttp.send();
}

yes.addEventListener('click', () => {
    eDisplay([0,0,0,1]);
    sendName();
});





