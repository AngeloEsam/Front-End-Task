
import React from "react";

const LightBox = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="lightBox" onClick={onClose}>
      <div className="lightBox-item" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <i id="close" className="fa-regular fa-circle-xmark" onClick={onClose}></i>
          <i id="prev" className="fa-regular fa-circle-left" onClick={onPrev}></i>
          <i id="next" className="fa-regular fa-circle-right" onClick={onNext}></i>

          <div
            className="image"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
