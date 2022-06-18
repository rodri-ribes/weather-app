import style from "../styles/about.module.css"

function About() {
    return ( 
        <div className={style.Container}>
            <h1 className={style.Title}>ACERCA DE</h1>
            <div className={style.ContainerInfo}>
                <div className={style.Info}>
                    <p>Esta web fue realizada con la api de OpenWeatherMap <br/>
                        <br/>
                        Desarrollada por Rodrigo Ribes

                    </p>
                </div>
            </div>
        </div>

    );
}

export default About;