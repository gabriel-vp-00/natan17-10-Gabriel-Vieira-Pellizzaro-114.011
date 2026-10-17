// Ex 1
console.log("Meu script foi executado!");
console.log("painel de estudos - Iniciado com sucesso.");
console.log(10 + 5);

// Ex 3
const nomeAluno = "Gabriel";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;


quantidadeTarefas = 5;
console.log("Quantidade atualizada de tarefas:", quantidadeTarefas);

// Ex 4
var exemploAntigo = "Declaração utilizada em codigos antigos";
console.log(exemploAntigo);

// Ex 5
const titulo = "painel de estudos";
const quantidadeMaterias = 4;
const painelAtivo = true;
const observacao = null;

console.log("Título:", titulo);
console.log("Matérias:", quantidadeMaterias);
console.log("Ativo:", painelAtivo);
console.log("Observação:", observacao);

// Ex 6
const nota1 = 7;
const nota2 = 8;
const soma = nota1 + nota2;
const diferenca = nota2 - nota1;
const multiplicacao = nota1 * 2;
const media = soma / 2;
const aprovado = media >= 6;

console.log("Media das notas:", media);
console.log("aprovado?", aprovado);

// Ex 7
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas registradas.`;
console.log(mensagem);

// Ex 8
if (media >= 6) {
    console.log("Status: Aluno aprovado.");
} else {
    console.log("Status: Aluno precisa revisar o conteúdo.");
}

// Ex 10
const totalTarefas = 5;
let tarefasConcluidas = 3;
const tarefasPendentes = totalTarefas - tarefasConcluidas;
const percentualConcluido = (tarefasConcluidas / totalTarefas) * 100;

console.log(`Tarefas pendentes: ${tarefasPendentes}`);
console.log(`Percentual concluído: ${percentualConcluido}%`);

const resumoDesafio = `Você concluiu ${tarefasConcluidas} de ${totalTarefas} tarefas (${percentualConcluido}%).`;
console.log(resumoDesafio);

if (tarefasPendentes === 0) {
    console.log("Parabens. as tarefas foram feitas.");
} else {
    console.log("Atençao: tem tarefas pendentes.");
}