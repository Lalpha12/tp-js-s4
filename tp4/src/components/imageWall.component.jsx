const ImageWall = ({ images, onImageChange, filterText }) => {

  const filteredImages = images.filter((item) =>
    item.texte.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div id="mur">
      {filteredImages.map((item) => (
        <img
          key={item.image}
          src={item.image}
          alt={item.texte}
          title={item.texte}
          onMouseOver={() => onImageChange(item.image, item.texte)}
        />
      ))}
    </div>
  );
}

export default ImageWall;

