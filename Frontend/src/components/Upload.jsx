import React, { useState } from 'react';
import axios from 'axios';
import '../asset/CreateForm.css'

function Upload() {


  // const handleChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await axios.post('/upload', formData);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  
 const [file, setFile] = useState(null);

 const handleFileInputChange = (event) => {
   setFile(event.target.files[0]);
 };

 const handleFileUpload = () => { 
   const formData = new FormData();
   formData.append('file', file);

   fetch('http://localhost:8070/upload', {  
     method: 'POST',
     body: formData,
   })
     .then((response) => response.text())
     .then((result) => console.log(result))
     .catch((error) => console.log(error));
 };



  return (
   <div>
   <h2><center>Upload evidence</center></h2> 
      <input type="file" onChange={handleFileInputChange} className='file'/>
      <button onClick={handleFileUpload}>Upload</button>
    </div>

    

  );
}

export default Upload;
