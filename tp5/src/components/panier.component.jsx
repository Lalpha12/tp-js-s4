import LignePanier from './ligne-panier.component.jsx';

const Panier = ({ lignes, modifQuantite, suppression }) => {

  let prixTotal = 0;
  let poidsTotal = 0;

  lignes.map(ligne => {
    prixTotal = prixTotal + ligne.price * ligne.quantite;
    poidsTotal = poidsTotal + ligne.weight * ligne.quantite;
  });


  return (
    <div className="cart">
      <div style={{textAlign: 'right', fontStyle: 'italic', fontSize: 'smaller', color: '#999'}}>
        poids total {poidsTotal} g
      </div>
      <h4>Panier</h4>
      {lignes.length > 0 && lignes.map(ligne => (
        <LignePanier key={ligne.id} ligne={ligne} modifQuantite={modifQuantite} suppression={suppression} />
      ))}
    
      <div className="total">
        <div>Total: {prixTotal}€</div>
      </div>
    </div>
  );
}

export default Panier;