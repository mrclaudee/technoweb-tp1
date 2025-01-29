const readline = require('readline');
const fs = require('fs');
const { stdin, stdout } = require('process');

const rl = readline.createInterface({ input: stdin, output: stdout });
rl.question('Texte à écrire dans le fichier:', (data) => {
    fs.writeFile('saisie.txt', data, 'utf-8', (err) => {
        if (err) {
            console.log("Erreur lors de l'écriture dans le fichier.");
        }
    });
    rl.close();
});
