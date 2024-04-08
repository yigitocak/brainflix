import './CommentItem.scss'

function CommentItem({ comment }){
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
                {comment.name}
            </span>
            <span
                className="comment__time"
            >
                {new Date(comment.timestamp).toLocaleDateString()}
            </span>
            <p
                className="comment__paragraph"
            >
                {comment.comment}
            </p>
        </li>
    )
}

export default CommentItem