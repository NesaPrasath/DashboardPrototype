
export default function BlockElement(props){

    return <div style={{width:props.width}} className={props.className}>
        {props.children}
    </div>
};