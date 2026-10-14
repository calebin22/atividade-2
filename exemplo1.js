const readline = require('readline-sync');

// ==========================================
// 1. VARIAVEIS INICIAIS (CONTADORES)
// ==========================================
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

console.log("=== SISTEMA DE NOTAS DA ESCOLA ===");

// ==========================================
// 2. PEDIR QUANTIDADE DE ALUNOS
// ==========================================
let totalAlunos = Number(readline.question("Quantos alunos voce quer cadastrar? "));

// ==========================================
// 3. REPETICAO PARA CADA ALUNO
// ==========================================
for (let i = 1; i <= totalAlunos; i = i + 1) {
    console.log("");
    console.log("--- Cadastro do aluno " + i + " ---");

    // Pedir o nome
    let nome = readline.question("Digite o nome do aluno: ");

    // Pedir a Nota 1 (com validacao iniciante)
    let nota1 = Number(readline.question("Digite a nota 1 (0 a 10): "));
    while (nota1 < 0 || nota1 > 10) {
        console.log("Nota invalida! Digite um valor entre 0 e 10.");
        nota1 = Number(readline.question("Digite a nota 1 novamente: "));
    }

    // Pedir a Nota 2 (com validacao iniciante)
    let nota2 = Number(readline.question("Digite a nota 2 (0 a 10): "));
    while (nota2 < 0 || nota2 > 10) {
        console.log("Nota invalida! Digite um valor entre 0 e 10.");
        nota2 = Number(readline.question("Digite a nota 2 novamente: "));
    }

    // Calcular a media
    let media = (nota1 + nota2) / 2;

    // Descobrir a situacao do aluno
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
        aprovados = aprovados + 1;
    } else if (media >= 5) {
        situacao = "Recuperacao";
        recuperacao = recuperacao + 1;
    } else {
        situacao = "Reprovado";
        reprovados = reprovados + 1;
    }

    // Mostrar os dados do aluno na tela
    console.log("Nome: " + nome);
    console.log("Media: " + media);
    console.log("Situacao: " + situacao);
}

// ==========================================
// 4. RESULTADO FINAL
// ==========================================
console.log("");
console.log("=========================================");
console.log("RESUMO DA TURMA:");
console.log("Total de alunos: " + totalAlunos);
console.log("Aprovados: " + aprovados);
console.log("Em recuperacao: " + recuperacao);
console.log("Reprovados: " + reprovados);
console.log("=========================================");