// Vamos imaginar que você está cozinhando na sua cozinha. Às vezes, você pede ajuda a um amigo para mexer a panela quando a sopa estiver pronta. Quando a sopa estiver pronta, você grita: "Amigo, mexa a panela agora!". O ato de mexer a panela é como uma "callback" - você está chamando seu amigo para fazer algo específico quando algo acontece.

const value = [1,2,3,4,10]
const func = (n) => n * 2

function calculadora(value, func) {
    for(mult of value){
        console.log(mult = func(mult))
    }
    return calculadora
}
console.log(calculadora(value,func))


// Em JavaScript, um "callback" é como pedir a um amigo para fazer algo quando alguma tarefa termina. Por exemplo, imagine que você está esperando um bolo assar no forno. Você não fica olhando o tempo todo, certo? Em vez disso, você pode dizer ao JavaScript para chamar uma função (o "callback") quando o bolo estiver pronto.

// Então, um "callback" no JavaScript é como pedir a alguém (ou algo) para fazer alguma coisa quando outra coisa termina. É como dizer: "Ei, quando você terminar de fazer isso, faça aquilo também!"