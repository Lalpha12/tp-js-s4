import panierImg from '../assets/images/panier.jpg';


const Article = ({ article, ajout }) => {
  return (
    <div className="product">
      <div className="info">
       
        <div className="name">{article.name}</div>
        <div className="description">{article.description}</div>
        
        
        <div className="weight">{article.weight}</div>
      </div>
      <div className="imageProduit">
        <img src={article.image} alt="article" />
      </div>
      
      <div className="stock">qté: {article.stock}</div>
      <div className="price">{article.price}</div>
      <img 
        className="button" 
        src={panierImg} 
        alt="ajouter" 
        onClick={() => {
          if (article.stock > 0) {
            ajout(article);
          }
        }} 
      />
    </div>
  );
}

export default Article;