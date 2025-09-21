import BlockElement from "./BlockElement";

export default function BlockContainer(props){

    return <div className="block-container">
        {props.element&&props.element.map(data=><div style={{display:'flex',gap:'16px'}}><BlockElement element={data.element}/></div>)}
    </div>
};