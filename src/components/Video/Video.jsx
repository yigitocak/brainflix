import "./Video.scss"
import viewIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"

const Video = ({ videosData }) => {
    console.log(videosData)
    return (
        <section className="video">
            <video
                className="video__content"
                controls
                poster={videosData[0].image}
            >
            </video>
            <div
                className="video__container"
            >
                <h1
                    className="video__title"
                >
                    {videosData[0].title}
                </h1>
                <div
                    className="video__info"
                >
                    <h2
                        className="video__channel"
                    >
                        By {videosData[0].channel}
                    </h2>
                    <div
                        className="video__views"
                    >
                        <img
                            src={viewIcon}
                            alt="views icon"
                            className="video__info-image"
                        />
                        <span>{videosData[0].views}</span>
                    </div>

                    <span
                        className="video__date"
                    >
                    {new Date(videosData[0].timestamp).toLocaleDateString()}
                    </span>

                    <div
                        className="video__likes"
                    >
                        <img
                            src={likesIcon}
                            alt="likes icon"
                            className="video__info-image"
                        />
                        <span>{videosData[0].likes}</span>
                    </div>
                </div>
            </div>
            <p
                className="video__description"
            >
                {videosData[0].description}
            </p>
        </section>
    )
}

export default Video