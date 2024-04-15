import NextVideosItem from "../NextVideosItem/NextVideosItem";
import "./NextVideosList.scss"

function NextVideosList({ nextVideos ,videoId }){
    return (
        <ul
            className="next-video__list"
        >
            {nextVideos
                .filter(video => video.id !== videoId)
                .map(video => {
                return (
                    <NextVideosItem
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        channel={video.channel}
                        src={video.image}
                        videoId={videoId}
                    />
                )})
            }
        </ul>
    )
}

export default NextVideosList
