import CommentForm from "../CommentForm/CommentForm"
import "./Comments.scss"
import CommentList from "../CommentList/CommentList"

function Comments({ videoComments }) {
    return (
        <section
                className="comment"
        >
            <h3
                className="comment__count"
            >
                {videoComments.length} Comments
            </h3>
            <CommentForm />
            <CommentList videoComments={videoComments} />
        </section>
    )
}

export default Comments