alert('Iniciei o JavaScript')


window.onload = function(){

const lojas = {};
lojas.nome = [];
lojas.nome[0] = 'Loja 01'
lojas.nome[1] = 'Loja 02'

alert(lojas.nome[1]);

lojas.endereco = 'endereço 01';
lojas.numero = 200;

alert('O nome da loja é: ' + lojas.nome[0]);

}
