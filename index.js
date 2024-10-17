// Crie uma variável para armazenar o nome e a quantidade de XP de um herói, depois utilize uma estrutura de decisão(If, switch) para apresentar alguma das mensagens abaixo: 
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1001 e 2000 = bronze
// Se xp for entre 2001 ee 5000 = Prata Ouro
// Se xp for entre 5001 e 8000 = Platina Diamante
// Se xp for entre 8001 e 9000 = Ascendente
// Se xp for entre 9001 e 10000 = Imortal
// Se xp for maior ou igual a 10001 = Radiante
// Ao final deve se exibir uma mensagem:
// "O herói de nome**{nome}** está no nível de **{nível}** "

let heroi = ["Orianna", "Twitch", "Tryndamere", "Jinx", "Swain", "Jax", "Lee sin", "Vex", "Renekton", "Vayne"];
let exp = [];

for (let i = 0; i < 10; i++) {
    let valor = Math.floor(Math.random() * 11001);
    exp.push(valor);
}

for (let i = 0; i < 10; i++) {
    let nivel;
    
    if (exp[i] < 1000) {
        nivel = "Ferro";
    } else if (exp[i] >= 1001 && exp[i] <= 2000) {
        nivel = "Bronze";
    } else if (exp[i] >= 2001 && exp[i] <= 5000) {
        nivel = "Prata Ouro";
    } else if (exp[i] >= 5001 && exp[i] <= 8000) {
        nivel = "Platina Diamante";
    } else if (exp[i] >= 8001 && exp[i] <= 9000) {
        nivel = "Ascendente";
    } else if (exp[i] >= 9001 && exp[i] <= 10000) {
        nivel = "Imortal";
    } else if (exp[i] >= 10001) {
        nivel = "Radiante";
    }

    console.log(`O herói de nome: ${heroi[i]} está com ${exp[i]} pontos de XP e é considerado um herói de nível ${nivel}.`);
}
