import Header from './components/Header'
import CustomerDetails from './components/CustomerDetails'
import {useState,useEffect} from 'react'
import AddCustomer from './components/AddCustomer'
function App() {

  useEffect(()=>{
    const getCustomerDetail = async()=>{
      const customerdetails=await fetchCustomerDetail()
      setCustomerDetails(customerdetails)
    }
    getCustomerDetail()
  })
  //fetch details
  const fetchCustomerDetail = async()=>{
    const res =await fetch('http://localhost:5000/customerdetails')
    const data =await res.json()
    return data
  }
  //delete
  const deleteCustomerDetail=async(id)=>{
    await fetch(`http://localhost:5000/customerdetails/${id}`,{
      method:'DELETE'
    })
    setCustomerDetails(customerdetails.filter((customerdetail)=> customerdetail.id!==id))
  }
  
  //ADD

  const addCustomerDetail = async(customerdetail)=>{
    const res = await fetch('http://localhost:5000/customerdetails',{
      method:'POST',
      headers:{
       'Content-type':'application/json',
      },
      body:JSON.stringify(customerdetail)
    })
    const data= await res.json()
    setCustomerDetails([...customerdetails,data])
  }
  
  
  const [showAddCustomerDetail,setShowAddCustomerDetail]=useState(false)
  const [customerdetails,setCustomerDetails]=useState([])
  return (
    <div className="container">
      <Header title='Customer Form' onAdd={()=>setShowAddCustomerDetail(!showAddCustomerDetail)} showAdd={showAddCustomerDetail}/>
      {showAddCustomerDetail && <AddCustomer onAdd={addCustomerDetail}/>}
      {customerdetails.length>0 ? <CustomerDetails customerdetails={customerdetails} onDelete={deleteCustomerDetail} /> :
      'No Customer Info!!'}
      
    </div>
  );
}

export default App;