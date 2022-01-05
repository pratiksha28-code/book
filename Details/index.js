import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../../common/constants'
import HorizontalSlider from '../../comps/HorizontalSlider'

const AllBuses = () => {
  const [bus, setBus] = useState([])
  
useEffect(() => {
    getBus()
   
  }, [])

  

  const getBus = () => {
    // send the GET request
    axios.get(url + '/bus').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setBus(
          result.data.map((bus) => {
            return {
              ...bus,
                title: `${bus.busNo} ${bus.source} ${bus.destination} ${bus.time}&
                 ${bus.date} ${bus.amount} `,
            }
          })
        )
      } else {
        alert('error occured while getting all artists')
      }
    })
  }

  

  

  return (
    <div>
      <h2 className="page-title">Details</h2>

      <HorizontalSlider
        onItemSelect={getBus}
        items={bus}
        title="Available Bus"
      />
     
    </div>
  )
}

export default AllBuses