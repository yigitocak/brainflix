import NextVideosItem from "../NextVideosItem/NextVideosItem";
import "./NextVideosList.scss"

function NextVideosList({ nextVideos }){
    return (
        <ul
            className="next-video__list"
        >
            {nextVideos.map((id) => (
                <NextVideosItem id={id}/>
            ))}
        </ul>
    )
}

export default NextVideosList