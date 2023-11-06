const matrix = document.getElementById("matrix");
const totalCombo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomGenerate() {
    let randomArray = [];

    for (let i = 0; i < 5000; i++) {
        const randomNumber = Math.floor(Math.random() * totalCombo.length);
        randomArray.push(totalCombo[randomNumber]);
    }
    
    const matrixBuilder = randomArray.toString();
    
    matrix.innerHTML = matrixBuilder.replace(/,/g, '');
    
}

randomGenerate();

matrix.addEventListener("mousemove", (e) => {
    randomGenerate();
})

