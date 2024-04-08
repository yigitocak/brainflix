import NextVideosItem from "../NextVideosItem/NextVideosItem";
import "./NextVideosList.scss"

function NextVideosList({ nextVideos, changeVideo }){

    return (
        <ul
            className="next-video__list"
        >
            {nextVideos.map(video => {
                return (
                    <NextVideosItem
                        image={video.image}
                        id={video.id}
                        channel={video.channel}
                        title={video.title}
                        key={video.id}
                        changeVideo={changeVideo}
                    />
                )
            })}
        </ul>
    )
}

export default NextVideosList