import { useState } from 'react'


import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, Router, useNavigate } from 'react-router-dom'


const Search = () => {
     
    
       
        const [date, setDate] = useState('');
        const [source, setSource] = useState('');
        const [destination, setDestination] = useState('');

        
        const navigate = useNavigate()
        


      
    const SearchBus = () => {
        if(source.length === 0){
            toast.warning('please Enter the source')
        }else if(destination.length === 0){
            toast.warning('please enter the destination')
        }else if(date.length === 0){
            toast.warning('please enter the date')
        }else{
            const body = {
                date,
                source,
                destination,
            }

            const url = `http://localhost:8080/bus/search`
           
            //post method of signup API
            axios.post(url, body).then(response => {
                const result = response.data
                console.log(result)
                 if(result['status'] == 'success') {
                    toast.success('Search success')
                    //navigate to the signin page
                   navigate('/allavailablebuses')
                    
                    
                 }else{
                    toast.error(result['error'])
                }
                
            })
        }
    }
    
    return(
        
            
            <div className="background">
                <div className="p">
            <h1>Search Buses Here</h1></div>
      <div className="form">
      <div className="row">
        <div className="col"></div>
        <div className="col">
       

           <div >

          <label htmlFor="" className="label-control" > 
              Source
          </label>
          <input onChange = {(e) => {
                       
                       setSource(e.target.value)
                    }}  type="text" placeholder="Source" className="form-control"/>
        </div>
      
    
       
      <div>
          
         <label htmlFor="" className="label-control" >
            destination
         </label>
       <input onChange = {(e) => {
                       
                       setDestination(e.target.value)
                    }}  type="text" placeholder="Destination"  className="form-control"/>
       </div>
    
       <div>
          
          <label htmlFor="" className="label-control" >
             date
          </label>
        <input onChange = {(e) => {
                        
                        setDate(e.target.value)
                     }}  type="text" placeholder="date"  className="form-control"/>
        </div>
                  <div className="sear">
                  <button onClick={SearchBus} className="btn btn-info">Search Bus</button>
                  </div>
                  
                 
        </div>
        </div>
        <div className="col"></div>
     </div>
    </div>


    )
}
export default Search
