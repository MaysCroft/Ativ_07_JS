// Atividade 07 Exercício 02 - Função Atividade 02 Exercício 05

const ler = require ('readline-sync');

let dia, estacoes, ano, conf;

(async () => { const {default: cor} = await import ('chalk');

    function calendario() {
        dia = ler.questionInt(cor.cyan("- Informe o Dia: "));
        estacoes = ler.questionInt(cor.cyan("- Informe o Mes: "));
        ano = ler.questionInt(cor.cyan("- Informe o Ano: "));

        console.log(cor.cyan("- Data Registrada: " + dia + "/" + estacoes + "/" + ano));
        console.log(cor.cyan("- Confirma? \n- 1. SIM \n- 2. NÃO"));
        conf = ler.questionInt(cor.cyan("=> "));
        console.clear();

        if (conf == 1) {
            console.log(cor.cyan("--------------------------------------------------------------------"));
            switch (estacoes) {
                case 1:
                case '01':
                    console.log(cor.redBright("- A estação do ano correspondente ao mês de Janeiro é Verão"));
                    break;
        
                case 2:
                case '02':
                    console.log(cor.redBright("- A estação do ano correspondente ao mês de Fevereiro é Verão"));
                    break;
        
                case 3:
                case '03':
                    console.log(cor.redBright("- A estação do ano correspondente ao mês de Março é Verão"));
                    break;
        
                case 4:
                case '04':
                    console.log(cor.yellowBright("- A estação do ano correspondente ao mês de Abril é Outono"));
                    break;
        
                case 5:
                case '05':
                    console.log(cor.yellowBright("- A estação do ano correspondente ao mês de Maio é Outono"));
                    break;
        
                case 6:
                case'06':
                console.log(cor.yellowBright("- A estação do ano correspondente ao mês de Junho é Outono"));
                    break;
        
                case 7:
                case '07':
                    console.log(cor.blueBright("- A estação do ano correspondente ao mês de Julho é Inverno"));
                    break;
        
                case 8:
                case '08':
                    console.log(cor.blueBright("- A estação do ano correspondente ao mês de Agosto é Inverno"));
                    break;
        
                case 9:
                case '09':
                    console.log(cor.blueBright("- A estação do ano correspondente ao mês de Setembro é Inverno"));
                    break;
        
                case 10:
                    console.log(cor.magentaBright("- A estação do ano correspondente ao mês de Outubro é Primavera"));
                    break;
        
                case 11:
                    console.log(cor.magentaBright("- A estação do ano correspondente ao mês de Novembro é Primavera"));
                    break;
        
                case 12:
                    console.log(cor.magentaBright("- A estação do ano correspondente ao mês de Dezembro é Primavera"));
                    break;
            
                default:
                    console.log(cor.red("--- Mês Inválido! ---"));
                    break;
            }
            console.log(cor.cyan("--------------------------------------------------------------------"));
        } else {
            console.log("--- Sistema Encerrado! ---");
        }
    }

    calendario();
})();