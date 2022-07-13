import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import style from "../styles/city.module.css"
function City() {

    let { lista } = useSelector(state => state.weather)
    let { id } = useParams();

    function filtrar(id) {
        let dato = lista.find(e => e.id === parseInt(id))
        return dato;
    }


    let data = filtrar(id);

    return (
        <div className={style.Container}>
            <h1>{data.name}</h1>
            <div className={style.ContainerDatos}>
                <p>Temperatura: <b>{data.main.temp}ºC</b></p>
                <p>Temperatura Minima: <b>{data.main.temp_max} ºC</b></p>
                <p>Temperatura Maxima: <b>{data.main.temp_min} ºC</b></p>
                <p>Viento: <b>{data.wind.speed} km/h</b></p>
                <p>Cantidad de nubes: <b>{data.clouds.all}</b></p>
                <p>Latitud: <b>{data.coord.lat}º</b></p>
                <p>Longitud: <b>{data.coord.lon}º</b></p>
            </div>
        </div>
    );
}

export default City;