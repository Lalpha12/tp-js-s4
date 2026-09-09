const ImageDetails = ({image, texte, filterText, setFilterText} ) => {
  return (
    <div id="details">
      <img src={image} alt={texte} />
      <div className="legende">{texte}</div>
      <input
        id="filtre" type="text" placeholder="filtre image..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}

export default ImageDetails;
