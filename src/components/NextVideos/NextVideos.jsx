import NextVideosList from "../NextVideosList/NextVideosList";
import "./NextVideos.scss"

function NextVideos({ changeVideo, filteredVideos }){

    return(
        <section
            className="next-video"
        >
            <h3
                className="next-video__header"
            >
                NEXT VIDEOS</h3>
            <NextVideosList nextVideos={filteredVideos} changeVideo={changeVideo}/>
        </section>
    )
}

export default NextVideos