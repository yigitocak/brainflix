import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"
import HeaderForm from "../HeaderForm/HeaderForm";
import {Link} from "react-router-dom";

const Header = ({ reset }) => {
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <header className='header'>
            <Link
                to="/"
                className="header__logo-link"
            >
                <img
                src={logo}
                alt="BrainFlix Logo"
                className='header__logo'
            />
            </Link>
            <HeaderForm handleSubmit={handleSubmit} reset={reset}/>
        </header>
    )
}

export default Header