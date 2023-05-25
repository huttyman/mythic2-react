import React, { useState, useEffect } from 'react';
import SceneElement from './SceneElement';

const AdventureList = () => {
  const [sceneNumber, setSceneNumber] = useState(1);
  const [sceneElements, setSceneElements] = useState([]);

  useEffect(() => {
    const savedSceneElements = localStorage.getItem('sceneElements');
    if (savedSceneElements) {
      setSceneElements(JSON.parse(savedSceneElements));
    }

    const savedSceneNumber = localStorage.getItem('sceneNumber');
    if (savedSceneNumber) {
      setSceneNumber(parseInt(savedSceneNumber));
    }
  }, []);

  useEffect(() => {
    if (sceneElements.length === 0) 
        return;

    localStorage.setItem('sceneElements', JSON.stringify(sceneElements));
    localStorage.setItem('sceneNumber', sceneNumber.toString());
  }, [sceneElements,sceneNumber]);

  const handleAddScene = () => {
    setSceneElements((prevSceneElements) => [
      ...prevSceneElements,
      { sceneNumber, textareaContent: '' },
    ]);
    setSceneNumber((prevSceneNumber) => prevSceneNumber + 1);
  };

  const handleTextAreaChange = (sceneNumber, textareaContent) => {
    setSceneElements((prevSceneElements) =>
      prevSceneElements.map((sceneElement) =>
        sceneElement.sceneNumber === sceneNumber
          ? { ...sceneElement, textareaContent }
          : sceneElement
      )
    );
  };

  return (
    <div>
      
      <h2 className="text-xl font-bold mb-4">ADEVENTURE LIST</h2>

      <button
        className="bg-green-500 text-white px-2 py-1 rounded text-sm"
        onClick={handleAddScene}
      >
        Add Scene
      </button>

      {sceneElements.map((sceneElement) => (
        <SceneElement
          key={sceneElement.sceneNumber}
          sceneNumber={sceneElement.sceneNumber}
          textareaContent={sceneElement.textareaContent}
          onChange={handleTextAreaChange}
        />
      ))}
    </div>
  );
};

export default AdventureList;
