# TP 5 : projet 2 "React"

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp5` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).

  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Expliquez ici comment exécuter votre projet. Vous pouvez également ajouter toute précision utile sur votre travail.

## Comment exécuter le projet

Placez-vous dans le répertoire `tp5` et tapez les commandes suivantes :

1. `npm install`
2. `npm run build` — vous constaterez la création d'un dossier `dist`
3. `npm run dev-server` — la boutique se lance automatiquement dans votre navigateur


 ## Description
Application de boutique en ligne en React permettant de parcourir un catalogue de peluches et de gérer un panier d'achat.
 
## Ce qui a été fait
 
- Affichage des produits avec leurs infos (nom, prix, stock, image)
- Ajout au panier avec le bouton panier, le stock se met à jour automatiquement
- Modification de la quantité directement dans le panier, le stock suit
- Suppression d'un article avec le bouton poubelle
- Prix total et poids total calculés en temps réel
- Filtre pour chercher un produit par nom
- On peut plus ajouter au panier si le stock est à 0
- On peut plus augmenter la quantité dans le panier au delà du stock dispo

## Choix techniques
 
**Nommage en français** — les composants et fonctions sont nommés en français (Magasin, Panier, LignePanier, ajouterAuPanier...) pour coller au contexte du projet.
 
**State centralisé dans App** — toutes les données (articles, panier, filtre) sont gérées dans App et transmises via les props. Ca évite les incohérences entre composants.
 
**Chargement via useEffect** — les produits sont initialisés dans un useEffect plutôt que directement dans le useState, pour pouvoir basculer vers une vraie API plus tard sans changer la structure.
 
**id comme identifiant unique** — on utilise le champ id pour retrouver et comparer les articles dans le panier et dans la liste.
