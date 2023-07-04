import React from 'react'

const DocumentCard = ({ prop }) => {
  return (
    <div className="card w-60 bg-gray-100 shadow-xl">
      <div className="card-header flex flex-row">
        <input type="checkbox" checked className="checkbox" />
        <div>
          <a href={prop.document_url}>{prop.filename}</a>
        </div>
      </div>
      <figure>
        <img src={prop.image_url} alt={prop.filename} />
      </figure>
      <div className="card-actions">
        {prop.tags.map((tag, idx) => (
          <div key={idx} className={"badge badge-md " + tag.color}>
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
};


export default DocumentCard