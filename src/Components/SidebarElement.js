import { useState } from "react";
import SidebarButton from "./SidebarButton";

export default function SidebarElement(props){

    const [shwSubElement,setShwSubElement]=useState(false);

    return <div className="sidebarelement" onClick={props.handleClick}>
        <SidebarButton icon={props.icon} name={props.name} showArrow={props.subelement?true:false} handleClick={()=>{setShwSubElement(prev=>!prev)}}></SidebarButton>
        {props.subelement&&shwSubElement&&props.subelement.map(data=><SidebarButton key={data.name} name={data.name} showArrow={false} subelement={true}/>)}
    </div>
};