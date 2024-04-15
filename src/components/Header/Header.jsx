import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"
import HeaderForm from "../HeaderForm/HeaderForm";

const Header = () => {
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <header className='header'>
            <a
                href="/"
                className="header__logo-link"
            >
                <img
                src={logo}
                alt="BrainFlix Logo"
                className='header__logo'
            />
            </a>
            <HeaderForm handleSubmit={handleSubmit} />
        </header>
    )
}

export default Header