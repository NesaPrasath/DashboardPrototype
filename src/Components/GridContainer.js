import CustomButton from "./CustomButton";
import GridTable from "./GridTable";
import Pagination from "./Pagination";
import Searchbar from "./Searchbar";
import Add from "./SVG/Add";
import Filter from "./SVG/Filter";
import OrderArrow from "./SVG/OrderArrow";

export default function GridContainer(props){

    return <div className="gridcontainer">
        <div style={{display:'flex',justifyContent:'space-between'}} className="gridheader">
            <div>
                <CustomButton Icon={<Add/>} gap={'4px'}/>
                <CustomButton Icon={<Filter/>} gap={'4px'}/>
                <CustomButton Icon={<OrderArrow/>} gap={'4px'}/>
            </div>
            <div>
                {/* <CustomButton name="search"/> */}
                <Searchbar/>
            </div>
        </div>
        <GridTable heading={props.GridHeaderElement} elements={props.GridBodyElement} width={'100%'} height={'536px'} checkbox={props.checkbox}/>
        <div><Pagination element={[1,2,3,4]}/></div>
    </div>
};