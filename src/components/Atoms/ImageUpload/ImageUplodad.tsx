import React, { useState } from 'react';
import './ImageUplodad.css';

const ImageUpload = () => {
  const [selectedImagePreview, setSelectedImagePreview] = useState<string | null>(null);

  const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        id="file-input"
        className="file-input"
        onChange={onFileSelected}
        multiple
      />
      <label htmlFor="file-input" className="file-label">
        {selectedImagePreview ? (
          <img src={selectedImagePreview} alt="Imagen seleccionada" className="image-preview" />
        ) : (
          <span>+</span>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
