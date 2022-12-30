import './Filters.css';

export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {
  return(
      
      <div className="filters form-check form-switch px-5 py-2">
        <input
          className="Input form-check-input" 
          type="checkbox" 
          role="switch" 
          id={datoFiltro} 
          value={datoFiltro} 
          onChange={muestraValor}/>
        <label 
          className="form-check-label" 
          htmlFor={nombreFiltro}>
          {nombreFiltro}
        </label>
      </div>
  )
}