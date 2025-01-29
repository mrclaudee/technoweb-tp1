const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('Entrez quelque chose : ', (data) => {
    console.log('Vous avez entré:', data);
    rl.close();
});
