import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


const CustomerDetail = ({customerdetail,onDelete,onEdit})=>{
    return(
        <div className='customerdetail'>
            <h4>{customerdetail.id}</h4>
            <h4>{customerdetail.text}</h4>
            <h4>{customerdetail.location}</h4>
            <AiFillDelete style={{color:'red'}} 
            onClick={()=>onDelete(customerdetail.id)}/>
            <AiFillEdit style={{color:'blue'}} onClick={()=>onEdit(customerdetail.id)}/>
        </div>
    )
}

export default CustomerDetail