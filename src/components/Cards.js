import style from "../styles/cards.module.css"
import {GoAlert} from "react-icons/go"
import Card from "../components/Card"
import {useSelector} from "react-redux"

function Cards() {
   
    const {lista } = useSelector(state => state.weather)
    if(lista.length !== 0){
        return(
          <div className={style.container}>
            {lista.map(e => 
            <Card
            nombreCiudad={e.name} 
            img={e.weather[0].icon}
            temMax={e.main.temp_max} 
            temMin={e.main.temp_min} 
            id={e.id}
            key={e.id}/>)}
          </div>
        )
      }else{
        return(
          <div className={style.DivNotCity}>
              <GoAlert className={style.alert}/>
              <h3 className={style.notCity}>No hay ciudades cargadas...</h3>
          </div>
        )
        
      }
}

export default Cards;