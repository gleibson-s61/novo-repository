let usuario = prompt("Digite seu nome completo.");  
    let  nomeCompleto = document.getElementById('titulo');
        nomeCompleto.innerHTML = (`<br><strong>${usuario}</strong>`);

let texto = document.getElementById('Usuario-1');
texto.innerHTML += (`<br> Seja bem vindo: ${usuario}`);
texto.innerHTML += (`<br> Senhor: ${usuario} voçê tem <strong>32</strong> anos de idade`);
texto.innerHTML += (`<br> ${usuario} voçê tem <strong>1.75</strong> de altura`);
texto.innerHTML += (`<br>  ${usuario} voçê tem uma nova jornada para Enfrentar!`);
texto.innerHTML += (`<br> senhor ${usuario} sua <strong>Graduação</strong> ja se enconta Disponivel no sistema.`);
texto.innerHTML += (`<br>Senhor ${usuario} <strong>Jesus</strong> faz o <strong>impossivel</strong> ancontecer em sua vida!`);
