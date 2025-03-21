import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log('Arquivos aceitos:', acceptedFiles);
    },
    multiple: true,
    accept: '.jpg,.png,.pdf',
  });

  return (
    <div>
      <h2>Arraste e Solte seus Arquivos</h2>
      <div {...getRootProps()} style={{ border: '2px dashed #007bff',
         padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Arraste arquivos para cá ou clique para selecionar</p>
      </div>
    </div>
  );
};

export default FileUpload;




