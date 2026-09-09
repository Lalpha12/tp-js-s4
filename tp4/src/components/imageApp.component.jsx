import '../assets/style/murImages.css';
import { useState } from 'react';
import dataImages from "../data/dataImages.js"
import ImageWall from "./imageWall.component.jsx";
import ImageDetails from "./imageDetails.component.jsx";

const ImageApp = () => {
  const [filterText, setFilterText] = useState('');

  const [image, setImage] = useState("../images/image5.jpg");
  const [texte, setTexte] = useState("la plus belle....");

  const imageChanged = (newImage, newTexte) => {
    setImage(newImage);
    setTexte(newTexte);
  }
  

  return (
    <div>
      <ImageWall images={dataImages} onImageChange={imageChanged} filterText={filterText} />
      <ImageDetails image={image} texte={texte} filterText={filterText} setFilterText={setFilterText} />
    </div>
  );

    setImage(newImage);
    setTexte(newTexte);

  return (
    <div>
      <ImageWall images={dataImages} onImageChange={imageChanged} filterText={filterText} />
      <ImageDetails image={image} texte={texte} filterText={filterText} setFilterText={setFilterText} />
    </div>
  );
}
export default ImageApp
