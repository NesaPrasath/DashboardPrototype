import { Children } from "react";
import CurvyArrowUp from "./SVG/CurvyArrowUp";

export default function DashboardCard(props){

    return <div className={props.className?"dashcard "+props.className:"dashcard"} style={{backgroundColor:props.background,width:props.width,height:props.height,flex:props.flex}}>
        <h3 style={{textAlign:'start'}}>{props.name}</h3>
        {!props.value?props.children:<div style={{display:'flex',justifyContent:'space-between'}}><h2>{props.value}</h2><section style={{alignContent:'center'}}><span style={{padding:'4px'}}>{props.value1}</span><span width={'16px'} height={'16px'}>{props.icon}</span></section></div>}
    </div>
};