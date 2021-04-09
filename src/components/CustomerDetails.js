import CustomerDetail from './CustomerDetail'

const CustomerDetails =({customerdetails,onDelete,onEdit})=>{
    
    return(
        <>
        {customerdetails.map((customerdetail)=>(
            <CustomerDetail key={customerdetail.id} customerdetail={customerdetail} onDelete={onDelete} onEdit={onEdit}/>
        ))}
        </>

    )
}

export default CustomerDetails