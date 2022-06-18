import style from "../styles/card.module.css"
import {useDispatch} from "react-redux"
import {deleteCard} from "../store/slices/weather/index"
import {Link} from "react-router-dom"

function Card({nombreCiudad, img, temMax, temMin, id}) {

    let tiempo;
    if (img === "01d" || img === "02d") {
      tiempo = style.soleadoNublado;
    }else if (img === "03d" || img === "04d" || img === "50d" || img === "50n"){
      tiempo = style.nubladoNeblina;
    }else if (img === "10d"  || img === "09d"){
      tiempo = style.lluviaSoleado;
    }else if (img === "11d" || img === "11n"){
      tiempo = style.tormenta;
    }else if (img === "13d" || img === "13n"){
      tiempo = style.nieve;
    }else if (img === "01n" || img === "02n" || img === "04n" || img === "03n"){
      tiempo = style.nocheNublado;
    }else if (img === "09n" || img === "10n"){
      tiempo = style.nocheLluvia;
    }

    const dispatch = useDispatch()
    return ( 
        <div className={tiempo}>
            <span onClick={() => dispatch(deleteCard(id))} className={style.btnCerrar}>X</span>
            <h3 className={style.nombreCiudad}> {nombreCiudad}</h3>
            <div className={style.divMinMax}>
                <div>
                <p className={style.MinMax}>Min</p>
                <p className={style.MinMax}>{temMin}</p>
                </div>
                <div>
                <p className={style.MinMax}>Max</p>
                <p className={style.MinMax}>{temMax}</p>  
                </div>
                <img className={style.imgLogo} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
            </div>
            <Link to={`/ciudad/${id}`} className={style.verMas}>Ver mas...</Link>
        </div>
     );
}

export default Card;