import Video from "../Video/Video";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, baseUrl } from "../../utils/utils";
import { useParams } from "react-router-dom";

function Main({ nextVideos}) {
    const { videoId } = useParams();
    const [displayedVideo, setDisplayedVideo] = useState(null);
    const [defaultVideoId, setDefaultVideoId] = useState(videoId);

    useEffect(() => {
        if (!videoId && nextVideos && nextVideos.length > 0) {
            setDefaultVideoId(nextVideos[0].id);
        }
    }, [nextVideos, videoId]);

    useEffect(() => {
        const videoIdToFetch = videoId || defaultVideoId;
        if (videoIdToFetch) {
            const fetchVideo = async () => {
                const response = await axios.get(`${baseUrl}videos/${videoIdToFetch}?api_key=${API_KEY}`);
                if (response.data) {
                    setDisplayedVideo(response.data);
                }
            };
            fetchVideo();
        }
    }, [defaultVideoId, videoId]);

    if (!nextVideos || nextVideos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <main className="main">
            <Video video={displayedVideo} />
            <Comments comments={displayedVideo ? displayedVideo.comments : []} id={videoId || defaultVideoId} />
            <NextVideos nextVideos={nextVideos} videoId={videoId || defaultVideoId} />
        </main>
    );
}

export default Main;
