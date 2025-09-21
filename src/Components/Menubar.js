import Breadcrumb from "./Breadcrumb";
import CustomButton from "./CustomButton";
import BellIcon from "./SVG/BellIcon";
import Favourites from "./SVG/Favourites";
import LightIcon from "./SVG/LightIcon";
import SideBar from "./SVG/SideBar";
import TimerIcon from "./SVG/TimerIcon";

export default function Menubar(props){

    return <div className="menubar">
        <div className="menubar-frame">
            <CustomButton Icon={<SideBar/>}/>
            <CustomButton Icon={<Favourites/>}/>
            {/* <CustomButton icon='Icon/sidebaricon.png'/>
            <div><img src='Icon/sidebaricon.png' alt='icon'/></div>
            <div><img src='Icon/staricon.png' alt='fav-icon'/></div> */}
            <Breadcrumb element={props.breadcrumb.element} current={props.breadcrumb.current}></Breadcrumb>
        </div>
        <div className="menubar-frame">
            <CustomButton Icon={<LightIcon/>}/>
            <CustomButton Icon={<TimerIcon/>}/>
            <CustomButton Icon={<BellIcon/>}/>
            <CustomButton Icon={<SideBar/>} handleClick={props.handleSidebarClick}/>
            {/* <div><img src='Icon/lighticon.png' alt='icon'/></div>
            <div><img src='Icon/clockicon.png' alt='icon'/></div>
            <div><img src='Icon/bellicon.png' alt='icon'/></div>
            <div><img src='Icon/sidebaricon.png' alt='icon'/></div> */}
        </div>
    </div>
};