import React, { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import LightBox from "./components/LightBox";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "images/unsplash1.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "images/unsplash2.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "images/unsplash3.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "images/unsplash4.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "images/unsplash5.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "images/unsplash6.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        handleClose();
      }
    };

    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="App">
      <div className="container mt-5">
        <Gallery images={images} onImageClick={handleImageClick} />
      </div>
      {selectedImage !== null && (
        <LightBox
          image={images[selectedImage]}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}

export default App;
