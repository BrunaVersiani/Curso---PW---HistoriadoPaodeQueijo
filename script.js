var nome;
nome=window.prompt("Olá! Qual o seu nome?","Digite o seu nome aqui");

var data=new Date();
var hora=data.getHours();

if(hora<12){
  document.write("<b>Bom dia!");
}
else if(hora<18){
  document.write("<b>Boa Tarde!");
}
else {
  document.write("<b>Boa noite!");
}

document.writeln(nome + ", seja bem vindo(a)! Hoje é");
document.writeln(data + "!</br>");