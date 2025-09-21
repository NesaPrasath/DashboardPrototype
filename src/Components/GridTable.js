import { useState } from "react";
import GridTableColumn from "./GridTableColumn";
import GridTableRow from "./GridTableRow";

export default function GridTable(props){

    const [checkall,setCheckall]=useState(false)
    
    return <table width={props.width}><thead>
        <tr className="gridrow">{props.checkbox&&<th><input type="checkbox" onChange={e=>setCheckall(prev=>e.target.checked)} value={"All"}/></th>}{props.heading.length>0&&props.heading.map((data,ind)=><GridTableColumn key={ind} heading={true} element={data.name} width={data.width}/>)}</tr>
        </thead><tbody>
        {props.elements?.length>0?props.elements.map((data,ind)=><GridTableRow key={ind} element={data} checkbox={props.checkbox} checked={false} checkall={checkall}/>):"no Record found"}
    </tbody>
    </table>
};