function Idade(){
    let idade = Number (document.getElementById("idade").value);

    if(idade >=2){
        document.getElementById("msg").innerText = "Bebê"
    }
    else if(idade >=11){
        document.getElementById("msg").innerText = "Criança"
    }
    else if(idade >=21){
        document.getElementById("msg").innerText = "Jovem"
    }
    else if(idade >=64){
        document.getElementById("msg").innerText = "Adulto"
    }
    else if(idade >=100){
        document.getElementById("msg").innerText = "Idoso"
    }
    else if(idade <101){
        document.getElementById("msg").innerText = "Rainha Elizabeth"
    }
}