const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier: ', err);
        return;
    }
    console.log('Données lues dans text.txt');
    console.log(data);
});
