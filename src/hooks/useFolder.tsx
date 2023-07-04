import React, { useEffect } from "react";

type Props = {};

const ACTIONS = {
  SELECT_FOLDER: "SELECT_FOLDER",
};

const inital_state = {
    folderId:null,
    folder:null
}

type Action = {
    type:string,
    payload:{
        folderId:string
        folder:string
    }
}

function reducer(state=inital_state, action:Action){
    switch (action.type){
        case ACTIONS.SELECT_FOLDER:
            return {
                ...state,
                folderId:action.payload.folderId,
                folder:action.payload.folderId,
            }
        default:
            return state
    }
}




function UseFolder(folderId=null, folder=null) {

    useEffect(() => {
    

    }, )

  return <div>UseFolder</div>;
}

export default UseFolder;
