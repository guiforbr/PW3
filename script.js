let nome = window.prompt('Informe seu nome:');
    document.getElementById('nome').innerHTML = `Bem vindo, ${nome}! <br> Autor da página: Caio Daniel`;


let res = () => {
let resp = document.getElementById('f1');
let p1;
for (let i = 0; i < resp.length; i++){
    if (resp[i].checked) {
        p1 = resp[i].value
        break;
    }
}
switch (p1) {
    case 'HTML':
        document.getElementById('r1').innerHTML = 'Correto, pois a parte de HTML por se tratar de uma linguagem de marcação acaba sendo mais simples';
        break;
    default:
        document.getElementById('r1').innerHTML = 'Resposta errada';
        break;
}
}
let res2 = () => {
    let resp = document.getElementById('f2');
    let p1;
    for (let i = 0; i < resp.length; i++){
        if (resp[i].checked) {
            p1 = resp[i].value
            break;
        }
    }
    switch (p1) {
        case 'JS':
            document.getElementById('r2').innerHTML = 'Correto, pois identificar os IDs para fazer o switch case funcionar foi a parte mais complicada';
            break;
        default:
            document.getElementById('r2').innerHTML = 'Resposta errada';
            break;
    }
    }
