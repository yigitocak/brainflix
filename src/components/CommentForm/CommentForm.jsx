import commentIcon from "../../assets/icons/add_comment.svg"
import "./CommentForm.scss"
import {useState} from "react";
import axios from "axios";
import {API_KEY, baseUrl} from "../../utils/utils";

function CommentForm({ id, onAddComment }){
    const [comment, setComment] = useState("");
    const [isValid, setIsValid] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(comment === ""){
            setIsValid(false)
            return
        }
        else {
            setIsValid(true)
        }

        const data = {
            name: "Yigit Ocak",
            comment: comment
        };
        try {
            const response = await axios.post(`${baseUrl}videos/${id}/comments?api_key=${API_KEY}`, data);
            onAddComment(response.data);
            setComment("");
        } catch (err) {
            console.error("Failed to post comment:", err);
        }


    };

    return(
        <form
            className="comment__form"
            onSubmit={handleSubmit}
        >
            <div
                className="comment__container"
            >
                <div
                    className="comment__avatar"
                ></div>
                <div
                    className="comment__box">

                    <label
                        htmlFor="comment__add"
                        className="comment__label"
                    >
                        JOIN THE CONVERSATION
                    </label>
                    <textarea
                        className={isValid ? "comment__add" : "comment__add-invalid"}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        id="comment__add"
                        placeholder="Add a new comment"
                    >
                        </textarea>

                    <button
                        className="comment__button"
                    >
                        <img
                            src={commentIcon}
                            alt="add comment icon"
                            className="comment__button-image"
                        />
                        COMMENT
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm