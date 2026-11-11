import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex w-full flex-col gap-4 lg:w-1/2">
      {/* Main Image */}
      <div className="overflow-hidden rounded-lg border">
        <img
          src={selectedImage}
          alt="Product"
          className="h-125 w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`h-20 w-20 overflow-hidden rounded-md border ${
              selectedImage === image
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;