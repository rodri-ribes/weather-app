import style from "../styles/Footer.module.css"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsFillBriefcaseFill} from "react-icons/bs";



function Footer() {
    return ( 
        <>
            <footer className={style.FooterContainer}>
                <div className={style.Container}>
                    <div className={style.Terms}>
                        <p>&copy;{new Date().getFullYear()} Weather-App</p>
                    </div>
                    <div className={style.Social}>
                        <div>
                            <a href="https://github.com/rodri-ribes?tab=repositories" target="_blank" rel="noreferrer">
                                <FaGithub className={style.Icono}/> 
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigo-ribes-9793b5207/" target="_blank" rel="noreferrer">
                                <FaLinkedin className={style.Icono}/>
                            </a>
                            <a href="." target="_blank" rel="noreferrer">
                                <BsFillBriefcaseFill className={style.Icono}/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=+5492246517581&text=Hola%20Rodrigo,%20" target="_blank" rel="noreferrer">
                                <FaWhatsapp className={style.Icono}/> 
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;