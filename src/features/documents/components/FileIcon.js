import React from 'react'
import { FileIcon, defaultStyles } from 'react-file-icon'

const FileTypeIcon = ({filename}) => {
  const getExtension = (filename) => {
    return filename.split(".").pop()
  }

  let extension = getExtension(filename)
  const style = defaultStyles[extension]
  return (
    <FileIcon extension={extension} {...style} />
  )
}

export default FileTypeIcon