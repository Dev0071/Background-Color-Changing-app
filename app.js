const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
 
btn.addEventListener('click', () => {
    // get a random number between 0-3 (values of elements in array colors)
    // console.log(document.body); how to target the body
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
 
//generate random numbers betrween 0 and the length of array of colors
getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
};