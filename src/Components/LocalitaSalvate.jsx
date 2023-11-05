import { useEffect, useState } from "react"



const LocalitaSalvate = ()=>{

  const[savedLocation, setSavedLocation] = useState([])

  useEffect(()=>{
    const savedData = localStorage.getItem("savedLocation")
    if(savedData){
      const savedLocationArray = JSON.parse(savedData)
      setSavedLocation(savedLocationArray)
    }
  },[])

    return(
      <>
      <div>Località Salvate:</div>
      <ul>
        {savedLocation && savedLocation.map((location, index)=>(
          <li key={index}>{location.name} - {location.state} - {location.country}</li>
        ))}
      </ul>
      </>
    )
}

export default LocalitaSalvate