import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"
import HeaderForm from "../HeaderForm/HeaderForm";

const Header = () => {
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <header className='header'>
            <img
                src={logo}
                alt="BrainFlix Logo"
                className='header__logo'
            />
            <HeaderForm handleSubmit={handleSubmit} />
        </header>
    )
}

export default Header