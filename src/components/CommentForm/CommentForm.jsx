import commentIcon from "../../assets/icons/add_comment.svg"
import "./CommentForm.scss"

function CommentForm(){

    return(
        <form
            className="comment__form"
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
                        className="comment__add"
                        name="addedComment"
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