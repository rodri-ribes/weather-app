import style from "../styles/about.module.css"

function About() {
    return ( 
        <div className={style.Container}>
            <h1 className={style.Title}>ACERCA DE</h1>
            <div className={style.ContainerInfo}>
                <div className={style.Info}>
                    <h1>COMO SE DESARROLLO LA WEB</h1>
                    <hr/>
                    <p>La idea de esta web es la implementacion de la API de OpenWeatherMap</p>
                        <br/>
                        <p>Se usaron las siguiente librerias para su desarrollo:  <br/> <br/>
                        <b>React,  React-Redux,  Redux,  Redux-Toolkit,  Axios,  React-Router</b>
                    <p/>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default About;