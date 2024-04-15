import CommentForm from "../CommentForm/CommentForm"
import "./Comments.scss"
import CommentList from "../CommentList/CommentList"

function Comments({ comments }) {
    return !comments ? <div>Loading...</div> : (
        <section
                className="comment"
        >
            <h3
                className="comment__count"
            >
                {comments.length} Comments
            </h3>
            <CommentForm />
            <CommentList comments={comments} />
        </section>
    )
}

export default Comments