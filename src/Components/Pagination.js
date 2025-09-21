export default function Pagination(props){

    return <div style={{float:"right"}} className="pagination">
        <button className="pagination-btn" style={{border:'none'}}>{"<"}</button>
        {props.element.map((data,index)=><button className="pagination-btn" value={data} style={{border:'none'}}>{data}</button>)}
        <button className="pagination-btn" style={{border:'none'}}>{">"}</button>
    </div>
};