// Atividade 07 Exercício 02 - Função Atividade 02 Exercício 02

const ler = require('readline-sync');

let compra, opt;
let desc = 0;

(async () => { const {default: cor} = await import ('chalk');

    function shopping() {
        compra = ler.questionFloat(("- Digite o Total da Compra: R$ "))
    
        console.log(cor.cyan("---------- MENU PAGAMENTO ----------"));
        console.log(cor.cyan("- Identificação de Comprador: "));
        console.log(cor.cyan("- 1. Cliente Comum \n- 2. Funcionário \n- 3. VIP"));
        opt = ler.questionInt(cor.cyan("=> "));
        console.log(cor.cyan("------------------------------------"));
    
        shop(opt);
    }
    
    function shop() {
        switch (opt) {
            case 1:
                console.log(cor.green("- Total da Compra: R$ " + compra));
                break;
        
            case 2:
                desc = compra - ((compra * 10) / 100);
                desc = desc.toFixed(2);
                console.log(cor.yellowBright("- Total com Desconto para Funcionários: R$ " + desc));
                break;
        
            case 3:
                desc = compra - ((compra * 5) / 100);
                desc = desc.toFixed(2);
                console.log(cor.blueBright("- Total com Desconto para VIPs: R$ " + desc));
                break;
        
            default:
                console.log(cor.redBright("--- Opção Inválida! ---"));
                break;
        }
    }
    
    shopping();
})();