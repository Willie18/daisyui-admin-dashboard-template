import React from 'react'
import { FolderIcon } from '@heroicons/react/24/solid';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

type Props = {
  id:string
  caption:string
  timestamp:string
  fileUrl:string
  size:number
  users:string[]
  docType:string
}


const FileItem = ({ id, caption, docType, users, timestamp, fileUrl, size }:Props) => {

  const getReadableFileSizeString = (fileSizeInBytes:number) => {
    let i = -1;
    const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};


  return (
    <tr className='hover'>
      <td>
        <div className='flex flex-row items-center gap-1'>
        <a href={fileUrl}>
          <FolderIcon className='fill-primary h-6 w-6' />
          </a>
          <p>{caption}</p>
        </div>
      </td>
      <td>{docType}</td>
      <td>
        {users.map((user, idx) => (
          <p key={idx}>{user}</p>
        ))}
      </td>
      <td>{getReadableFileSizeString(size)}</td>
      <td>{timestamp}</td>
      <td>
        <EllipsisHorizontalIcon />
      </td>
    </tr>
  );
}

export default FileItem