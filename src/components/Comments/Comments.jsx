import CommentForm from "../CommentForm/CommentForm"
import "./Comments.scss"
import CommentList from "../CommentList/CommentList"

function Comments({ videosData }) {
    return (
        <section
                className="comment"
        >
            <h3
                className="comment__count"
            >
                {videosData[0].comments.length} Comments
            </h3>
            <CommentForm />
            <CommentList videosData={videosData} />
        </section>
    )
}

export default Comments