import { Children } from "react";

export default function BlockElement(props){

    return <div style={{width:props.width}} className={props.className}>
        {props.children}
    </div>
};