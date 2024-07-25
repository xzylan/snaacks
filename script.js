document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.style.backgroundColor) {
                cell.style.backgroundColor = '';
            } else {
                cell.style.backgroundColor = getRandomPastelColor();
            }
        });
    });
});

function getRandomPastelColor() {
    const r = Math.floor((Math.random() * 127) + 128);
    const g = Math.floor((Math.random() * 127) + 128);
    const b = Math.floor((Math.random() * 127) + 128);
    return `rgb(${r}, ${g}, ${b})`;
}

