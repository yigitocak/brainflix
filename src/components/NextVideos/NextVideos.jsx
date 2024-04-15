import NextVideosList from "../NextVideosList/NextVideosList";
import "./NextVideos.scss"

function NextVideos({ nextVideos, videoId }){
    return(
        <section
            className="next-video"
        >
            <h3
                className="next-video__header"
            >
                NEXT VIDEOS</h3>
            <NextVideosList nextVideos={nextVideos} videoId={videoId}/>
        </section>
    )
}

export default NextVideos