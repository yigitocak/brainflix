import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"
import upload from "../../assets/icons/upload.svg"

const Header = () => {
    return (
        <header className='header'>
            <img
                src={logo}
                alt="BrainFlix Logo"
                className='header__logo'
            />
            <form className="header__form">
                <div className="header__container">
                    <input
                        type="text"
                        placeholder="Search"
                        name='header__search-bar'
                        className="header__search-bar"
                    />
                    <div
                        className="header__avatar"
                    ></div>
                </div>
                <button
                    type="submit"
                    className="header__button"
                ><img src={upload} alt="upload icon" className="header__button-image"></img>UPLOAD</button>
            </form>
        </header>
    )
}

export default Header