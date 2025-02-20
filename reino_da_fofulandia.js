const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obter_nome() {
    return new Promise((resolve) => {
        rl.question("Qual o seu nome? ", (nome) => {
            resolve(nome);
        });
    });
}

function apresentar_jogo(nome) {
    console.log(`Seja bem-vindo ao Rei da Fofulandia, ${nome}!\n`);
    console.log("Você está em direção ao Castelo do Rei da Fofura, e passará por inúmeras aventuras até chegar lá.");
    console.log("Há três passagens que lhe levarão a lugares desconhecidos em prol da tentativa de chegar ao castelo.\n");
    console.log("1. Virar a esquerda e entrar na caverna do Dr. Sorriso - o mestre dos experimentos do Reino.");
    console.log("2. Seguir em frente e explorar os terrenos desconhecidos do reino.");
    console.log("3. Virar a direita e tentar subir a Colina dos Doces Gelados.\n");
}

function escolha_fase_1() {
    return new Promise((resolve) => {
        function perguntar() {
            rl.question("Digite a opção que você deseja (1-3): ", (resposta) => {
                const num = parseInt(resposta);
                if (!isNaN(num) && num >= 1 && num <= 3) {
                    resolve(num);
                } else {
                    console.log("Opção inválida! Digite um número de 1 a 3.");
                    perguntar();
                }
            });
        }
        perguntar();
    });
}

function fase_1_caverna_dr_sorriso() {
    console.log("Você entrou na caverna do Dr. Sorriso. Ele te dá um abraço bem forte, mas te olha com um sorriso malicioso.");
    return new Promise((resolve) => {
        rl.question("Dr. Sorriso diz que está precisando solucionar um grande mistério que está acontecendo no Reino.\nVocê quer ajudá-lo? Sim ou não (s/n)? ", (resposta) => {
            resposta = resposta.toLowerCase();
            
            if (resposta === 's') {
                console.log("Você aceitou ajudar o Dr. Sorriso. Ele sorri maleficamente para você, te pega à força e te põe numa cela com um dragão.");
                console.log("O dragão come você. Você perdeu!");
                resolve();
            } else if (resposta === 'n') {
                console.log("Você não aceita a proposta do Dr. Sorriso e ele decide lutar contra você.");
                console.log("Você luta contra o Dr. Sorriso e vence a batalha.");
                console.log("Você sai da caverna, volta para o percurso principal e dessa vez segue apenas em frente.");
                fase_3_ponte().then(resolve);
            } else {
                console.log("Opção inválida! Digite 's' para aceitar ajudar o Dr. Sorriso ou 'n' para não aceitar a sua proposta.");
                fase_1_caverna_dr_sorriso().then(resolve); // Recursão para nova tentativa
            }
        });
    });
}

function fase_3_ponte() {
    return new Promise((resolve) => {
        rl.question("Você encontra uma ponte cheia de lixos tóxicos. Se tocar neles, você será contaminado por vírus mortais e morrerá.\nVocê passará pela ponte? Sim ou não (s/n)? ", (resposta) => {
            resposta = resposta.toLowerCase();
            
            if (resposta === 's') {
                console.log("Ao tentar passar pelos obstáculos na ponte, você toca em um objeto radioativo e morre. Você perdeu!");
                resolve();
            } else if (resposta === 'n') {
                console.log("Você permanece no local e é atacado e morto por Ursos da Fofura Malvada. Você perdeu!");
                resolve();
            } else {
                console.log("Opção inválida! Digite 's' para passar pelos obstáculos da ponte ou 'n' para permanecer no local.");
                fase_3_ponte().then(resolve); // Recursão para nova tentativa
            }
        });
    });
}

function fase_1_seguir_em_frente() {
    console.log("Você segue em frente e vê uma ponte com alguns obstáculos capazes de matar-lhe.");
    return new Promise((resolve) => {
        rl.question("Escolha uma das opções abaixo:\n1. Passar pelos obstáculos da ponte.\n2. Permanecer no local\nOpção: ", (resposta) => {
            if (resposta === '1') {
                console.log("Ao passar pela ponte, você encontra um estranho no caminho.");
                rl.question("Você aceita conversar com o estranho? Sim ou não (s/n)? ", (resp) => {
                    resp = resp.toLowerCase();
                    
                    if (resp === 's') {
                        console.log("O 'estranho' era o Rei do Reino da Fofulandia.");
                        console.log("O rei te levou para a passagem secreta do reino que te leva ao Castelo do Rei.");
                        console.log("Você venceu!");
                        resolve();
                    } else if (resp === 'n') {
                        console.log("Você decide não conversar com o estranho e continua sua jornada.");
                        console.log("Você é atacado por criaturas desconhecidas e morre. Você perdeu!");
                        resolve();
                    } else {
                        console.log("Opção inválida! Digite 's' para conversar com o estranho ou 'n' para ignorá-lo.");
                        fase_1_seguir_em_frente().then(resolve); // Recursão para nova tentativa
                    }
                });
            } else if (resposta === '2') {
                console.log("Você permanece no local e é atacado e morto por Ursos da Fofura Malvada. Você perdeu!");
                resolve();
            } else {
                console.log("Opção inválida! Digite '1' para se aventurar na ponte ou '2' para permanecer no local.");
                fase_1_seguir_em_frente().then(resolve); // Recursão para nova tentativa
            }
        });
    });
}

function fase_1_colina_doces_gelados() {
    console.log("Você não consegue escalar a Colina dos Doces Gelados e acaba caindo. Você perdeu!");
    return Promise.resolve();
}

async function main() {
    const nome = await obter_nome();
    apresentar_jogo(nome);
    
    const resposta = await escolha_fase_1();
    
    if (resposta === 1) {
        await fase_1_caverna_dr_sorriso();
    } else if (resposta === 2) {
        await fase_1_seguir_em_frente();
    } else if (resposta === 3) {
        await fase_1_colina_doces_gelados();
    }
    
    rl.close();
}

main();
