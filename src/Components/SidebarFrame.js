import SidebarElement from "./SidebarElement";

export default function SidebarFrame(props){

    return <div>
        <h3 className="sidebarheader">{props.header}</h3>
        <div>
            {props.element&&props.element.map(data=><SidebarElement icon={data.icon} name={data.name} subelement={data.subelement} handleClick={data.handleclick}/>)}
        </div>
    </div>
};