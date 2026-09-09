import Article from './article.component.jsx';



const Magasin = ({ articles, ajout, filtre  }) => {
  return (
    <div className="productList">
      <h4>Boutique</h4>
      <div className="filter">
        <input 
          type="text" 
          placeholder="filtrer les produits" 
          onChange={(e) => filtre(e.target.value)} 
        />
      </div>
      <div className="productsZone">
        {articles.map(a => (
          <Article key={a.id} article={a} ajout={ajout}/>
        ))}
      </div>
    </div>
  );
}

export default Magasin;