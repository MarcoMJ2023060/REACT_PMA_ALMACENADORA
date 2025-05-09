import { useNavigate } from "react-router-dom";
import logo from '../../assets/logobs2.png'

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                width='78%'
                height='100%'
                src={logo}
                alt="Logo"
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigateToDashboardPage = () => {
        navigate('/')
    }

    const handleNavigateToHomePage = () => {
        navigate('/')
    }

    return (
        <div className="nav-container">
            <div className="logo-box">
                <NavLogo />
                <NavButton text='INICIO' onClickHandler={handleNavigateToHomePage} />
            </div>
            <div className="nav-buttons-container">
                {!isLogger ? (
                    <div>
                        <NavButton text='PAGINA DASH' onClickHandler={handleNavigateToDashboardPage} />
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </div>
                ) : null}
            </div>
        </div>
    )
}