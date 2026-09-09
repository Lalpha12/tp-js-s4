import Magasin from './magasin.component.jsx';

import { useState, useEffect } from 'react';
import products from '../data/products.js';

import Panier from './panier.component.jsx';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [panier, setPanier] = useState([]);
  const [filtre, setFiltre] = useState('');

  useEffect(() => {
    setArticles(products);  
  }, []);

  const ajouterAuPanier = (article) => {
    const dejaDedans = panier.find(ligne => ligne.id === article.id);
    if (dejaDedans) {
      setPanier(panier.map(ligne => {
        if (ligne.id === article.id) {
          return { ...ligne, quantite: ligne.quantite + 1 };
        } else {
          return ligne;
        }
      }));
    } else {
      setPanier([...panier, { ...article, quantite: 1 }]);
    }
    setArticles(articles.map(a => {
      if (a.id === article.id) {
        return { ...a, stock: a.stock - 1 };
      } else {
        return a;
      }
    }));
  };

  const modifierQuantite = (ligne, nouvelleQuantite) => {
    if (nouvelleQuantite < 0) {
      return;
    }
    const diff = nouvelleQuantite - ligne.quantite;
    setPanier(panier.map(l => {
      if (l.id === ligne.id) {
        return { ...l, quantite: nouvelleQuantite };
      } else {
        return l;
      }
    }));
    setArticles(articles.map(a => {
      if (a.id === ligne.id) {
        return { ...a, stock: a.stock - diff };
      } else {
        return a;
      }
    }));
  };


  const supprimerDuPanier = (ligne) => {
    setPanier(panier.filter(l => l.id !== ligne.id));
    setArticles(articles.map(a => {
      if (a.id === ligne.id) {
        return { ...a, stock: a.stock + ligne.quantite };
      } else {
        return a;
      }
    }));
  };

  const filtrerArticles = (texte) => {
    setFiltre(texte);
  };

  const articlesFiltres = articles.filter(a =>
    a.name.toLowerCase().includes(filtre.toLowerCase())
  );





  return (
    <div> 
      <Magasin articles={articlesFiltres} ajout={ajouterAuPanier} filtre={filtrerArticles} />
      <Panier lignes={panier} modifQuantite={modifierQuantite} suppression={supprimerDuPanier} />
    </div>
  );
}
export default App;
 