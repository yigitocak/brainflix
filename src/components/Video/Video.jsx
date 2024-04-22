import "./Video.scss"
import viewIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"

const Video = ({video}) => {
    return !video ? <h1>Loading</h1> :(
        <section className="video">
            <video
                key={video.id}
                className="video__content"
                controls
                poster={video.image}
                src={video.video}
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
                        {video.title}
                    </h1>
                    <div
                        className="video__info"
                    >
                        <h2
                            className="video__channel"
                        >
                            By {video.channel}
                        </h2>
                        <div
                            className="video__views"
                        >
                            <img
                                src={viewIcon}
                                alt="views icon"
                                className="video__info-image"
                            />
                            <span>{video.views}</span>
                        </div>

                        <span
                            className="video__date"
                        >
                        {new Date(video.timestamp).toLocaleDateString()}
                        </span>

                        <div
                            className="video__likes"
                        >
                            <img
                                src={likesIcon}
                                alt="likes icon"
                                className="video__info-image"
                            />
                            <span>{video.likes}</span>
                        </div>
                    </div>
                </div>
                <p
                    className="video__description"
                >
                    {video.description}
                </p>
            </div>
        </section>
    )
}

export default Video