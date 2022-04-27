import { NavLink } from "react-router-dom";
import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'

const SecHeader = ({Logo , dropdownItem , MenuInfo, IcoName}) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src={Logo} alt="logo" /></span></a>
          
          {/* Toggler/collapsibe Button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}

                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Protocols</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdownItem && dropdownItem.map((item , key) => (
                      <a key={key} className="dropdown-item" href={item.path} target="_blank" rel="noreferrer noopener">{item.nameLink}</a>
                  ))}
                </div>
              </li>
              {/*<li className="lh-55px"><a href="https://discord.gg/GJR3RjNfK3" className="btn login-btn ml-50">Discord</a></li>*/}
              <div className="header-social-info fadeInUp" data-wow-delay="0.4s">
                      {IcoName && IcoName.map((item , key) => (
                          <a key={key} href={item.linksrc}><i className={item.IcoName} aria-hidden="true" /></a>
                              
                      ))}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default SecHeader;