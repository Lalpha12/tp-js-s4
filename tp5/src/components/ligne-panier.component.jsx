import poubelleImg from '../assets/images/poubelle.jpg';

const LignePanier = ({ ligne, modifQuantite, suppression }) => {
  return (
    <div className="product">
      <div className="imageProduit">
      
        <img src={ligne.image} alt={ligne.name} />
      </div>


      <div className="info">
       
        <div className="name">{ligne.name}</div>
       
        <div className="price">{ligne.price}</div>
      </div>

      <input 

        type="number" 


        value={ligne.quantite} 
        min="0"
        onChange={(e) => modifQuantite(ligne, parseInt(e.target.value))}
      />
      <img className="button" src={poubelleImg} alt="supprimer" onClick={() => suppression(ligne)} />
    </div>
  );
}

export default LignePanier;