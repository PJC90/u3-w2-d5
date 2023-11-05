



const LocalitaSalvate = (props)=>{

  

    return(
      <>
      <div>Località Salvate:</div>
      <ul>
      {props.sav.map((loc, i)=>(
        <li key={i}>{loc}</li>
      ))}
      </ul>
      </>
    )
}

export default LocalitaSalvate