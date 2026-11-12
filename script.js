// 1. getElementById - Capturando o campo select de trilhas
const campoCurso = document.getElementById('select-curso');
console.log("Select encontrado pelo ID:", campoCurso);

// 2. getElementsByClassName - Buscando elementos pela classe 'texto-foco'
const textosDestacados = document.getElementsByClassName('texto-foco');
console.log("Itens com destaque:", textosDestacados);

// 3. getElementsByTagName - Contando todos os parágrafos do documento
const todosParagrafos = document.getElementsByTagName('p');
console.log("Total de tags <p> encontradas:", todosParagrafos.length);

// 4. querySelector - Selecionando o botão de destacar todos
const btnDestacar = document.querySelector('#btn-destacar');

// 5. querySelectorAll - Pegando todos os blocos interativos
const listaBlocos = document.querySelectorAll('.bloco-item');

// 6. innerHTML - Alterando o conteúdo do primeiro parágrafo dinamicamente
const paragrafoInicial = document.querySelector('.cartao p');
if (paragrafoInicial) {
    paragrafoInicial.innerHTML += " <em>(Texto atualizado via JS)</em>";
}

// 7. addEventListener & classList - Interação nos blocos e botões
listaBlocos.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a borda geral caso esteja ativa e aplica a individual (roxa)
        item.classList.remove('borda-geral');
        item.classList.toggle('borda-individual');
    });
});

// Botão para destacar todos os blocos de uma vez (laranja)
btnDestacar.addEventListener('click', () => {
    listaBlocos.forEach(item => {
        item.classList.remove('borda-individual');
        item.classList.add('borda-geral');
    });
});

// Botão para resetar as bordas de todos os blocos
const btnLimpar = document.getElementById('btn-limpar');
btnLimpar.addEventListener('click', () => {
    listaBlocos.forEach(item => {
        item.classList.remove('borda-individual', 'borda-geral');
    });
});

// 8. createElement e appendChild - Inserindo uma nova tecnologia na lista
const listaTech = document.querySelector('.lista-tech');
if (listaTech) {
    const itemExtra = document.createElement('li');
    itemExtra.innerHTML = 'TypeScript (Inserido via DOM)';
    listaTech.appendChild(itemExtra);
}