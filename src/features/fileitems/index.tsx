import React, { useEffect, useState } from "react";
import FileItem from "./components/FileItem";

interface FileProp {
  id: string;
  caption: string;
  timestamp: string;
  fileUrl: string;
  size: number;
  users: string[];
  docType: string;
}

const FileExplorer = () => {
  const [data, setData] = useState<FileProp[]>([]);

  useEffect(() => {
    let files: FileProp[] = [];
    for (let i = 0; i < 50; i++) {
      files.push({
        id: "id",
        caption: "caption",
        timestamp: "timestamp",
        fileUrl: "url",
        size: 10,
        users: ["users"],
        docType: "doctype",
      });
    }

    setData(files);
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th>Name</th>
            <th>Document type</th>
            <th>Sharing</th>
            <th>Size</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, idx) => (
            <FileItem key={idx} {...file} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileExplorer;
