import "./Header.scss"
import logo from "../../assets/logo/BrainFlix-logo.svg"

const Header = () => {
    return (
        <header>
            <img
                src={logo}
                alt="BrainFlix Logo"
                className='header__logo'
            />
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    name='header__search-bar'
                    className="header__search-bar"
                />
                <div
                    className="header__avatar"
                ></div>
                <button
                    type="submit"
                >UPLOAD</button>
            </form>
        </header>
    )
}

export default Header