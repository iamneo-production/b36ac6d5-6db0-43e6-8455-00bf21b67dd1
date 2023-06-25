import "./list.css"

import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return (
    <div style={{marginLeft:"200px"}}>
    <div className="list" style={{marignLeft:'50px'}}>
    
      <div className="listContainer" style={{marignLeft:'100px'}}>
     
        <Datatable/>
      </div>
    </div>
    </div>
  )
}

export default List