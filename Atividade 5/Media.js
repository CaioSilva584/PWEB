var nome, nt1, nt2, nt3, media;

do {
	nome = prompt("Digite seu nome");
	nt1 = prompt("Digite a nota 1");
	nt2 = prompt("Digite a nota 2");
	nt3 = prompt("Digite a nota 3");

	media = (parseFloat(nt1)+parseFloat(nt2)+parseFloat(nt3))/3;

	alert("Média final do Aluno "+nome+": "+media);

	var decisao = confirm("Deseja executar novamente?");

}while (decisao);

