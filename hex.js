const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let randomHex = '#';
    for(let i = 0; i < 6; i++){
        randomHex += hex[getRandomHex()];
    }
    console.log(randomHex);
    document.body.style.backgroundColor =randomHex;
    color.textContent = randomHex;
    
});

getRandomHex = () => {
    return Math.floor(Math.random() * hex.length);
};