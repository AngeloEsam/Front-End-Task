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
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
              zIndex: 2,
            }}
          ></i>

          <i
            id="prev"
            className="fa-regular fa-circle-left"
            onClick={onPrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 2,
            }}
          ></i>

          <i
            id="next"
            className="fa-regular fa-circle-right"
            onClick={onNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 2,
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
