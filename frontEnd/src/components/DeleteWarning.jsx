import React from 'react';

const DeleteWarning = ({ setShowWarning }) => {
  return (
    <div className="flex justify-center items-center">
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-10">
          <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded">
            <p>Are you sure you want to delete this item?</p>
            <div className="mt-4 flex justify-center">
              <button
                // onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-4 rounded"
              >
                Yes, delete
              </button>
              <button
                onClick={() => setShowWarning(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default DeleteWarning;
