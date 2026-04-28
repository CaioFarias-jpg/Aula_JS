function Idade(){
    let idade = Number (document.getElementById("idade").value);

    if (idade >= 101) {
        msg.innerText = "Rainha Elizabeth"
    } else if (idade >= 64) {
        msg.innerText = "Idoso"
    } else if (idade >= 25) {
        msg.innerText = "Adulto"
    } else if (idade >= 15) {
        msg.innerText = "Jovem"
    } else if (idade >= 4) {
        msg.innerText = "Criança"
    } else {
         msg.innerText = "Bebê"
    }
}