import React from 'react';

const ClearLocalStorageButton = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert('Local storage cleared!');

    window.location.reload();
  };

  return (
    <div className="my-4">
      <button
        onClick={handleClearLocalStorage}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Clear Local Storage
      </button>
    </div>
  );
};

export default ClearLocalStorageButton;
