import style from "../styles/contact.module.css"
import {useState} from "react"
import {BsCheckCircleFill} from "react-icons/bs"
import {MdEmail, MdMarkEmailRead} from "react-icons/md"
function validate(input) {
    let error = {};
  
    if(!input.name){
        error.name = "Name is required";
    }

    if(!input.email){
      error.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
      error.email = "Email is invalid";
    }

    if(!input.message){
      error.message = "message is required";
    }
    return error
}

function Send() {
    return(
        <>
            <div className={style.ContainerSend}>
                <h3>Fue enviado con exito...</h3>
                <BsCheckCircleFill/>
            </div>
        </>
    )
}


function Contact() {
    
    let user = {
        name: "",
        email: "",
        message: ""
    }
    
    let [input, setInput] = useState(user);
    
    let [error, setError] = useState({});
    
    let [visible, setVisible] = useState(false);

    let handleOnChange = (e) =>{
        setInput(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }))
    
        setError(validate({...input, [e.target.name]: e.target.value}));
    }

    let handleSubmit = (e) =>{
        setTimeout(() => {
            setVisible(true);
        }, 1000);
        setTimeout(() => {
            window.location.href = window.location.href; 
        }, 3000);
        clearTimeout();

        e.preventDefault();
        //Aca se enviara la data a DB
    }

    return (
        <div className={style.Container}>
            <h2 className={style.Title}>CONTACTANOS</h2>
            <form className={style.form}>
                <div className={style.IconSend}>
                    {visible? <MdMarkEmailRead/> : <MdEmail/>}
                </div>
                <div className={style.ContainInputs}>
                    <div className={style.InputsLabels}>
                        <label>Nombre: </label>
                        <input type="text" name="name" onChange={handleOnChange} required></input>
                    </div>
                    <div className={style.InputsLabels}>
                        <label>Email: </label>
                        <input type="text" name="email" onChange={handleOnChange} required></input>
                    </div>
                    <div className={style.InputsLabels}>
                        <label>Mensaje: </label>
                        <textarea name="message" onChange={handleOnChange} required minLength="10"/>
                    </div> 
                    <input type="button" value="Enviar" onClick={handleSubmit} disabled={!input.name || Object.keys(error).length>0}/>
                    {visible? <Send/> : " "}
                </div>
            </form>
        </div> 
     );
}

export default Contact;