// Atividade 07 Exercício 04

const ler = require('readline-sync');

let veloc;
let convert = ((veloc * 1000) / 3600); 

(async () => { const {default: cor} = await import ('chalk');

    function km() {
        veloc = ler.questionFloat(cor.greenBright("- Digite a Velocidade para Conversão: "));
    
        converter(convert);
    }
    
    function converter(convert) {
        console.log(cor.redBright("- Velocidade Convertida p/ Milésimo de Segundo: " + convert));
    }
    
    km();
})();