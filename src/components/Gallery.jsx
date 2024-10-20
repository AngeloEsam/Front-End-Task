import React from "react";

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
          <div className="item" onClick={() => onImageClick(index)}>
            <img className="w-100 img-item" src={image.src} alt={image.title} />
            <div className="item-caption">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
