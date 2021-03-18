alert('Iniciei o JavaScript')


// PARA SABER QUAL TIPO DE VARIAVEL EU TENHO



const sorveteria = [];

sorveteria[0] = 'Sorveteria_01';
sorveteria[1] = 'Sorveteria_02';
sorveteria[2] = 'Sorveteria_03';

alert('A constante sorveteria é do tipo: ' + typeof(sorveteria));




window.onload = function(){

const lojas = {};
lojas.nome = [];
lojas.nome[0] = 'Loja 01'
lojas.nome[1] = 'Loja 02'

alert(lojas.nome[1]);

lojas.endereco = 'endereço 01';
lojas.numero = 200;

alert('O nome da loja é: ' + lojas.nome[0]);

console.log(typeof(lojas.nome));
}