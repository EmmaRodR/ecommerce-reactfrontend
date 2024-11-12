import "./Home.css";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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
           <div className="individual-icon-container"><FaJava size={50}/></div>
           <div className="individual-icon-container"><SiSpring size={50}/></div>
           <div className="individual-icon-container"><FaReact size={50}/></div>
           <div className="individual-icon-container"><SiTypescript size={50}/></div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
