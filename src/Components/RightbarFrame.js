export default function RightbarFrame(props){

    return <div className="rightbar-frame">
        <div><h2 className="frameheader">{props.header}</h2></div>
        <div>
            {props.notify&&props.element.map(data=><div style={{display:'flex',padding:'8px',gap:'8px'}}><section style={{alignContent:'center'}}><img alt='icon' width={props.width} height={props.height} src={data.icon}/></section><section><p>{data.description}</p><p style={{color:'#1C1C1C66',fontSize:'12px'}}>{data.time}</p></section></div>)}
            {!props.notify&&props.element.map(data=><div style={{display:'flex',padding:'8px',gap:'8px'}}><section><img alt='icon' src={data.icon}/></section><section>{data.description}</section></div>)}
        </div>
    </div>
};