import './CommentItem.scss'
import deleteIcon from "../../assets/icons/delete.svg"
import axios from "axios";
import {API_KEY, baseUrl} from "../../utils/utils";

function CommentItem({ id, name, comment, timestamp, videoId, onDeleteComment }){
    const handleClick = () => {
        const deleteRequest = async () => {
            try {
                const response = await axios.delete(`${baseUrl}videos/${videoId}/comments/${id}?api_key=${API_KEY}`);
                if (response.status === 200) {
                    onDeleteComment(id);
                }
            } catch (err) {
                console.error("Failed to delete comment:", err);
            }
        };
        deleteRequest();
    };

    return (
        <li
            className="comment__item"
        >
            <span
                className="comment__user-avatar"
            >
            </span>
            <span
                className="comment__name-user"
            >
                {name}
            </span>
            <span
                className="comment__time"
            >
                {new Date(timestamp).toLocaleDateString()}
            </span>
            <p
                className="comment__paragraph"
            >
                {comment}
            </p>
            <img
                src={deleteIcon}
                className="comment__delete"
                alt="delete icon"
                onClick={handleClick}
            />
        </li>
    )
}

export default CommentItem