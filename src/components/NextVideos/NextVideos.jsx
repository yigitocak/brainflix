import NextVideosList from "../NextVideosList/NextVideosList";
import "./NextVideos.scss"

function NextVideos({ nextVideos }){
    return(
        <section
            className="next-video"
        >
            <h3
                className="next-video__header"
            >
                NEXT VIDEOS</h3>
            <NextVideosList nextVideos={nextVideos} />
        </section>
    )
}

export default NextVideos