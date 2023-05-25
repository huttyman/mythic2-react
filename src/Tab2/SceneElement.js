import React from 'react';

const SceneElement = ({ sceneNumber, textareaContent, onChange }) => {
    const handleTextAreaChange = (event) => {
      onChange(sceneNumber, event.target.value);
    };
  
    return (
      <div className="flex bg-slate-100">
        {/* Left Section */}
        <div className="w-max max-w-20  p-4 ">
          <div className="flex items-center justify-center aspect-square">
            <div className="text-center">
              <h2 className="text-lg  font-bold mb-2">Scene</h2>
              <h2 className="text-xl font-bold">{sceneNumber}</h2>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-4/5 p-4">
          <textarea 
          className="w-full h-40 border border-black resize-none"
          onChange={handleTextAreaChange}>{textareaContent}</textarea>
        </div>
      </div>
    );
  };

export default SceneElement;
