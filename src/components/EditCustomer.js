import {useState,useEffect} from 'react'

const EditCustomer= ({onEdit})=>{
    const[id,setId]=useState('setId')
    const[text,setText]=useState('setText')
    const[location,setLocation]=useState('setLocation')

    
    const onEdit=(e)=>{
        e.preventDefault()
        if(!id){
            alert('Please give the customer details')
            return
        }
        //onAdd({id,text,location})
        //setId('')
        //setText('')
        //setLocation('')
    }

    return(
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>CustomerId</label>
            <input type='text' placeholder='CustomerId' value={id} onChange={(e)=>{setId(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>CustomerName</label>
            <input type='text' placeholder='CustomerName' value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type='text' placeholder='Location'value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
        </div> 
        <input type='submit' value='SAVE' className='btn btn-block'/>
    </form>
    )
}

export default EditCustomer