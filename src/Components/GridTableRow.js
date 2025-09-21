import { useState } from "react";
import GridTableColumn from "./GridTableColumn";

export default function GridTableRow(props){

    const [checkbox,setCheckbox]=useState({show:props.checkbox,status:props.checked})

    return <tr className="gridrow">
        {props.checkbox&&<td style={{textAlign:'start',alignContent:'center'}}><input type="checkbox" checked={checkbox.status||props.checkall} onChange={e=>setCheckbox(prev=>({...prev,status:!prev.status}))} value={props.key}/></td>}{props.element.map(data=><GridTableColumn element={data}/>)}
    </tr>
}