import React from "react";

const LightBox = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="lightBox" onClick={onClose}>
      <div className="lightBox-item" onClick={(e) => e.stopPropagation()}>
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "relative",
          }}
        >
          <i
            id="close"
            className="fa-regular fa-circle-xmark"
            onClick={onClose}
          ></i>

          <i
            id="prev"
            className="fa-regular fa-circle-left"
            onClick={onPrev}
          ></i>

          <i
            id="next"
            className="fa-regular fa-circle-right"
            onClick={onNext}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
