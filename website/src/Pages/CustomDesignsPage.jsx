import React, { useState } from "react";

function CustomDesignsPage() {
  const [design, setDesign] = useState({
    baseImage: "",
    customText: "",
    color: "#000000",
  });

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setDesign({
        ...design,
        baseImage: reader.result,
      });
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTextChange = (e) => {
    setDesign({
      ...design,
      customText: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    setDesign({
      ...design,
      color: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Create Your Custom Keychain</h1>

      {/* Customization Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-6">
            <label htmlFor="image" className="block text-lg font-semibold text-white mb-2">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="customText" className="block text-lg font-semibold text-white mb-2">
              Add Custom Text
            </label>
            <input
              type="text"
              id="customText"
              value={design.customText}
              onChange={handleTextChange}
              placeholder="Enter your text"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="color" className="block text-lg font-semibold text-white mb-2">
              Select Color
            </label>
            <input
              type="color"
              id="color"
              value={design.color}
              onChange={handleColorChange}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition"
            >
              Save Your Design
            </button>
          </div>
        </form>
      </div>

      {/* Preview Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Your Custom Design Preview</h2>
        <div className="flex justify-center">
          <div
            className="w-48 h-48 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${design.baseImage})`,
              backgroundColor: design.color,
            }}
          >
            {/* {design.customText && (
              <p
                className="absolute bottom-2 left-2 text-white text-lg font-bold"
                style={{ color: "#fff" }}
              >
                {design.customText}
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDesignsPage;
