const os = require('os');

console.log('Architecture: ', os.arch());
console.log('CPU: ', os.cpus()[0].model);
console.log('Mémoire: ', os.totalmem());
console.log('Dossier utilisateur: ', os.homedir());
