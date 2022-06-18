import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const WeatherSlice = createSlice({
    name: "weather",
    initialState: {
        lista: [],
        cityExists: {
            message: "",
            visible: false
        }
    },
    reducers: {
        Loadcity: (state, action) =>{
            state.lista = state.lista.concat(action.payload)
            state.cityExists.visible = false;
            let aux = state.lista.filter(e => e.id === action.payload.id)
            if(aux.length>1){
                state.lista.pop()
                state.cityExists.visible = true;
                state.cityExists.message = "Ya se encuentra cargada la ciudad..."
            }
        },
        deletCard: (state, action) =>{
            state.lista = state.lista.filter(e => e.id !== action.payload)
        },
        notExists: (state) =>{
            state.cityExists.visible = true
            state.cityExists.message = "No existe esa ciudad..."
        }
    }
})

export const {Loadcity, deletCard, notExists} = WeatherSlice.actions

export default WeatherSlice.reducer;

export const getData = (valor) => (dispatch) =>{
    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=fa2182e79cc77099a9c9a74e2516166f&units=metric`)
    .then(resp => {
        dispatch(Loadcity(resp.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(notExists());
    });
}

export const deleteCard = (id) => (dispatch) =>{
    dispatch(deletCard(id));
}
