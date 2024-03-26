var list = [];

const body = document.body;

function displayMs() {
    list.map((e) => {
        const m = document.createElement('div');
        m.classList.add('message');
        const n = document.createElement('h3');
        n.innerHTML = e;
        const p = document.createElement('p');
        p.innerHTML = 'I luv u 💜';
        m.appendChild(n);
        m.appendChild(p);
        body.appendChild(m);
    })
}

function getList() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            list = JSON.parse(this.responseText);
            displayMs();
        }
    };
    xhttp.open("GET", '/getNameList', true);
    xhttp.send();
}

getList();