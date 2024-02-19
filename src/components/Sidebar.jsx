import { Link } from "react-router-dom";
import * as Icons from "react-icons/bs";
import { useState } from 'react';
import Logo from'./Logo';

const Sidebar = ({show}) => {
  const [activeLink, setActiveLink] = useState('/');
  const handleSetActiveLink = (route) => {setActiveLink(route);};
    return (
      <div className={show ? 'sidebar active':'sidebar'}>
        <div className="prueba">
          <ul>
          <div className="Logo">
          <Logo />
          </div>
          <div className="Nameproduct">
            <span className="product-name">Estadísticas Chat Mentor-AI</span>
            <br></br>
            <span className="product-type">Formación Claro-Salesforce</span>
          </div>
          </ul>
        </div>
        

        <ul>
          <li className={activeLink === '/' ? 'active' : ''} onClick={() => handleSetActiveLink('/')}>
            <Link to="/"><Icons.BsBarChartFill />Estadísticas</Link>
          </li>
          </ul>
          <ul>
          <li className={activeLink === '/Explorer' ? 'active' : ''} onClick={() => handleSetActiveLink('/Explorer')}>
            <Link to="/Explorer"><Icons.BsPersonCircle />Explorador</Link>
          </li>
        </ul>
        <ul>
          <li className={activeLink === '/SignUpForm' ? 'active' : ''} onClick={() => handleSetActiveLink('/SignUpForm')}>
            <Link to="/SignUpForm"><Icons.BsPersonCircle />SignUpForm</Link>
          </li>
        </ul>
      </div>
    );
  };
  
export default Sidebar;