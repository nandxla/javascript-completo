function createTimerForScreen(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'GMT',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}


const timer = document.querySelector('.timer');
const btnIniciar = document.querySelector('#iniciar');
const btnPausar = document.querySelector('#pausar');
const btnZerar = document.querySelector('#zerar');

let interval;
let second = 0;

btnIniciar.addEventListener('click', function(e) {
    interval = setInterval(function () {
        second++;
        timer.innerText = createTimerForScreen(second);
    }, 1000);
});

btnPausar.addEventListener('click', function(e) {
    clearInterval(interval);
    timer.innerText = createTimerForScreen(second);
});

btnZerar.addEventListener('click', function(e) {
    second = 0;
    clearInterval(interval);
    timer.innerText = '00:00:00';
});
