import Video from "../Video/Video"
import videosData from "../../data/video-details.json"
import Comments from "../Comments/Comments"
import NextVideos from "../NextVideos/NextVideos"

function Main({ videosData, nextVideos }){
    return(
        <>
            <Video videosData={videosData} />
            <Comments videosData={videosData} />
            <NextVideos nextVideos={nextVideos} />
        </>
    )
}

export default Main