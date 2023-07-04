import React from "react"
import Subtitle from "../Typography/Subtitle"

interface TitleCardProps {
  title?:String;
  children?:React.ReactNode;
  topMargin?:String;
  TopSideButtons?:React.ReactNode;
  bottomPadding?:string
}

  function TitleCard({title, children, topMargin, TopSideButtons, bottomPadding}:TitleCardProps){
      return(
          <div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>

            {/* Title for Card */}
              <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
                {title}

                {/* Top side button, show only if present */}
                {
                    TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div>
                }
              </Subtitle>
              
              <div className="divider mt-2"></div>
          
              {/** Card Body */}
              <div className={'h-full w-full bg-base-100 ' + (bottomPadding || "pb-6")}>
                  {children}
              </div>
          </div>
          
      )
  }
  
  
  export default TitleCard