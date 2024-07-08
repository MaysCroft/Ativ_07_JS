// Atividade 07 Exercício 02 - Função Atividade 02 Exercício 01

const ler = require('readline-sync');

let peso, planet;
let pesoplanet = 0;

(async () => { const {default: cor} = await import ('chalk');

    function star() {
        peso = ler.questionFloat(cor.magenta("- Digite seu Peso: "));

        console.log(cor.blueBright("------------- ESCOLHA UM PLANETA -------------"));
        console.log(cor.blueBright("- 1. MERCÚRIO \n- 2. VÊNUS \n- 3. MARTE \n- 4. JÚPITER \n- 5. SATURNO \n- 6. URANO"));
        planet = ler.questionInt(cor.blueBright("=> "));
        console.log(cor.blueBright("----------------------------------------------"));

        space(planet);
    }

    function space() {
        switch (planet) {
            case 1:
                pesoplanet = peso * 0.37;
                console.log(cor.red("- Seu Peso em MERCÚRIO é: " + pesoplanet));
                break;
        
            case 2:
                pesoplanet = peso * 0.88;
                console.log(cor.magenta("- Seu Peso em VÊNUS é: " + pesoplanet));
                break;
        
            case 3:
                pesoplanet = peso * 0.38;
                console.log(cor.red("- Seu Peso em MARTE é: " + pesoplanet));
                break;
        
            case 4:
                pesoplanet = peso * 2.64;
                console.log(cor.yellow("- Seu Peso em JÚPITER é: " + pesoplanet));
                break;
        
            case 5:
                pesoplanet = peso * 1.15;
                console.log(cor.yellow("- Seu Peso em SATURNO é: " + pesoplanet));
                break;
        
            case 6:
                pesoplanet = peso * 1.17;
                console.log(cor.blue("- Seu Peso em URANO é: " + pesoplanet));
                break;
        
            default:
                console.log(cor.redBright("--- Opção Inválida! ---"));
                break;
        }
    }

    star();
})();