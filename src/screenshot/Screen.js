import React, { useState, useRef } from 'react';
import './screenshot.css';


function Screenshot() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input
    const file = e.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    // Trigger click event on the hidden file input
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    // You can implement your file upload logic here
    // For example, you can use the Fetch API or an external library to upload the file
    console.log('Uploading file:', selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit action, such as file upload
    handleUpload();
  };

  return ( 
    <div className='bg'>
      <div className="box">
        <div className="text-wrapper">ICONIC</div>
        
        <img className='centerimg' src={require('./Cut.png')} alt="" />
        <div className='upload-container'>
          <form onSubmit={handleSubmit}>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className='file-input'
              style={{ display: 'none' }}
            />
            
            {/* Button to trigger file input click */}
            <button className='upbtn' onClick={handleButtonClick}>
              <label className='upname'>
              <img className='' src={require('./Upload.png')} alt="" />
                {selectedFile ? selectedFile.name : ' Upload Screenshot'}
              </label>
            </button>

            {/* Submit button inside the form, conditionally rendered */}
            {selectedFile && (
              <button type="submit" className='submit-btn fa fa-search'></button>
            )}
          </form> 
        </div>
        <div className='textp'>
          PEOPLE ARE SEARCHING
        </div>
        <div className='row main'>
          <div className='col-3 '>
          <div className='bgbox'><img className='inimg' src={require('./first.png')} alt="" /></div>
          </div>

          <div className='col-3'>
          <div className='bgbox'><img className='inimg' src={require('./first.png')} alt="" /></div>
          </div>

          <div className='col-3'>
          <div className='bgbox'><img className='inimg' src={require('./third.png')} alt="" /></div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Screenshot;

