import React, {useState} from 'react';
import './Upload.css';
function Upload(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [{src,alt}, setFile] = useState({
      src: null,
      alt: 'Upload an Image'
  });

    const onFileChange = e => {
        setSelectedFile(e.target.files[0]); 
        setFile({
          src: URL.createObjectURL(e.target.files[0]),
          alt: e.target.files[0].name
         })
      };

    const onFileUpload = (e) => {
      if(selectedFile != null)
      {
           setSelectedFile(["myFile", selectedFile, selectedFile.name]);
      }
      else
      {
          alert("Please choose a file");
      }
    }

    // Details of the uploaded file
    console.log(selectedFile);

    const fileData = () => {
        if(selectedFile != null){
            return (
                <div>
                  <h4>File Uploaded</h4>
                  <div className="box-preview">
                  <img src={src} alt={alt}></img>
                    </div>  
                </div>
                );
        }
        else {
            return (
              <div>
                <div className="box-preview">
                  <h4>Choose before Pressing the Upload button</h4>
                </div>
              </div>  
            );
        }
    }

    return (
        <div  class="upload-component">
            <h1>
            Please Upload a File
            </h1>
            <div className="uploading">
                <input type="file" accept="image/*" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                  Upload
                </button>
            </div>
            {fileData()}
        </div>
    );
}


export default Upload