import "./Video.scss"
import viewIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"

const Video = ({ currentVideo }) => {

    return (
        <section className="video">
            <video
                className="video__content"
                controls
                poster={currentVideo.image}
            >
            </video>
            <div
                className="video__box"
            >
                <div
                    className="video__container"
                >
                    <h1
                        className="video__title"
                    >
                        {currentVideo.title}
                    </h1>
                    <div
                        className="video__info"
                    >
                        <h2
                            className="video__channel"
                        >
                            By {currentVideo.channel}
                        </h2>
                        <div
                            className="video__views"
                        >
                            <img
                                src={viewIcon}
                                alt="views icon"
                                className="video__info-image"
                            />
                            <span>{currentVideo.views}</span>
                        </div>

                        <span
                            className="video__date"
                        >
                        {new Date(currentVideo.timestamp).toLocaleDateString()}
                        </span>

                        <div
                            className="video__likes"
                        >
                            <img
                                src={likesIcon}
                                alt="likes icon"
                                className="video__info-image"
                            />
                            <span>{currentVideo.likes}</span>
                        </div>
                    </div>
                </div>
                <p
                    className="video__description"
                >
                    {currentVideo.description}
                </p>
            </div>
        </section>
    )
}

export default Video