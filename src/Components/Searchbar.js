export default function Searchbar(props){

    return <div className="searchbar">
        <button className="searchicon"><img alt='icon' src="Icon/Search.png" width={'20px'} height={'20px'}/></button>
        <input type="text" disabled={props.disabled} readOnly={props.readOnly} style={{border:'none',backgroundColor:'transparent',height:'100%',display:'inline-block',fontSize:'12px'}} placeholder="Search"/>
    </div>
};