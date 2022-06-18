import style from "../styles/addcity.module.css"
import React, {useState} from "react";
import { getData } from "../store/slices/weather";
import {useDispatch, useSelector} from "react-redux"
import {GoAlert} from "react-icons/go"


function Search() {
    
    
    const dispatch = useDispatch();
    
    let {cityExists} = useSelector(state => state.weather)
    
    function Exists(){
        return(
            <div className={style.ContainerExists}>
                <GoAlert/>
                <h3>{cityExists.message}</h3>
            </div>
        )
    }

    let [valorInput, setValorInput] = useState("");


    return ( 
        <div className={style.container}>
            
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(getData(valorInput));
                setValorInput("");
            }}>

                <input className={style.inputBuscar} type="text" 
                    onChange={(event) => setValorInput(event.target.value)} 
                    placeholder='Ingrese una Ciudad...' 
                    value={valorInput}
                />
                <button type='submit' className={style.btnBuscar}>AGREGAR</button>
            </form>
            {cityExists.visible ? <Exists/> : " "}
        </div>
     );
}

export default Search;