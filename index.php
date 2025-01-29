<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulaire POST</h1>
    <form action="http://localhost:8080/demo/formulaire" method="POST">
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom">
        <label for="prenom">Prenom</label>
        <input type="text" name="prenom" id="prenom">
        <button>Envoyer</button>
    </form>
</body>
</html>