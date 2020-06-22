const readline = require('readline-sync');
const YASMIJ = require('yasmij');

function start() {
  const dataForSimplexOperation = {
    type: null,
    objective: null,
    constraints: []
  };

  dataForSimplexOperation.type = askAndReturnTypeOperation();
  dataForSimplexOperation.objective = askAndReturnFunctionObjective();
  dataForSimplexOperation.constraints = askAndReturnConstraints();

  function askAndReturnTypeOperation() {
    console.log('\nEscolha o que deseja obter');

    const prefixes = ['maximize', 'minimize'];
    const selectedPrefixIndex = readline.keyInSelect(prefixes);
    const selectedPrefixText = prefixes[selectedPrefixIndex];

    return selectedPrefixText;
  }

  function askAndReturnFunctionObjective() {
    return readline.question('Informe a funcao objetivo do problema: ');
  }

  function askAndReturnConstraints() {
    const constraints = [];
    let constraint;

    do {
      constraint = readline.question(
        'Informe uma restricao ou informe 0 para sair: '
      );

      if (constraint !== '0') {
        constraints.push(constraint);
      }
    } while (constraint !== '0');

    return constraints;
  }

  const output = YASMIJ.solve(dataForSimplexOperation);

  console.log('\nDados informados:');
  console.log(dataForSimplexOperation);
  console.log('\nResultado final:');
  console.log(output);
}

start();

/** First Problem
 * Maximizar 5x + 2y
 * Sujeito a:
x <= 3
y <= 4
x + 2y <= 9
 * x, y >= 0
 **/

/** Second Problem
 * Minimizar 6x + 10y
 * Sujeito a:
– x + y <= 2
x + 2y >= 1
x <= 5
x <= 6
3x + 5y >= 15
5x + 4y >= 20
 * x, y >= 0
 **/

/** Third Problem
 * Maximizar x + 2y
 * sujeito a:
3x + 4y <= 24
5x + 2y <= 20
 * x, y >= 0
 **/

/** Fourth Problem
 * Maximizar 80x + 60y
 * sujeito a:
4x + 6y <= 24
4x + 2y <= 16
y <= 3
 * x, y >= 0
 **/

/** Fifth Problem
 * Minimizar 0.006x + 0.008y
 * sujeito a:
0.1x + 0.2y >= 2
0.4x + 0.6y >= 64
0.5x + 0.2y >= 34
 * x, y >= 0
 **/
