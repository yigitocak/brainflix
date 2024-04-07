import {useState} from "react";
import Video from "../Video/Video"
import videosData from "../../data/video-details.json"
import Comments from "../Comments/Comments"
import NextVideos from "../NextVideos/NextVideos"
import nextVideos from "../../data/videos.json";

function Main(){
    const [currentVideo, setCurrentVideo] = useState(videosData[0])

    function changeVideo(id){
        const newVideo = videosData.find(video => video.id === id)
        setCurrentVideo(newVideo)
    }

    const filteredVideos = nextVideos.filter( video =>video.id !== currentVideo.id)

    return(
        <>
            <Video currentVideo={currentVideo} />
            <Comments videoComments={currentVideo.comments} />
            <NextVideos changeVideo={changeVideo} filteredVideos={filteredVideos}/>
        </>
    )
}

export default Main