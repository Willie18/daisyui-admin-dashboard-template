import React from 'react'
import DocumentCard from './DocumentCard'

const ListTable = ({ documents }) => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full">
      {documents.map((prop) => (
        <div key={prop.id} className="col-span-1">
          <DocumentCard prop={prop} />
        </div>
      ))}
    </div>
  );
};


export default ListTable