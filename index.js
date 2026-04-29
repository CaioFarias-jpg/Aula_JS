function mostrar(num){
    let exs = document.querySelectorAll(".exercicio");
    exs.forEach(e => e.style.display = "none");

    document.getElementById("ex" + num).style.display = "block";
}

function ex11(){
    let nome = document.getElementById("nome11").value;
    let idade = Number(document.getElementById("idade11").value);
    
    let res11 = document.getElementById("res11");

    if (idade >=101){ 
        res11.innerText = nome + " tem " + idade + " anos e é " + "Muito Velhinho";
    }
     else if (idade >=100){
        res11.innerText = nome + " tem " + idade + " anos e é " + "idoso";
    }
    else if (idade >=64){
        res11.innerText = nome + " tem " + idade + " anos e é " + "Adulto";
    }
    else if (idade >=22){
        res11.innerText = nome + " tem " + idade + " anos e é " + "Jovem";
    }
    else if (idade >=11){
        res11.innerText = nome + " tem " + idade + " anos e é " + "Criança";
    }
    else if(idade >=2){
        res11.innerText = nome + " tem " + idade + " anos e é " + "Bebê";
    }
    else {
        res11.innerText = nome + " tem " + idade + " anos e é " + "Recém nascido";
    }
}

function ex12(){
    let n = Number(document.getElementById("num12").value);
    document.getElementById("res12").innerText =
        n >= 0 ? "Positivo" : "Negativo";
}

function ex13(){
    let n = Number(document.getElementById("num13").value);
    document.getElementById("res13").innerText =
        n % 2 === 0 ? "Par" : "Ímpar";
}

function ex14(){
    let saldo = Number(document.getElementById("saldo").value);
    let debito = Number(document.getElementById("debito").value);
    let credito = Number(document.getElementById("credito").value);

    let atual = saldo - debito + credito;

    document.getElementById("res14").innerText =
        atual >= 0 ? "Saldo Positivo" : "Saldo Negativo";
}

function ex15(){
    let s = document.getElementById("sexo").value.toUpperCase();

    let res = s === "F" ? "Feminino" :
              s === "M" ? "Masculino" :
              "Inválido";

    document.getElementById("res15").innerText = res;
}

function ex16(){
    let n1 = Number(n1.value);
    let n2 = Number(n2.value);
    let n3 = Number(n3.value);

    document.getElementById("res16").innerText =
        `Maior: ${Math.max(n1,n2,n3)} | Menor: ${Math.min(n1,n2,n3)}`;
}

function ex17(){
    let s = Number(salario.value);
    let aumento = s <= 280 ? 0.2 :
                  s <= 700 ? 0.15 :
                  s <= 1500 ? 0.1 : 0.05;

    let novo = s + (s * aumento);

    document.getElementById("res17").innerText =
        `Novo salário: R$ ${novo.toFixed(2)}`;
}

function ex18(){
    let v = Number(valorHora.value);
    let h = Number(horas.value);

    let bruto = v * h;

    document.getElementById("res18").innerText =
        `Salário bruto: R$ ${bruto}`;
}

function ex19(){
    let a = Number(l1.value);
    let b = Number(l2.value);
    let c = Number(l3.value);

    let tipo =
        a === b && b === c ? "Equilátero" :
        a === b || a === c || b === c ? "Isósceles" :
        "Escaleno";

    document.getElementById("res19").innerText = tipo;
}

function ex20(){
    let ano = Number(ano.value);

    let bissexto =
        (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    document.getElementById("res20").innerText =
        bissexto ? "Bissexto" : "Não é bissexto";
}