export default function CustomButton(props){

    return <button className={props.className} style={{border:'none',gap:props.gap,height:'28px',padding:'8px'}} onClick={props.handleClick}>
        {props.Icon?<span alt="btn-icon" width={'16px'} height={'16px'}>{props.Icon}</span>:<span>{props.name}</span>}</button>
};