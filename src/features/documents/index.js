import React from 'react'
import { useEffect, useState } from 'react'
import TitleCard from '../../components/Cards/TitleCard'
import DocumentTable from './components/Table'
import ListTable from './components/ListTable'

const TopSideButtons = () => {

    // const dispatch = useDispatch()

    // const openAddNewLeadModal = () => {
    //     dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    // }
    return(
        <div className="inline-block float-right">
            {/* <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewLeadModal()}>Add New</button> */}
            <button className="btn px-6 btn-sm normal-case btn-primary">Actions</button>
        </div>
    )
}

function Documents () {
  const [data, setData] = useState([])
  useEffect(() => {
  const dummyData = [
    {
      "id": 1,
      "filename": "document1.pdf",
      "document_type": "PDF",
      "pages_count": 10,
      "date_uploaded":"2023-05-05",
      "tags": [
        { "name": "Business", "color": "bg-blue-500" },
        { "name": "Finance", "color": "bg-green-500" }
      ],
      "file_size": "2.5 MB",
      "extension": "pdf",
      "document_url":"#"
    },
    {
      "id": 2,
      "filename": "document2.docx",
      "document_type": "Word",
      "pages_count": 5,
      "date_uploaded":"2021-06-07",
      "tags": [
        { "name": "Education", "color": "bg-yellow-500" },
        { "name": "Research", "color": "bg-purple-500" }
      ],
      "file_size": "1.2 MB",
      "extension": "docx",
      "document_url":"#"
    },
    {
      "id": 3,
      "filename": "document3.png",
      "document_type": "Image",
      "pages_count": 1,
      "date_uploaded":"2018-07-03",
      "tags": [
        { "name": "Design", "color": "bg-pink-500" }
      ],
      "file_size": "400 KB",
      "extension": "png",
      "document_url":"#"
    },
    {
      "id": 1,
      "filename": "document1.pdf",
      "document_type": "PDF",
      "pages_count": 10,
      "date_uploaded":"2023-05-05",
      "tags": [
        { "name": "Business", "color": "bg-blue-500" },
        { "name": "Finance", "color": "bg-green-500" }
      ],
      "file_size": "2.5 MB",
      "extension": "pdf",
      "document_url":"#"
    },{
      "id": 1,
      "filename": "document1.pdf",
      "document_type": "PDF",
      "pages_count": 10,
      "date_uploaded":"2023-05-05",
      "tags": [
        { "name": "Business", "color": "bg-blue-500" },
        { "name": "Finance", "color": "bg-green-500" }
      ],
      "file_size": "2.5 MB",
      "extension": "pdf",
      "document_url":"#"
    },]

    setData(dummyData);
  }, [])

  return (
    <>
      <TitleCard title="Documents" topMargin="mt-2"  TopSideButtons={<TopSideButtons/>}>
          <ListTable documents={data}/>
      </TitleCard>
    </>

  )
}

export default  Documents
