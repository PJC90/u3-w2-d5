



const LocalitaSalvate = (props)=>{

  

    return(
      <>
      <div>Località Salvate:</div>
      <ul>
      {props.locationToSave.map((loc, i)=>(
        <li key={i}>{loc}</li>
      ))}
      </ul>
      </>
    )
}

export default LocalitaSalvate

//manca la parte in cui lanciare le fetch sulle località salvate in modo da avere le previsioni anche su questa pagina