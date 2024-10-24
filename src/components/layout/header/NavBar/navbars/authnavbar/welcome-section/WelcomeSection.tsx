import './WelcomeSection.css'
import { RiArrowDropDownLine } from "react-icons/ri";


interface WelcomeSectionProps {
  children: React.ReactNode
  name: string | null;
  state: boolean;
  handleDropDownState: () => void
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  name,
  children,
  state,
  handleDropDownState
}) => {


  return (
    <>
      <div className="welcome-container">
        <p>Welcome {name}!</p>
        <div onClick={handleDropDownState} className="menubtn-container">
        <RiArrowDropDownLine size={22}/>
        </div>
      </div>
      {state && (
        <ul className="dropdown">
          <li className="dropdown-menu">{children}</li>
        </ul>
      )}
    </>
  );
};

export default WelcomeSection;
