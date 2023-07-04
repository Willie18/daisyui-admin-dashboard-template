import React from 'react'
import FileTypeIcon from './FileIcon'
import {TrashIcon}  from '@heroicons/react/24/solid';
import {EllipsisVerticalIcon} from '@heroicons/react/24/solid';
import {ShareIcon} from '@heroicons/react/24/solid';


const DocumentTable = ({ documents }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>File Name</th>
            <th>Type</th>
            <th>Tags</th>
            <th>Date Created</th>
            <th>Assigned To</th>
            <th>Pages</th>
            <th>File Size</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <FileTypeIcon filename={doc.filename} />
                    </div>
                  </div>
                  <div>
                    <div className='flex'>
                      <div className="font-bold">{doc.filename.split('.')[0]}</div>
                      <span className='font-light'>{'.' + doc.filename.split('.')[1]}</span>
                    </div>
                    <div className='font-light text-sm'>
                        {'Uploaded '+ doc.date_uploaded}
                    </div>
                  </div>
                </div>
              </td>
              <td>{doc.document_type}</td>
              <td className="flex-auto">
                <div className="flex flex-row">
                  {doc.tags.map((tag, idx) => (
                    <span key={idx} className={'badge ' + tag.color}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                <br />
              </td>
              <td>{doc.date_created}</td>
              <td>{doc.assigned_to}</td>
              <td>{doc.pages_count}</td>
              <td>{doc.file_size}</td>
              <td className='flex justify-end space-x-2'>
                <div><ShareIcon className='h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700'/></div>
                <div><TrashIcon className='h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700' /></div>
                <div><EllipsisVerticalIcon className='h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700'/></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  

export default DocumentTable