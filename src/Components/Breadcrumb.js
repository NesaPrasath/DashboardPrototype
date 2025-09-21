import CustomButton from "./CustomButton";

export default function Breadcrumb(props){

    return <div className="breadcrum">
        {props.element&&props.element.map(data=><p><CustomButton className="breadcrum-btn" name={data.name} value={data.value}/><span style={{color:'#1C1C1C66',padding:'0px 2px'}}>/</span></p>)}
        <p style={{padding:'6px'}}>{props.current}</p>
    </div>
};