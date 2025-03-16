function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);