import Main from "../../components/Main/Main"
import {useParams} from "react-router-dom";

export const HomePage = ({ nextVideos }) => {
    const { videoId } = useParams();

    if (!nextVideos) {
        return <div>Loading...</div>;
    }

    return (
        <Main nextVideos={nextVideos} videoId={videoId} />
    );
};
