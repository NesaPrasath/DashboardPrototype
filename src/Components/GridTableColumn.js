export default function GridTableColumn(props){

    return <>{props.heading?<th style={{textAlign:'start',alignContent:'center'}} width={props.width}>{props.element}</th>:<td style={{textAlign:'start',alignContent:'center'}}>
        {props.element}
    </td>}</>
};