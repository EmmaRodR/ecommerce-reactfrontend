import "./Home.css";
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
           <div className="individual-icon-container"><img src="/public/icons8-java-50.png" alt="" /></div>
           <div className="individual-icon-container"><img src="/public/spring-boot.svg" width="50" alt="" /></div>
           <div className="individual-icon-container"><img src="/public/icons8-react-48.png"width={50} alt="" /></div>
           <div className="individual-icon-container"><img src="/public/icons8-typescript-50.png" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Home;
