
export default function NameBadge(props){

    return <div className="prof-badge">
        <div className="prof-pic">
            <img alt="prof-pic" src="profpic.png" width={'20px'} height={'20px'}/>
        </div>
        <span style={{alignContent:'center'}}>{props.name}</span>
    </div>
}