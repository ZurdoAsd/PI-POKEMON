import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from "react";
import { FiltroTypes,FiltroApiDb,ordenAlpha,OrdenSTR,getTypes} from '../redux/actions'
import "../assets/Sorts.css"

 function Sorts({setCurrentPage,setOrder}){
    const dispatch = useDispatch(); 
    const allTypes = useSelector((state)=> state.types);
    useEffect(() => {
      dispatch(getTypes());
    }, [dispatch]);

    const alpha= (e)=> {
      e.preventDefault();
        dispatch(ordenAlpha(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado${e.target.value}`);
      }
      const orderBySTR= (e)=> {
        e.preventDefault();
        dispatch(OrdenSTR(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado${e.target.value}`)
      }
    const filtroCreadoDB = (e) => {
        e.preventDefault();
        dispatch(FiltroApiDb(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenado${e.target.value}`)
        ;}
     const filtroPorTypes = (e) => {
          e.preventDefault();
          dispatch(FiltroTypes(e.target.value))
          setCurrentPage(1);
          setOrder(`ordenado${e.target.value}`)
          ;}

        
 console.log(allTypes)       

return(
<div className="estilos.content">

<select
  onChange={alpha}>
  <option value='' hidden>ORDER BY NAME</option>
  <option value="A-Z">A-Z</option>
  <option value="Z-A">Z-A</option>
</select>



<select
  onChange={orderBySTR}>
  <option value="" hidden >ORDER BY STRENGTH</option>
  <option value="STR">STR++</option>
  <option value="STR-">STR--</option>
</select>




<select onChange={filtroPorTypes}>
  <option value = "" hidden>FILTER BY TYPE</option>
  <option value="123">All Types</option>
  {allTypes.map(e => { return( <option value={e.name} key={e.name}>{e.name}</option>)})
  }
  
</select>



<select
  onChange={filtroCreadoDB}>  
<option value = "" hidden>FILTER BY ORIGIN</option>
<option value="All">All</option>
<option value="Created">Created</option>
<option value="Existing">Existing</option>
</select>



</div>
)
}

export default Sorts