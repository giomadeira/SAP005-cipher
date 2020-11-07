import cipher from './cipher.js';

const nomeCodificar = document.getElementById('trazerCodigo')
nomeCodificar.addEventListener('click',trazerCodigo)
 
function trazerCodigo(clickGerarCodigo){
clickGerarCodigo.preventDefault()
let nome = document.getElementById('nome').value;
nome = nome.toUpperCase();
let desloca = Number(document.getElementById('offset').value)
const nomeCodificado = cipher.encode(desloca,nome);
document.getElementById("codigoGerado").value = `${nomeCodificado}`;
} 
const trazerNome = document.getElementById('reverteCodigo')
trazerNome.addEventListener('click',reverteCodigo)
 
function reverteCodigo(clickGerarNome){
clickGerarNome.preventDefault()
let decodifica = document.getElementById('codigoAsc').value;
decodifica = decodifica.toUpperCase();
let volta = Number(document.getElementById('offset2').value)
const nomeDecifrado = cipher.decode(volta,decodifica);
document.getElementById("nomeUsuario").value = `${nomeDecifrado}`;
  
 
} 

