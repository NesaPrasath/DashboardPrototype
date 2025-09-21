export default function SidebarButton(props){

    return <div onClick={props.handleClick} className="sidebar-button">
            {(props.icon||props.subelement)&&<div className="" style={{margin:'0px'}}><div className="inline-block" style={{width:"16px",height:"16px"}}>{props.showArrow&&<img src="Icon/ArrowLineDown.png" alt="arr-icon" width={"16px"} height={"16px"}/>}
            </div><div className="inline-block" style={{width:"25px",height:"20px"}}>{props.icon&&<span width={"25px"} height={"16px"}>{props.icon}</span>}</div></div>}
            <div className="" style={{height:'100%'}}><p>{props.name}</p></div>
            </div>
};