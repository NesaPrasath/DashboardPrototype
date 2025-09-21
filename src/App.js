import { useEffect, useState } from 'react';
import './App.css';
import GridContainer from './Components/GridContainer';
import Menubar from './Components/Menubar';
import NameBadge from './Components/NameBadge';
import RightbarFrame from './Components/RightbarFrame';
import SidebarFrame from './Components/SidebarFrame';
import DashboardCard from './Components/DashboardCard';
import BlockElement from './Components/BlockElement';
import CurvyArrowUp from './Components/SVG/CurvyArrowUp';
import CurvyArrowDown from './Components/SVG/CurvyArrowDown';
import Folder from './Components/SVG/Folder';
import PieChart from './Components/SVG/PieChart';
import ShoppingBag from './Components/SVG/ShoppingBag';
import Book from './Components/SVG/Book';
import Profile from './Components/SVG/Profile';
import Account from './Components/SVG/Account';
import Social from './Components/SVG/Social';
import Blog from './Components/SVG/Blog';
import Chat from './Components/SVG/Chat';
import GridTable from './Components/GridTable';
import Progressbar from './Components/Progressbar';

function App() {

  const [page,setPage]=useState({name:"Dashboard",rightbar:true})

  const SideFramedata=[{header:'Favourites',sidebarelement:[{name:'Overview'},{name:'Projects'}]},{header:'Dashboard',sidebarelement:[{name:'Default',icon:<PieChart/>,handleclick:()=>{setPage(data=>({...data,name:'Order List'}))}},{name:'eCommerce',icon:<ShoppingBag/>,handleclick:()=>{setPage(data=>({...data,name:'Dashboard'}))}},
  {name:'Projects',icon:<Folder/>,subelement:[{name:'subelement1'}]},{name:'Online Course',icon:<Book/>,subelement:[{name:'subelement1'}]}
 ]},{header:'Pages',sidebarelement:[{name:'User Profile',icon:<Profile/>,subelement:[{name:'Overview'},{name:'Projects'},{name:'Campaigns'},{name:'Documents'},{name:'Followers'}]
},{name:'Account',icon:<Account/>,subelement:[{name:'subelement1'}]},{name:'Corporate',icon:<Social/>,subelement:[{name:'subelement1'}]},
{name:'Blog',icon:<Blog/>,subelement:[{name:'subelement1'}]},{name:'Social',icon:<Chat/>,subelement:[{name:'subelement1'}]}]}]

const GridData={headerelement:[{name:"Order ID",width:'10%'},{name:"User",width:'20%'},{name:"Project",width:'20%'},{name:"Address",width:'20%'},{name:"Date",width:'20%'},{name:"Status",width:'10%'}],
  bodyelement:[[<p>#CM9801</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/NataliCraig.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Natalia Cariag</p></div>,<p>Landing Page</p>,<p>Meadow Lane Oakland</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Just Now</p></div>,<li style={{color:'#8A8CD9'}}>In Progress</li>],
  [<p>#CM9802</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/KateMorrison.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Kate Morrison</p></div>,<p>CRM Admin pages</p>,<p>Larry San Francisco</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>A minute ago</p></div>,<li style={{color:'#4AA785'}}>Complete</li>],
  [<p>#CM9803</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/DrewCano.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Drew Cano</p></div>,<p>Client Project</p>,<p>Bagwell Avenue Ocala</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>1 hour ago</p></div>,<li style={{color:'#59A8D4'}}>Pending</li>],
  [<p>#CM9804</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/OrlandoDiggs.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Orlando Diggs</p></div>,<p>Admin Dashboard</p>,<p>Washburn Baton Rouge</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Yesterday</p></div>,<li style={{color:'#FFC555'}}>Approved</li>],
[<p>#CM9804</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/AndiLane.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Orlando Diggs</p></div>,<p>App Landing Page</p>,<p>Nest Lane Olivette</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Feb 2,2023</p></div>,<li style={{color:'#1C1C1C66'}}>Rejected</li>],
[<p>#CM9801</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/NataliCraig.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Natalia Cariag</p></div>,<p>Landing Page</p>,<p>Meadow Lane Oakland</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Just Now</p></div>,<li style={{color:'#8A8CD9'}}>In Progress</li>],
  [<p>#CM9802</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/KateMorrison.png' alt='pic'  width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Kate Morrison</p></div>,<p>CRM Admin pages</p>,<p>Larry San Francisco</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>A minute ago</p></div>,<li style={{color:'#4AA785'}}>Complete</li>],
  [<p>#CM9803</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/DrewCano.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Drew Cano</p></div>,<p>Client Project</p>,<p>Bagwell Avenue Ocala</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>1 hour ago</p></div>,<li style={{color:'#59A8D4'}}>Pending</li>],
  [<p>#CM9804</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/OrlandoDiggs.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Orlando Diggs</p></div>,<p>Admin Dashboard</p>,<p>Washburn Baton Rouge</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Yesterday</p></div>,<li style={{color:'#FFC555'}}>Approved</li>],
[<p>#CM9804</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section  style={{display:'inline',width:'24px',alignContent:'center'}}><img src='Gridpic/AndiLane.png' alt='pic' width={'20px'} height={'20px'}/></section><p style={{display:'inline'}}>Orlando Diggs</p></div>,<p>App Landing Page</p>,<p>Nest Lane Olivette</p>,<div style={{display:'inline-flex',justifyContent:'space-between'}}><section style={{display:'inline',width:'24px',alignContent:'center'}}><img alt='calendar-icon' src='Icon/CalendarIcon.png' width={'14px'} height={'14px'}/></section><p>Feb 2,2023</p></div>,<li style={{color:'#1C1C1C66'}}>Rejected</li>]]}

const BreadcrumbData={
  element:[{name:'Dashboard',value:''}],
  current:'Default'
}

const RightbarData=[{header:'Notification',element:[{icon:'Icon/BugBeetle.png',description:'You have a bug that needs...',time:'Just now'},
  {icon:'Icon/User.png',description:'New user registered',time:'59 minutes ago'},
{icon:'Icon/BugBeetle.png',description:'You have a bug that needs...',time:'12 hours ago'},
{icon:'Icon/Broadcast.png',description:'Andi Lane subscribed to you',time:'Today, 11:59 AM'}],notify:true,width:'20px',height:'20px'},{header:'Activities',element:[{icon:'Icon/3D05.png',description:'You have a bug that needs...',time:'Just now'},
  {icon:'Icon/Female05.png',description:'Released a new version',time:'59 minutes ago'},{icon:'Icon/3D08.png',description:'Submitted a bug',time:'12 hours ago'},
  {icon:'Icon/Male07.png',description:'Modified A data in Page X',time:'Today, 11:59 AM'},{icon:'Icon/Male11.png',description:'Deleted a page in Project X',time:'Feb 2, 2023'}
],notify:true,width:'20px',height:'20px'},{header:'Contacts',element:[{icon:'Gridpic/NataliCraig.png',description:'Natalia Cariag'},{icon:'Gridpic/DrewCano.png',description:'Drew Cano'}
  ,{icon:'Gridpic/OrlandoDiggs.png',description:'Orlando Diggs'},{icon:'Gridpic/AndiLane.png',description:'Andi Lane'},
  {icon:'Gridpic/KateMorrison.png',description:'Kate Morrison'},{icon:'Gridpic/KorayOkumus.png',description:'Koray Okumus'}
],width:'16px',height:'16px'}]

const CardData=[{name:'Customers',value:'3,781',value1:'+11.01%',icon:<CurvyArrowUp/>,background:'#E3F5FF',width:'50%'},{name:'Orders',value:'1,219',value1:'-0.03%',icon:<CurvyArrowDown/>,background:'#F7F9FB',width:'50%'},
  {name:'Revenue',value:'$695',value1:'+15.03%',icon:<CurvyArrowUp/>,background:'#F7F9FB',width:'50%'},{name:'Growth',value:'30.1%',value1:'+6.08%',icon:<CurvyArrowUp/>,background:'#E5ECF6',width:'50%'}]

// const Dashboarddata=[{}]
 const CardGrid={headerelement:[{name:"Name",width:'40%'},{name:"Price",width:'20%'},{name:"Quantity",width:'20%'},{name:"Amount",width:'20%'}],
bodyelement:[[<p>ASOS Ridley High Waist</p>,<p>$79.49</p>,<p>82</p>,<p>$6,518.18</p>],[<p>Marco Lightweight Shirt</p>,<p>$128.50</p>,<p>37</p>,<p>$4,754.50</p>]
,[<p>Half Sleeve  Shirt</p>,<p>$39.99</p>,<p>64</p>,<p>$2,559.36</p>],[<p>Lightweight Jacket</p>,<p>$20.00</p>,<p>184</p>,<p>$3,680.00</p>],
[<p>Marco Shoes</p>,<p>$79.49</p>,<p>64</p>,<p>$1,965.81</p>]]}
  // useEffect(()=>{
  //   setCardBlock(CardData.map(data=><DashboardCard name={data.name} value={data.value} value1={data.value1} icon={data.icon}/>))
  // },[])

  return (
    <div className="App">
      <div className='sidebar'>
        <div>
          <NameBadge name="ByeWind"/>
        </div>
        <div className='sidebarframes'>
          {SideFramedata.map(data=><SidebarFrame header={data.header} element={data.sidebarelement}/> )}
        </div>
      </div>
      <div className='maincontainer'>
        <div className={page.rightbar?'mainpage':'mainpage-slider'}>
          <Menubar breadcrumb={BreadcrumbData} handleSidebarClick={()=>{setPage(data=>({...data,rightbar:!data.rightbar}))}}></Menubar>
          <div className='main-content'>
            <h3 className='content-header'>{page.name=='Dashboard'?'eCommerce':'Order List'}</h3>
            {page.name=='Dashboard'?<div className="block-container">
              <div style={{display:'flex',gap:'16px'}}>
                <BlockElement className="mini-cardele" width='50%'>
                  {CardData.map(data=><DashboardCard name={data.name} value={data.value} value1={data.value1} icon={data.icon} width='140px' height='90px' background={data.background} className='minicard'/>)}
                </BlockElement>
                <BlockElement width='50%'>
                  <DashboardCard name='Projections vs Actuals'>
                    <div style={{width:'384px',height:'160px',padding:'16px 4px'}}>
                      <img src='Chartpic/BarChart.png' alt='chart'/>
                    </div>
                  </DashboardCard>
                </BlockElement>
              </div>
              <div style={{display:'flex',gap:'16px'}}>
                <DashboardCard name='Revenue' width='75%'>
                    <div style={{width:'100%',padding:'8px 0px'}}>
                      <img src='Chartpic/GraphChart.png' alt='chart' width={'100%'} height={'100%'}/>
                    </div>
                </DashboardCard>
                <DashboardCard name='Revenue by Location' width='25%'>
                    <div style={{width:'100%',height:'168px',alignContent:'start'}}>
                      <div style={{textAlign:'start'}}><img src='Chartpic/Map.png' alt='chart'/></div>
                      <div style={{width:'80%',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>New York</p>
                            <p>72K</p>
                          </div>
                          <div>
                            <Progressbar percentage='75%' colour='#A8C5DA'/>
                          </div>
                        </div>
                        <div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>San Francisco</p>
                            <p>39K</p>
                          </div>
                          <div>
                            <Progressbar percentage='45%' colour='#A8C5DA'/>
                          </div>
                        </div>
                        <div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>Sydney</p>
                            <p>25K</p>
                          </div>
                          <div>
                            <Progressbar percentage='55%' colour='#A8C5DA'/>
                          </div>
                        </div>
                        <div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>Singapore</p>
                            <p>61K</p>
                          </div>
                          <div>
                            <Progressbar percentage='60%' colour='#A8C5DA'/>
                          </div>
                        </div>
                      </div>
                    </div>
                </DashboardCard>
              </div>
              <div style={{display:'flex',gap:'16px'}}>
                <DashboardCard name='Top Selling Products' width='75%'>
                    <div style={{width:'100%'}}>
                      <GridTable heading={CardGrid.headerelement} elements={CardGrid.bodyelement} width={'100%'} height={'536px'}></GridTable>
                    </div>
                </DashboardCard>
                <DashboardCard name='Total Sales' width='25%'>
                    <div style={{width:'100%'}}>
                      <div><img src='Chartpic/PieChart.png' alt='chart' /></div>
                      <div style={{width:'80%',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <p><span style={{display:'inline-block',padding:'4px',borderRadius:'50%',backgroundColor:'#1C1C1C'}}></span><span style={{padding:'0px 4px'}}>Direct</span></p>
                          <p>$300.56</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <p><span style={{display:'inline-block',padding:'4px',borderRadius:'50%',backgroundColor:'#BAEDBD'}}></span><span style={{padding:'0px 4px'}}>Affilliate</span></p>
                          <p>$135.18</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <p><span style={{display:'inline-block',padding:'4px',borderRadius:'50%',backgroundColor:'#95A4FC'}}></span><span style={{padding:'0px 4px'}}>Sponsored</span></p>
                          <p>$154.02</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <p><span style={{display:'inline-block',padding:'4px',borderRadius:'50%',backgroundColor:'#B1E3FF'}}></span><span style={{padding:'0px 4px'}}>E-mail</span></p>
                          <p>$48.96</p>
                        </div>
                      </div>
                    </div>
                </DashboardCard>
              </div>
            </div>:<GridContainer GridHeaderElement={GridData.headerelement} GridBodyElement={GridData.bodyelement} checkbox='true'></GridContainer>}
          </div>
        </div>
        <div className={page.rightbar?'rightbar':'rightbar-slider'}>
          {RightbarData.map(data=><RightbarFrame header={data.header} element={data.element} notify={data.notify}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
