import './CommentItem.scss'

function CommentItem({ name, comment, timestamp }){
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
        </li>
    )
}

export default CommentItem