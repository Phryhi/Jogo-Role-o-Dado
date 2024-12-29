function rollDice(){
    const quantiDados = document.getElementById("quantiDados").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const valores = []; //array vazia
    const imagens = []; //array vazia

    for(let i = 0; i < quantiDados; i++){
        const valor = Math.floor(Math.random() * 6) + 1; //escolhe números aleatórios
        valores.push(valor); //adiciona o valor da variável na array valores
        imagens.push(`<img src="img/${valor}.png" alt="dado ${valor}">`);   //adiciona o valor na array imagens
    }
    
    diceResult.textContent = `Valores obtidos: ${valores.join(", ")}`;
    diceImages.innerHTML = imagens.join(" ");
}