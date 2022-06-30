const form = document.querySelector('#form-info');
const users = []

function addInfoScreen(name, email, height) {
    const p = document.createElement('p');
    const boxInfo = document.querySelector('.user-info');

    p.innerText = `${name} ${email} ${height}`;
    boxInfo.appendChild(p);
}

function addInfoInList(name, email, height) {
    users.push({
        name,
        email,
        height,
    })

    console.log(users);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const height = form.querySelector('#height').value;

    addInfoScreen(name, email, height);
    addInfoInList(name, email, height);

    console.log(name, email, height);

});