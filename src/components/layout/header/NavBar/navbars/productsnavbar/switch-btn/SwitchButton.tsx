import { FaSun  } from 'react-icons/fa';
import { IoMoon } from "react-icons/io5";
import './SwitchButton.css';
import { useTheme } from '../../../../../../../context/ThemeContext';

const SwitchButton = () => {
  const {theme,setTheme} = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : 'light')
  }

  return (
    <div className="switch" onClick={handleToggle}>
      {theme ==='dark' ? <IoMoon color='grey'/> : <FaSun color='white'/> }
    </div>
  );
};

export default SwitchButton;
