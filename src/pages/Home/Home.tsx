import "./Home.css";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";




const Home: React.FC = () => {

  return (
    <>
      <div className="main-home">
        <div className="home-container">
          <h3>This is a Spring Boot and React<br/> Ecommerce Project</h3>
          <p>This project use Java and Spring Boot for the Backend.<br/> 
          With an authentication and security system using JWT with Spring Boot Security, complemented by a web frontend built in React and CSS using TypeScript, without additional libraries. 
          </p>
          <div className="icons-container">
           <div className="individual-icon-container"><FaJava size={35}/></div>
           <div className="individual-icon-container"><SiSpring size={35}/></div>
           <div className="individual-icon-container"><FaReact size={35}/></div>
           <div className="individual-icon-container"><SiTypescript size={35}/></div>
          </div>
        </div>
        <footer className="homefooter">
        <p>Emmanuel Rodriguez 2024.</p>
        <div className="contacticons">
        <a href="https://www.linkedin.com/in/emmanuelrodr%C3%ADguezbuzzo/" className="individual-icon-container"><FaLinkedin color="white" size={20}/></a>
        <a href="https://github.com/EmmaRodR" className="individual-icon-container"><FaGithub color="white" size={20}/></a>
        <a href="mailto:emmanuelrgeek@gmail.com?subject=%20Oportunidad%20Laboral&body=Estimado%20Emmanuel,%0A%0AQuisiéramos%20ponernos%20en%20contacto%20con%20usted%20para%20discutir%20una%20posible%20oportunidad%20laboral.%20Por%20favor,%20háganos%20saber%20si%20está%20disponible%20para%20una%20conversación%20o%20una%20entrevista.%0A%0AAtentamente,%0A%0A[Nombre%20del%20reclutador]%0A[Nombre%20de%20la%20empresa]%0A[Teléfono%20de%20contacto]" 
          className="individual-icon-container"><CiMail color="white" size={20}/></a>
        </div>
        </footer>
      </div>
    </>
  );
};


export default Home;
