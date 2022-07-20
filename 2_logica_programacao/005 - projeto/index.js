const dateTitle = document.querySelector('h1#data');
const date = new Date();

// toLocaleDateString -> return an string with format date
const formatDate = date.toLocaleDateString('pt-Br', {
    day: '2-digit',
    weekday: 'long',
    year: "numeric",
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
})

console.log(formatDate);

dateTitle.innerText = formatDate;