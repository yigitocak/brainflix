import upload from "../../assets/icons/upload.svg";
import "./HeaderForm.scss"
import { useNavigate } from "react-router-dom"

const HeaderForm = ({ handleSubmit }) => {
    const navigate = useNavigate()
    return (
        <form
            onSubmit={handleSubmit}
            className="header__form"
        >
            <div
                className="header__container"
            >
                <input
                    type="text"
                    placeholder="Search"
                    name='header__search-bar'
                    className="header__search-bar"
                />
                <div
                    className="header__avatar header__avatar--mobile"
                ></div>
            </div>
            <button
                type="submit"
                className="header__button"
                onClick={() => navigate("/upload")}
            >
                <img
                    src={upload}
                    alt="upload icon"
                    className="header__button-image"
                />
                UPLOAD
            </button>
            <div
                className="header__avatar header__avatar--tablet"
            ></div>
        </form>
    )
}

export default HeaderForm