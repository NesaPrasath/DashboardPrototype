export default function Progressbar(props){

    return <div className="progressbar">
        <div className="progress-span" style={{height:'100%',borderRadius:'8px',width:props.percentage,backgroundColor:props.colour}}></div>
    </div>
};